import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TTodo = {
	id: string
	title: string
	completed: boolean
}

type TTodoState = {
	list: TTodo[]
}

const initialState: TTodoState = {
	list: [],
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: Date.now().toString(),
				title: action.payload,
				completed: false,
			})
		},
		toggleComplete(state, action: PayloadAction<string>) {
			const toggleTodo = state.list.find(todo => todo.id === action.payload)
			if (toggleTodo) {
				toggleTodo.completed = !toggleTodo.completed
			}
		},
		removeTodo(state, action: PayloadAction<string>) {
			state.list = state.list.filter(todo => todo.id !== action.payload)
		},
	},
})

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions
export default todoSlice.reducer
