import { createSlice, nanoid } from "@reduxjs/toolkit";

// The initial state of the todo slice.
// Redux state should be serializable and immutable by default.
const initialState = {
	todos: [{ id: 1, text: "Helo world" }] // Example initial todo item
}

// createSlice helps generate action creators and reducers automatically.
// This reduces boilerplate compared to classic Redux.
export const todoSlice = createSlice({
	name: "todo", // Name of this slice of state
	initialState, // The initial state for this slice
	reducers: {
		// Reducers define how the state changes in response to actions.
		// Immer is used under the hood, so we can "mutate" state directly here.

		// Adds a new todo item.
		// 'state' is the current state, 'action' contains the payload (new todo text).
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(), // nanoid generates a unique id for each todo
				text: action.payload // The text for the new todo comes from the action payload
			}
			state.todos.push(todo) // Directly push to state.todos (safe with Immer)
		},

		// Removes a todo item by id.
		removeTodo: (state, action) => {
			// Filter out the todo with the matching id from the payload
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		}
	}
})

// Notes for revision:
// - Redux state is immutable, but Redux Toolkit uses Immer to allow "mutating" code.
// - createSlice auto-generates action creators and action types based on reducer names.
// - Each reducer function receives (state, action) as arguments.
// - nanoid is used for unique IDs, better than using array length or Date.now().
// - The slice's name is used as a prefix for generated action types (e.g., 'todo/addTodo').

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

