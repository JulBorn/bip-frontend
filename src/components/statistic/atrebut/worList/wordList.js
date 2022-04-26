import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./wordList.css"

const WordList = ({file}) => {
    return (
        <div className="wordL__content">
            <div className="wordL__text">
                {file.word}
            </div>
            <div className="wordL__count">
                +{file.count}
            </div>
        </div>
    );
};

export default WordList;