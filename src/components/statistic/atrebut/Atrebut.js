import React from 'react';
import "./Atrebut.css"
import Arrow from "../../../assets/img/Arrow.png"
import {useDispatch, useSelector} from "react-redux";
import wordList from "./worList/wordList";
import WordList from "./worList/wordList";

const Atrebut =()=>{
    const alltext = useSelector(state => state.files.text)
    const isUpd = useSelector(state => state.files.type)
    const usedW = useSelector(state => state.files.profw)
    const files = useSelector(state => state.files.profw).
    map(file => <WordList key={file.id} file={file}/>)
    const dispatch = useDispatch()


    return (
        <div className="atr__container">
            <div className="atr__name">Артефакты</div>
            <div className="atr__text"> Речевые акты, которые заслуживают внимания</div>
            {isUpd ?
                (<div className="atr__is">
                    <div className="atr__is__text">{alltext}</div>
                    <div className="atr__text">Какими словами вы злоупотребляете</div>
                    <div className="atr__wordL">
                        {files}
                    </div>
                </div>)
                :
                (<div className="atr__not">
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
                        <div className="atr__text">Какими словами вы злоупотребляете</div>
                    </div>
                </div>)
            }

        </div>
    );
}

export default Atrebut;