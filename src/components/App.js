import React, {useEffect, useState} from 'react';
import './App.css'
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./registration/Login";
import Main from "./statistic/Main";
import {useDispatch, useSelector} from "react-redux";
import Logo from '../assets/img/logo.png'
import {createUser} from "../reducers/userReducer";

function Auth(){
    if (localStorage.getItem('token') !== null) alert("token");
    return <div>jj</div>;
}

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (

        <BrowserRouter>

            {(!isAuth ) ?
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
                            <Switch>
                                <Route path="/registration" component={Registration}/>
                                <Route path="/login" component={Login}/>
                                <Redirect to='/login'/>
                            </Switch>

                        </div>
                    </div>

                </div>
                :
                <Switch>
                    <Route path="/main" component={Main}/>
                    <Redirect to='/main' component={Main}/>
                </Switch>
            }

        </BrowserRouter>
    );
}

export default App;