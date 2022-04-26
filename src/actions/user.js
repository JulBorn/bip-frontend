import axios from 'axios'
import {setUser,createUser} from "../reducers/userReducer";
import getBrowserFingerprint from "get-browser-fingerprint";

let timer = null;
const domen='https://api-glitchspeech.herokuapp.com'

function showError(message) {
    if (timer !== null) {
        // Clear previous timeout:
        clearTimeout(timer);
        timer = null;
    }
    let errorElement = document.getElementById("error");
    errorElement.innerHTML = message;
    errorElement.style.display = 'block';
    timer = setTimeout(function(){ errorElement.style.display = 'none'; }, 5000);
}

export const registration = (login, password,email) => {
    return async dispatch => {try {
        const response = await axios.post(domen+'/users/register', {
            "login":login,"password":password,"mail":email
        })
        if(response.status===201) {
            dispatch(createUser());
            const token = await axios.post(domen+'/users/2fa', {
                "login":login,"password":password
            })
        } else {
            let errorMessage = response.data.message || 'Пользователь с таким именем или почтой уже существует';
            showError(errorMessage);
        }
    } catch (e) {
        let errorMessage = e.response.status+': Пользователь с таким именем или почтой уже существует';
        showError(errorMessage);
    }
}}

export const login =  (log, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(domen+'/users/2fa', {
                "login":log,"password":password
            })
            if(response.status===201) {
                dispatch(createUser())
                localStorage.setItem('token', response.data.token)
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const fa =  (login,password,token) => {
    return async dispatch => {
        try {
            const fingerprint = getBrowserFingerprint();
            const response = await axios.post(domen+'/users/login', {
                "login":login,"password":password,"two_fa_token":token, "fingerprint":fingerprint},
                {withCredentials: true}
            )
            dispatch(setUser(login))
            //alert("username")
            //alert(login)
            localStorage.setItem('token', response.data.jwtToken)
            localStorage.setItem('user', login)
            //alert('ok')
            const self = await axios.get(domen+'/users/self',
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`},responseType: 'text'}
            )
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}
