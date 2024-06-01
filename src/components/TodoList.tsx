import { List } from 'antd'
import { ITodo } from '../types/data'
import { TodoItem } from './TodoItem'
import style from './TodoList.module.scss'

interface ITodoListProps {
	items: ITodo[]
	toggleTodo: (id: number) => void
	removeTodo: (id: number) => void
}

export const TodoList: React.FC<ITodoListProps> = props => {
	return (
		<div className={style.container}>
			<List
				dataSource={props.items}
				renderItem={item => (
					<List.Item>
						<TodoItem key={item.id} {...item} {...props} />
					</List.Item>
				)}
			/>
		</div>
	)
}
