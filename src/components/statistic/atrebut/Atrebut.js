import React, {Component} from 'react';
import "./Atrebut.css"
import Arrow from "../../../assets/img/Arrow.png"
import {useSelector} from "react-redux";

const Atrebut =()=>{
    const alltext = useSelector(state => state.files.text)
    const isUpd = useSelector(state => state.files.type)


    return (
        <div className="atr__container">
            <div className="atr__name">Артефакты</div>
            {isUpd ?
                (<div className="atr__is">
                    <div className="atr__text"> Речевые акты, которые заслуживают внимания</div>
                    <div className="atr__is__text">{alltext}</div>
                    <div className="atr__text">Какими словами вы злоупотребляете</div>
                </div>)
                :
                (<div className="atr__not">
                    <div className="atr__text"> Речевые акты, которые заслуживают внимания</div>
                    <div className="atr__not__menu">
                        <a className="atr__not__btn">
                            <div className="atr__not__btn__title">Неологизмы</div>
                            <img src={Arrow} alt="" className="main__arrow"/>
                        </a>
                        <a className="atr__not__btn">
                            <div className="atr__not__btn__title">Ремикс слов-паразитов</div>
                            <img src={Arrow} alt="" className="main__arrow"/>
                        </a>
                        <a className="atr__not__btn">
                            <div className="art__not__btn__title">Речь с правильной скоростью</div>
                            <img src={Arrow} alt="" className="main__arrow"/>
                        </a>
                        <a className="atr__not__btn">
                            <div className="art__not__btn__title">Архаизмы</div>
                            <img src={Arrow} alt="" className="main__arrow"/>
                        </a>

                    </div>
                    <div className="atr__text">Какими словами вы злоупотребляете</div>
                </div>)
            }
        </div>
    );
}

export default Atrebut;