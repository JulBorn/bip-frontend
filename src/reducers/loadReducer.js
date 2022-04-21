const BEGIN_LOAD = "BEGIN_LOAD"
const IN_LOAD = "IN_LOAD"
const END_LOAD = "END_LOAD"
const CLOSE_LOAD = "CLOSE_LOAD"

const defaultState = {
    type: "close",
    in: false,
    begin: false,
    end: false,
    id: [],
    info: []
}

export default function loadReducer(state = defaultState, action) {
    switch (action.type) {
        case BEGIN_LOAD:
            return {
                ...state,
                type: "begin",
                begin: true,
                id: action.id
            }
        case IN_LOAD:
            return {
                ...state,
                in: true,
                type: "in"
            }
        case END_LOAD:
            return {
                ...state,
                end: true,
                type: "end"
            }
        case CLOSE_LOAD:
            return {
                ...state,
                type: "close",
                id: [],
                in: false,
                begin: false,
                end: false
            }
        default:
            return state
    }
}

export const beginLoad = (i) => ({
    type: BEGIN_LOAD,
    id: i
})
export const inLoad = () => ({
    type: IN_LOAD
})
export const endLoad = () => ({
    type: END_LOAD
})
export const closeLoad = () => ({
    type: CLOSE_LOAD
})
