import style from './App.module.scss'
import { Layout, Typography } from 'antd'
import { TodoList } from './components/TodoList'
import { NewTodoForm } from './components/NewTodoForm'
import { useAppDispatch } from './hook/hook.ts'
import { useState } from 'react'
import { addTodo } from './features/todoSlice.ts'

export const App: React.FC = () => {
	const { Content } = Layout
	const { Title } = Typography
	const [text, setText] = useState('')
	const dispatch = useAppDispatch()

	const handleAction = () => {
		if (text.trim().length) {
			dispatch(addTodo(text))
			setText('')
		}
	}

	return (
		<Layout className={style.box}>
			<Content className={style.content}>
				<Title style={{ textAlign: 'center' }}>Todo list</Title>
				<NewTodoForm handleAction={handleAction} value={text} updateText={setText}/>
				<TodoList />
			</Content>
		</Layout>
	)
}
