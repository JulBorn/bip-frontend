import axios from 'axios'
import {setFiles} from "../reducers/fileReducer";
import jwt_decode from "jwt-decode";
import getBrowserFingerprint from "get-browser-fingerprint";
import {beginLoad, endLoad, inLoad, closeLoad} from "../reducers/loadReducer";

export function getFiles() {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwt_decode(token);
            console.log("Decoded Token", decodedToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                const fingerprint = getBrowserFingerprint();
                const refresh = await axios.post('https://api-glitchspeech.herokuapp.com/users/refresh', {
                    "fingerprint":fingerprint},{ withCredentials: true
                })
                localStorage.setItem('token', response.data.jwtToken);
            }
            const response = await axios.get('https://api-glitchspeech.herokuapp.com/users/self/audios?date=latest', {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })

            //alert(response.oldData)
            //alert("ok")

            dispatch(setFiles(response.data.infos, response.data.prevDate, response.data.infos[0].date,
                response.data.nextDate, response.data.maxWords,
                response.data.numAllSwears,
                response.data.numAllParasites, response.data.avgSpeechSpeed))
        } catch (e) {
            //alert(e.response.data.message)
        }
    }
}

export function getNewFiles(date) {
    return async dispatch => {
        try {
            const response = await axios.get('https://api-glitchspeech.herokuapp.com/users/self/audios?date='+date, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })

            dispatch(setFiles(response.data.infos, response.data.prevDate, response.data.infos[0].date,
                response.data.nextDate,
                response.data.maxWords, response.data.numAllSwears,
                response.data.numAllParasites, response.data.avgSpeechSpeed))
        } catch (e) {
            //alert(e.response.data.message)
        }
    }
}

export function uploadFile(file, dirId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            if (dirId) {
                formData.append('parent', dirId)
            }
            const response = await axios.post('https://api-glitchspeech.herokuapp.com/audios', formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength)
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        console.log(progress)
                    }
                }
            });
            //alert(response.data.status)
            let id=response.data.queueId
            dispatch(beginLoad(id))
            while (1){
                setTimeout(() => {
                    const response = axios.get('https://api-glitchspeech.herokuapp.com/audio_queue/' + id, {
                        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                        maxRedirects: 0
                    })
                }, 2000);
                if (response.status===200){
                    //alert("ok 200");
                    dispatch(inLoad())
                }
                if (response.status===303||response.requestURL!='https://api-glitchspeech.herokuapp.com/audio_queue/'+id){
                    //alert("ok 303");
                    dispatch(endLoad());
                    break;
                }
                //alert(response.data.status)
            }
            setTimeout(() => {
                //alert("clos")
                dispatch(closeLoad())
            }, 5000);
            //dispatch(addFile(response.data))
        } catch (e) {
            alert("Ошибка загрузки1")
        }
    }
}

export function checkFile(id) {
    return async dispatch => {
        try {
            //alert('https://api-glitchspeech.herokuapp.com/audio_queue/'+id)
            const response = await axios.get('https://api-glitchspeech.herokuapp.com/audio_queue/'+id, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                maxRedirects: 0
            })
            if (response.status===200){
                //alert("ok 200");
                dispatch(inLoad())
            }
            if (response.status===303||response.requestURL!='https://api-glitchspeech.herokuapp.com/audio_queue/'+id){
                alert("ok 303");
                dispatch(endLoad())
            }
            alert(response.data.status)
        } catch (e) {
            alert("Ошибка загрузки22")
            alert(e.status)
            dispatch(closeLoad())
        }
    }
}