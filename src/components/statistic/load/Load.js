import React, {Component, useEffect} from 'react';
import axios from 'axios';
import "./Load.css"
import {useDispatch, useSelector} from "react-redux";
import {inLoad, endLoad, closeLoad} from "../../../reducers/loadReducer"
import {getFiles, checkFile} from "../../../actions/stat";

const QUOTE_SERVICE_URL = 'https://api-glitchspeech.herokuapp.com/audio_queue/'

const Load = () => {
    const dispatch = useDispatch()
    const mid=useSelector(state => state.load.info)
    const id=useSelector(state => state.load.id)
    const isBegin=useSelector(state => state.load.begin)
    const isIn=useSelector(state => state.load.in)
    const isEnd=useSelector(state => state.load.end)
    useEffect(() => {


    })

    const divStyle = {
        color: '#6A78F9'
    };
    const divLStyle = {
        background: '#6A78F9'
    };
    return(
        <div className="load">
            {isBegin ?
                <div className="load__begin" style={divStyle}>Загружается</div>
                :
                <div className="load__begin">Загружается</div>
            }
            {isIn ?
                (   <div className="load__box">
                        <div className="load__line" style={divLStyle}> </div>
                        <div className="load__in"  style={divStyle}>Обрабатывается</div>
                    </div>)
                :
                (   <div className="load__box">
                    <div className="load__line"> </div>
                    <div className="load__in">Обрабатывается</div>
                </div>)
            }
            {isEnd ?
                (   <div className="load__box">
                    <div className="load__line" style={divLStyle}> </div>
                    <div className="load__end"  style={divStyle}>Загружено</div>
                </div>)
                :
                (   <div className="load__box">
                    <div className="load__line"></div>
                    <div className="load__end">Загружено</div>
                </div>)
            }
            {mid} {id}
        </div>
    );
}

export default Load;
