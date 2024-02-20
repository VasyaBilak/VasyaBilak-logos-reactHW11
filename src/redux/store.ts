import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import albumsReducer from "./reducers/postsReducer";
import todosReducer from "./reducers/postsReducer";
import commentsReducer from "./reducers/postsReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    albumsReducer: albumsReducer,
    todosReducer: todosReducer,
    commentsReducer: commentsReducer,
})

export type PropertiesTypes<T> = T extends {[key: string]: infer U}
    ? U
    : never;

const composeEnhancers: any = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
})

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store: any = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;