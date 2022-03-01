import React, {useState} from 'react';
import "./Login.css"
import Input from "../../utils/Input";
import {useDispatch, useSelector} from "react-redux";
import {fa, login} from "../../actions/user";

const Login = () => {
    const [log, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const dispatch = useDispatch()
    const isCreate = useSelector(state => state.user.isCreate)

    return (
        <div className={"container__auth"}>
            {!isCreate &&
                <div className='authorization'>
                    <h2>Welcome to <nobr>Glitch Speech!</nobr></h2>
                    <div className="authorization__header">Вход в систему</div>
                    <p>Логин</p>
                    <Input value={log} setValue={setLogin} type="text" placeholder="Введите login..."/>
                    <p>Пароль</p>
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
                    <div className={"authorization__div__btn"}>
                        <button className="authorization__btn" onClick={() => dispatch(login(log, password))}>Войти</button>
                    </div>
                </div>
            }
            {isCreate &&
                <div className={"fa"}>
                    <h2>Welcome to <nobr>Glitch Speech!</nobr></h2>
                    <div className="fa__header">Вам на почту отправлен код подтверждения</div>
                    <p>Код</p>
                    <Input value={token} setValue={setToken} type="text" placeholder="Введите код..."/>
                    <div className={"authorization__div__btn"}>
                        <button className="fa__btn" onClick={() =>dispatch(fa(log,password,token))}>Подтвердить</button>
                    </div>
                </div>
            }
        </div>

    );
};

export default Login;