import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './column.css'
import {updFiles} from "../../../../reducers/fileReducer";

const Column =({file})=> {
    const maxHeight = useSelector(state => state.files.info)
    const dispatch = useDispatch()

    return (
        <div className='file'>
            <button className='file__graph'
                    onClick={()=>dispatch(updFiles(file.date,
                        file.swearsNum,file.parasitesNum,
                        file.speechSpeed, file.fullText, file.parasitesWords, file.speechVolume))}>
                <div className="file__col" style={{minHeight:'calc('+file.wordsNum/maxHeight*100+'% - 10%)',
                    alignSelf: 'flex-end', padding:'10% 0 5% 0',
                    color: 'white', textAlign: 'center', minWidth: 'calc(100% - 0px)', margin: '0'
                }}>{file.wordsNum}</div>
            </button>
            <div className="file__info">
                <div className="file__date">{file.time.split(":",2)[0]}:{file.time.split(":",2)[1]}</div>
            </div>


        </div>
    );
}

export default Column;