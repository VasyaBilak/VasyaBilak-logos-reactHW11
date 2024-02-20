import { PostServices } from "../../services/apiServices";
import { ThunkAction } from "redux-thunk";
import { AppStateType, PropertiesTypes } from "../store";
import { Albums, Comments, Todos } from "../reducers/postsReducer";

export type PostThunkType = ThunkAction<void, AppStateType, null, UserActionsType>

export type UserActionsType = ReturnType<
    PropertiesTypes<typeof userActions>
    >

export const userActionTypes = {
    SET_ALBUMS: 'SET_ALBUMS',
    SET_TODOS: 'SET_TODOS',
    SET_COMMENTS: 'SET_COMMENTS',
}

export const userActions = {
    setAlbums: (albums: Albums[]) => ({type: userActionTypes.SET_ALBUMS, payload: albums}),
    setTodos: (todos: Todos[]) => ({type: userActionTypes.SET_TODOS, payload: todos}),
    setComments: (comments: Comments[]) => ({type: userActionTypes.SET_COMMENTS, payload: comments}),
}

export const getAlbumsThunk = (): PostThunkType => (dispatch) => {
    PostServices.getAlbums(dispatch);
}

export const getCommentsThunk = (): PostThunkType => (dispatch) => {
    PostServices.getComments(dispatch);
}

export const getTodosThunk = (): PostThunkType => (dispatch) => {
    PostServices.getTodos(dispatch);
}