const SET_USER = "SET_USER"
const CREAT_USER = "CREAT_USER"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: {},
    isAuth: false,
    isCreate: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case CREAT_USER:
            return {
                ...state,
                currentUser: {},
                isCreate: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const createUser = () => ({type: CREAT_USER})
export const logout = () => ({type: LOGOUT})