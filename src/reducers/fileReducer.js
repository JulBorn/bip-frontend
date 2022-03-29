const SET_FILES = "SET_FILES"
const UPD_FILES = "UPD_FILES"

const defaultState = {
    files: [],
    oldDate: [],
    newDate: [],
    date: [],
    info: [],
    parasit: [],
    swear: [],
    speed: []
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES:
            return {
                ...state,
                files: action.payload,
                oldDate: action.oldDate,
                newDate: action.newDate,
                date: action.date,
                info: action.info,
                parasit: action.parasit,
                swear: action.swear,
                speed: action.speed
            }
        case UPD_FILES:
            return {
                ...state,
                date: action.date,
                parasit: action.parasit,
                swear: action.swear,
                speed: action.speed
            }
        default:
            return state
    }
}

export const setFiles = (files, odat, dat, ndat, inf, swe, par, spe) => ({
    type: SET_FILES,
    oldDate: odat,
    date: dat,
    newDate: ndat,
    payload: files,
    info:inf,
    swear:swe,
    parasit:par,
    speed: spe
})
export const updFiles = (dat, swe, par, spe) => ({
    type: UPD_FILES,
    date: dat,
    swear:swe,
    parasit:par,
    speed: spe
})
