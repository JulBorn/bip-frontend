import React from 'react';
import "./Stat.css"
import {useSelector} from "react-redux";

const Stat =()=> {

    const parasitW = useSelector(state => state.files.parasit)
    const speedW = useSelector(state => state.files.speed)
    const swearW = useSelector(state => state.files.swear)
    return (
        <div className="grid">
            <a href="https://nextjs.org/docs" className="card">
                <h3>Скорость речи</h3>
                <p><span className="numCard"><em>{speedW}</em></span> слов/минуту
                    <ul>
                        <li>Скорость доверия </li>
                        <li>Комфортно для общения </li>
                    </ul>
                </p>
            </a>

            <a href="https://nextjs.org/learn" className="card">
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
                href="https://github.com/vercel/next.js/tree/master/examples"
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
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card"
            >
                <h3>Громкость</h3>
                <p>
                    <ul>
                        <li>Присуствует повышение голоса в диалогах </li>
                        <li>Комфортно для общения </li>
                    </ul>
                </p>
            </a>
        </div>

    );

}

export default Stat;