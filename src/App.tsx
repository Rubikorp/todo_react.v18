import style from './App.module.scss'
import { Input, Button, Layout, Typography } from 'antd'
import { TodoList } from './components/TodoList'
import { useTodo } from './useTodo'

export const App: React.FC = () => {
	const { Content } = Layout
	const { Title } = Typography

	const {
		value,
		handleChange,
		handleKeydown,
		inputRef,
		addTodo,
		todos,
		removeTodo,
		toggleTodo,
	} = useTodo()

	return (
		<Layout className={style.box}>
			<Content className={style.content}>
				<Title style={{ textAlign: 'center' }}>Todo list</Title>
				<div className={style.inputbox}>
					<Input
						className={style.inputbox__input}
						value={value}
						onChange={handleChange}
						ref={inputRef}
						onKeyDown={handleKeydown}
					></Input>
					<Button
						className={style.inputbox__btn}
						type='primary'
						onClick={addTodo}
					>
						Ввод
					</Button>
				</div>

				<TodoList
					items={todos}
					removeTodo={removeTodo}
					toggleTodo={toggleTodo}
				></TodoList>
			</Content>
		</Layout>
	)
}
