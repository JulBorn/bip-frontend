import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Column from "./column/Column";
import './Graph.css'
import Statistica from "../../../assets/img/statistica.png";
import {getNewFiles} from "../../../actions/stat";
import ChevronRight from "../../../assets/img/chevron_right.png";
import ChevronLeft from "../../../assets/img/chevron_left.png";

const Graph =()=> {
    const files = useSelector(state => state.files.files).map(file => <Column key={file.id} file={file}/>)
    const curDate = useSelector(state => state.files.date)
    const oldDate = useSelector(state => state.files.oldDate)
    const newDate = useSelector(state => state.files.newDate)
    const dispatch = useDispatch()

    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__headerstat">
                    <img src={Statistica} alt="" className="filelist__statistica"/>
                    <div className="filelist__name">Статистика</div>
                </div>

                <div className="filelist__date">
                    <button className="filelist__date__left" onClick={()=>dispatch(getNewFiles(oldDate))}>
                        <img src={ChevronLeft} alt="" />
                    </button>
                    <div className="filelist__date__center">
                        {curDate}
                    </div>
                    <button className="filelist__date__right" onClick={()=>dispatch(getNewFiles(newDate))}>
                        <img src={ChevronRight} alt="" />
                    </button>
                </div>
            </div>
            <div className="filelist__all">
                {files}
            </div>
        </div>
    );
}

export default Graph;