import { List } from 'antd'
import { useAppSelector } from '../hook/hook.ts'
import { TodoItem } from './TodoItem'
import style from './TodoList.module.scss'

export const TodoList: React.FC = () => {
	const todos = useAppSelector(state => state.todos.list)

	return (
		<div className={style.container}>
			<List
				dataSource={todos}
				renderItem={item => (
					<List.Item>
						<TodoItem key={item.id} {...item} />
					</List.Item>
				)}
			/>
		</div>
	)
}
