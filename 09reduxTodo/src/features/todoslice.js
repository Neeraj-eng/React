import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello" }],
    editTodo: null 
};

export const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
            state.editTodo = null; 
        },
        setEditTodo: (state, action) => {
            state.editTodo = action.payload;
        }
    }
});

export const { addTodo, removeTodo, updateTodo, setEditTodo } = todoslice.actions;
export default todoslice.reducer;
