import React, {useState} from 'react';
import './Registration.css'
import Input from "../../utils/Input";
import {registration,fa} from "../../actions/user";
import {useDispatch, useSelector} from "react-redux";

const Registration = () => {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [login, setLogin] = useState("")
        const dispatch = useDispatch()
        const [token, setToken] = useState("")
        const isCreate = useSelector(state => state.user.isCreate)

        const divStyle = {
                color: 'red',
                display: 'none'
        };
        const divError = {
                marginLeft: 'auto',
                marginRight: 'auto'
        };

        return (
            <div className={"container__reg"}>
                {!isCreate &&
                    <div className='registration'>
                        <h2>Welcome to <nobr>Glitch Speech!</nobr></h2>
                        <div className="registration__header">Регистрация аккаунта</div>
                        <div id="errordiv" align="center" style={divError}>
                            <span id="error" style={divStyle}></span>
                        </div>
                        <p>Логин</p>
                        <Input value={login} setValue={setLogin} type="text" placeholder="Введите login..."/>
                        <p>Почта</p>
                        <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
                        <p>Пароль</p>
                        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
                        <div className={"registration__div__btn"}>
                                <button className="registration__btn" onClick={() =>dispatch(registration( login, password,email))}>Зарегистрироваться</button>
                        </div>

                    </div>
                }
                {isCreate &&
                    <div className={"fa"}>

                            <h2>Welcome to <nobr>Glitch Speech!</nobr></h2>
                        <div className="fa__header">Вам на почту отправлен код подтверждения</div>
                            <p>Код</p>
                        <Input value={token} setValue={setToken} type="text" placeholder="Введите код..."/>
                        <div className={"registration__div__btn"}>
                                <button className="fa__btn" onClick={() =>dispatch(fa(login,password,token))}>Подтвердить</button>
                        </div>
                    </div>
                }
            </div>
        );
};


export default Registration;