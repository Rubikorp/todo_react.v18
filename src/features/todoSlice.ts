import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ITodo {
	id: string
	title: string
	completed: boolean
}

interface ITodoState {
	list: ITodo[]
}

const initialState: ITodoState = {
	list: [],
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<ITodo>) {
			state.list.push({
				id: Date.now().toString(),
				title: action.payload.title,
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