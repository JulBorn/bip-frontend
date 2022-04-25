import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './column.css'
import {updFiles} from "../../../../reducers/fileReducer";

const Column =({file})=> {
    const maxHeight = useSelector(state => state.files.info)
    const dispatch = useDispatch()

    return (
        <div className='file'>
            <div className='file__graph'>
                <button className="file__col" style={{minHeight:file.wordsNum/maxHeight*100+'%',
                    background:'#D2D2FD',alignSelf: 'flex-end', borderRadius: ' 20px 20px 0px 0px',
                    color: 'white', textAlign: 'center', minWidth: 'calc(100% - 5px)', margin: '0 2.5px 0 2.5px'
                }}
                     onClick={()=>dispatch(updFiles(file.date,
                         file.swearsNum,file.parasitesNum,
                         file.speechSpeed, file.fullText, file.parasitesWords, file.speechVolume))}>{file.wordsNum}</button>
            </div>
            <div className="file__info">
                <div className="file__date">{file.time.split(":",2)[0]}:{file.time.split(":",2)[1]}</div>
            </div>


        </div>
    );
}

export default Column;