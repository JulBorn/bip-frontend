import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiles, checkFile} from "../../actions/stat";
import Graph from "./graph/Graph";
import Stat from "./stat/Stat";
import Load from "./load/Load";
import Atrebut from "./atrebut/Atrebut";
import {uploadFile} from "../../actions/stat";
import {logout} from "../../reducers/userReducer"
import './Main.css';
import Person from '../../assets/img/person.png';
import Upload from "../../assets/img/Upload.png";
import Arrow from "../../assets/img/Arrow.png";

import Logo from "../../assets/img/logo_main.png";
import Files from "../../assets/img/files_main.png";
import Logout from "../../assets/img/logout.png";
import Statistic from "../../assets/img/sat_main.png";
import Settings from "../../assets/img/settings.png";
import Btn from "../../assets/img/Icon_button.png";
import Btn_cl from "../../assets/img/Icon_close.png";
import {login} from "../../actions/user";

const Main = () => {
    const dispatch = useDispatch()

    //const mess = useSelector(state => state.load.type)

    useEffect(() => {
        //dispatch(setUser(localStorage.getItem('user')))
        dispatch(getFiles())
    })

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file)))

    }

    const nameP = useSelector(state => state.user.currentUser)
    return (
        <div className="main__screen">
            <div className="dropdown">
                <div className="main__icons">
                    <div className="main__icons__top">
                        <img src={Logo} alt="" className="main__logo" />
                        <button className="dropbtn">
                            <img src={Btn} alt=""  className="main__img__btn"/>
                        </button>
                        <img src={Statistic} alt=""  className="main__img"/>
                        <img src={Files} alt=""  className="main__img"/>
                        <img src={Settings} alt=""  className="main__img" />
                    </div>
                    <img src={Logout} alt="" />
                </div>
                <div className="dropdown-content">
                    <div className="dropdown__inside">
                        <div className="main__icons__bottom">
                            <img src={Logo} alt="" className="main__logo__bottom" />
                            <button className="dropbtn__b">
                                <img src={Btn_cl} alt=""  className="main__img__btn__bottom"/>
                            </button>
                            <a>
                                <img src={Statistic} alt=""  className="main__img__bottom"/> Статистика
                            </a>
                            <a>
                                <img src={Files} alt=""  className="main__img__bottom"/> Материалы
                            </a>
                            <a>
                                <img src={Settings} alt=""  className="main__img__bottom" /> Настройки
                            </a>

                        </div>
                        <div>
                            <button className="logout__btn" onClick={() => dispatch(logout())}>
                                <img src={Logout} alt=""  className="main__img__logout"/>
                            </button>


                        </div>

                    </div>
                </div>
            </div>
            <div className="main">
                <div className="main__toolbar">
                    <div className="main__name">{nameP}</div>
                    <img src={Person} alt="" className="main__person"/>

                </div>
                <div className="main__content">
                    <div className="main__stat">
                        <Graph/>
                        <Stat/>
                        <div className="main__btns">

                            <div className="disk__upload">
                                <div className="disk__upload__btn">
                                    <label htmlFor="disk__upload-input" className="disk__upload-label">
                                        <a className="main__load" >
                                            <img src={Upload} alt="" className="main__picupload"/>
                                            <div className="main__upload">
                                                Загрузка
                                                <p>Анализ речи</p>
                                            </div>
                                            <img src={Arrow} alt="" className="main__arrow"/>
                                        </a>
                                    </label>
                                    <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
                                </div>
                                <div className="disk__upload__stat">
                                    <Load/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__line"> </div>
                    <div className="main__atr">
                        <Atrebut/>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Main;