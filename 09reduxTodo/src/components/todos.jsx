// components/todos.jsx
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, setEditTodo } from '../features/todoslice';
import Api from '../hook';
import { useState } from 'react';

const Iteam = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const [data,setdata] = useState()

    // const tittle = Api(data);

    return (
        <>
           <h2 className="text-lg font-bold my-2">Todos</h2>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center gap-2 mb-2">
                        <div className="flex-1 text-red-400 bg-black px-4 py-3 rounded-lg">
                            {todo.text}
                        </div>
                        <button
                            onClick={() => dispatch(setEditTodo(todo))}
                            className="bg-yellow-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Iteam;


//    <h2 className="text-lg font-bold my-2">Todos</h2>
//             <ul className="list-none">
//                 {todos.map((todo) => (
//                     <li key={todo.id} className="flex items-center gap-2 mb-2">
//                         <div className="flex-1 text-red-400 bg-black px-4 py-3 rounded-lg">
//                             {todo.text}
//                         </div>
//                         <button
//                             onClick={() => dispatch(setEditTodo(todo))}
//                             className="bg-yellow-500 text-white px-3 py-1 rounded"
//                         >
//                             Edit
//                         </button>
//                         <button
//                             onClick={() => dispatch(removeTodo(todo.id))}
//                             className="bg-red-500 text-white px-3 py-1 rounded"
//                         >
//                             X
//                         </button>
//                     </li>
//                 ))}
//             </ul>
