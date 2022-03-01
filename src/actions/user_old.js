import axios from 'axios'
import {createUser} from "../reducers/userReducer";

export const registration = async (login, password,email) => {
    return async dispatch => {
        try {
        const response = await axios.post('https://api-glitchspeech.herokuapp.com/users/register', {
            "login":login,"password":password,"mail":email
        });
        alert('ok');
        if (response.status===201) {
            alert('201');
            alert(response.data.user);
            dispatch(createUser(response.data.user));
        }
        //return(response.status);
        //return(201);
    } catch (e) {
        alert('error');
        //alert(e.response.data.message)
    }
}
}