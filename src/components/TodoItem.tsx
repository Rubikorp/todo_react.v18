import { ITodo } from '../types/data'
import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox, Button, Space } from 'antd'
import style from './TodoItem.module.scss'

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void
	toggleTodo: (id: number) => void
}

export const TodoItem: React.FC<ITodoItem> = props => {
	const { id, title, completed, removeTodo, toggleTodo } = props

	return (
		<div className={`${style.container}`}>
			<Space size='large'>
				<Checkbox
					className={style.checkbox}
					id={id.toString()}
					checked={completed}
					onChange={() => toggleTodo(id)}
				/>
				<label htmlFor={id.toString()} className={style.label}>
					{title}
				</label>
			</Space>
			<Button type='primary' danger onClick={() => removeTodo(id)}>
				<DeleteOutlined />
			</Button>
		</div>
	)
}
