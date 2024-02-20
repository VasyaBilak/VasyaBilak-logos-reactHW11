import axios, { AxiosResponse } from "axios";
import { userActions } from "../redux/action/postsAction";
import { Dispatch } from 'redux';
import { Albums as IAlbums, Todos as ITodos, Comments as IComments } from "../redux/reducers/postsReducer";  

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',  
});

export const PostServices = {
    getAlbums: async (dispatch: Dispatch) => {
        try {
            let response: AxiosResponse<IAlbums[]> = await instance.get('albums');
            dispatch(userActions.setAlbums(response.data));
        } catch {}
    },
    getTodos: async (dispatch: Dispatch) => {
        try {
            let response: AxiosResponse<ITodos[]> = await instance.get('todos');
            dispatch(userActions.setTodos(response.data));
        } catch {}
    },
    getComments: async (dispatch: Dispatch) => {
        try {
            let response: AxiosResponse<IComments[]> = await instance.get('comments');
            dispatch(userActions.setComments(response.data));
        } catch {}
    }
}