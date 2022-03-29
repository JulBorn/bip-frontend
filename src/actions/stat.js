import axios from 'axios'
import {setFiles} from "../reducers/fileReducer";

export function getFiles() {
    return async dispatch => {
        try {
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
            alert(response.status)
            //dispatch(addFile(response.data))
        } catch (e) {
            alert("Ошибка загрузки")
        }
    }
}