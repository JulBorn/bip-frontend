import React from 'react';
import "./Stat.css"
import {useSelector} from "react-redux";

const Stat =()=> {

    const parasitW = useSelector(state => state.files.parasit)
    const speedW = useSelector(state => state.files.speed)
    const swearW = useSelector(state => state.files.swear)
    const isVolumeSet = useSelector(state => state.files.volumeset)
    const volume = useSelector(state => state.files.volume)
    return (
        <div className="grid">
            <a  className="card">
                <h3>Скорость речи</h3>
                <p><span className="numCard"><em>{speedW}</em></span> слов/минуту
                    <ul>
                        <li>Скорость доверия </li>
                        <li>Комфортно для общения </li>
                    </ul>
                </p>
            </a>

            <a  className="card">
                <h3>Слова паразиты</h3>
                <p><span className="numCard"><em>{parasitW}</em></span> слов</p>
                <p>Укого столько же:
                    <ul>
                        <li>Свещенник - 25 </li>
                        <li>Философ - 30 </li>
                    </ul>
                </p>

            </a>

            <a

                className="card"
            >
                <h3>Ненормативная лексика</h3>
                <p><span className="numCard"><em>{swearW}</em></span> слов</p>
                <p>
                    <ul>
                        <li>В среднем житель Москвы употребляет 30 </li>
                    </ul>
                </p>
            </a>

            <a
                className="card"
            >
                <h3>Громкость</h3>
                {isVolumeSet ?
                    <div className="vol__content">
                        {volume<-25 && <ul>
                            <li>Слишком тихо</li>
                        </ul>}
                        {(volume>=-25 && volume<-10) && <ul>
                            <li>Комфортно для общения</li>
                        </ul>}
                        {volume>=-10 && <ul>
                            <li>Присуствует повышение голоса в диалогах</li>
                        </ul>}
                    </div>

                :
                    <p>
                        <ul>
                            <li>Присуствует повышение голоса в диалогах </li>
                            <li>Комфортно для общения </li>
                        </ul>
                    </p>
                }

            </a>
        </div>

    );

}

export default Stat;