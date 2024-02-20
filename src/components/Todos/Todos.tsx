import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodosThunk } from '../../redux/action/postsAction';
import { Todos as ITodos } from "../../redux/reducers/postsReducer";
import { AppDispatch, AppStateType } from "../../redux/store";
import { FC } from "react";

const Todos: FC = () => {
    const todos = useSelector((store: AppStateType):ITodos[] | []=>store.todosReducer.todos);
    const dispatch: AppDispatch = useDispatch();
    const getTodos = () => dispatch(getTodosThunk());
  
    useEffect(() => {
      getTodos();
    }, []);
  
    return (
      <div>
        <h2>Todos</h2>
        {todos?.map((todo: ITodos)=> {
                return  (
                        <div key={todo.id} style={{border: '1px solid black', margin: '10px'}}>
                            <p>{todo.id}</p>
                            <h4>{todo.title}</h4>
                        </div>
                    )
            })}
      </div>
    );
  }

  export default Todos;