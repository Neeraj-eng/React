import { useState, useEffect } from 'react';
import { addTodo, updateTodo } from '../features/todoslice';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const { editTodo } = useSelector(state => state.todos);

    const [input, setInput] = useState('');

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.text);
        }
    }, [editTodo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        if (editTodo) {
            dispatch(updateTodo({ id: editTodo.id, text: input }));
        } else {
            dispatch(addTodo(input));
        }
        setInput('');
    };

    return (
        <form onSubmit={submitHandler} className="flex gap-2 my-4 w-250">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className={`rounded-r-lg px-3 py-1 ${editTodo ? 'bg-blue-500' : 'bg-green-600'} text-white`}
            >
                {editTodo ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default Form;
