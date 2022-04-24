import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const WordList = ({file}) => {
    const maxHeight = useSelector(state => state.files.info)
    const dispatch = useDispatch()
    return (
        <div className="wordL__content">
            {file.word}{file.count}
        </div>
    );
};

export default WordList;