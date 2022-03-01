import React, {useEffect, useState} from 'react';
import './App.css'
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./registration/Login";
import {useDispatch, useSelector} from "react-redux";
import Logo from '../assets/img/logo.png'
import {createUser} from "../reducers/userReducer";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (

        <BrowserRouter>
            <div className={"container"}>
                <div className={"logo"}>
                    <img src={Logo} alt="" className="glitch__logo"/>
                    <div className={"logo__des"}>
                        <h1>Glitch Speech</h1>
                        <p>Наблюдайте за вашей<br/>речью каждый день</p>

                    </div>
                </div>
                <div className='app'>
                    <Navbar/>
                    <div className="wrap">
                        {!isAuth &&
                            <Switch>
                                <Route path="/registration" component={Registration}/>
                                <Route path="/login" component={Login}/>
                            </Switch>
                        }
                        {isAuth &&
                            <div> Вы залогинены!</div>
                        }
                    </div>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;