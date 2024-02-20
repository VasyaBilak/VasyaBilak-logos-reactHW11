import { userActionTypes, userActions } from "../action/postsAction"
import { PropertiesTypes } from "../store"

export interface Albums {
    userId: number,
    id: number,
    title: string,
}

export interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export interface Comments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export interface UserInitialState {
    todos: Todos [] | [],
    albums: Albums [] | [],
    comments: Comments [] | [],
}

const initialState: UserInitialState = {
    albums: [],
    todos: [],
    comments: [],
}

export type UserActionsType = ReturnType<
    PropertiesTypes<typeof userActions>
    >

const postsReducer = (state=initialState, action: UserActionsType) => {
    switch(action.type) {
        case userActionTypes.SET_ALBUMS:
            return {
                ...state, 
                albums: action.payload
            }
        case userActionTypes.SET_TODOS:
            return {
                ...state, 
                todos: action.payload
            }
        case userActionTypes.SET_COMMENTS:
            return {
                ...state, 
                comments: action.payload
            }
        default:
            return state
    }
}

export default postsReducer;