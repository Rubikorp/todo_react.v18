import { ITodo } from './types/data'
import { useState, useEffect, useRef } from 'react'

export function useTodo() {
	const [value, setValue] = useState('')
	const [todos, setTodos] = useState<ITodo[]>([])

	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					completed: false,
				},
			])
		}
		setValue('')
	}

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== id) return todo
				return {
					...todo,
					completed: !todo.completed,
				}
			})
		)
	}

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value)
	}

	const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') {
			addTodo()
			console.log(todos)
		}
	}

	return {
		handleChange,
		handleKeydown,
		inputRef,
		value,
		todos,
		addTodo,
		setTodos,
		removeTodo,
		toggleTodo,
	}
}
