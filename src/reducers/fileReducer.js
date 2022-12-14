const SET_FILES = "SET_FILES"
const UPD_FILES = "UPD_FILES"

const defaultState = {
    type:false,
    files: [],
    oldDate: [],
    newDate: [],
    date: [],
    info: [],
    parasit: [],
    swear: [],
    speed: [],
    text: [],
    profw: [],
    volumeset: false,
    volume: []
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES:
            return {
                ...state,
                type: false,
                files: action.payload,
                oldDate: action.oldDate,
                newDate: action.newDate,
                date: action.date,
                info: action.info,
                parasit: action.parasit,
                swear: action.swear,
                speed: action.speed,
                profw:[],
                volumeset: false
            }
        case UPD_FILES:
            return {
                ...state,
                type: true,
                date: action.date,
                parasit: action.parasit,
                swear: action.swear,
                speed: action.speed,
                text: action.text,
                profw: action.profw,
                volumeset: true,
                volume: action.vol
            }
        default:
            return state
    }
}

export const setFiles = (files, odat, dat, ndat, inf, swe, par, spe, tex) => ({
    type: SET_FILES,
    oldDate: odat,
    date: dat,
    newDate: ndat,
    payload: files,
    info:inf,
    swear:swe,
    parasit:par,
    speed: spe,
    text: tex
})
export const updFiles = (dat, swe, par, spe, tex, pw, vol) => ({
    type: UPD_FILES,
    date: dat,
    swear:swe,
    parasit:par,
    speed: spe,
    text: tex,
    profw:pw,
    vol:vol
})
