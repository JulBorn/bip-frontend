import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container__nav">
                <div className={"navbar__reg"}>
                    <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>
                    <div className={"navbar__numb"}></div>
                </div>
                <div className={"navbar__inlogin"}>
                    <div className="navbar__header">Уже есть аккаунт?</div>
                    <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;