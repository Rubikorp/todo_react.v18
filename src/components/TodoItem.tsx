import { useAppDispatch } from '../hook/hook'
import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox, Button, Space } from 'antd'
import style from './TodoItem.module.scss'
import { removeTodo, toggleComplete } from '../features/todoSlice'

interface ITodoItemProps {
	id: string
	title: string
	completed: boolean
}

export const TodoItem: React.FC<ITodoItemProps> = ({
	id,
	title,
	completed,
}) => {
	const dispatch = useAppDispatch()

	return (
		<div className={`${style.container}`}>
			<Space size='large'>
				<Checkbox
					className={style.checkbox}
					id={id}
					checked={completed}
					onChange={() => dispatch(toggleComplete(id))}
				/>
				<label htmlFor={id.toString()} className={style.label}>
					{title}
				</label>
			</Space>
			<Button type='primary' danger onClick={() => dispatch(removeTodo(id))}>
				<DeleteOutlined />
			</Button>
		</div>
	)
}
