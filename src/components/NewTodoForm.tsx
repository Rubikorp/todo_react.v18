import style from './NewTodoForm.module.scss'
import { Input, Button } from 'antd'
import { useEffect, useRef } from 'react'

interface INewTodoFormProps {
	value: string
	updateText: (text: string) => void
	handleAction: () => void
}

export const NewTodoForm: React.FC<INewTodoFormProps> = ({
	value,
	updateText,
	handleAction,
}) => {
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') {
			handleAction()
		}
	}

	return (
		<div className={style.inputbox}>
			<Input
				placeholder='New todo'
				className={style.inputbox__input}
				value={value}
				onChange={e => updateText(e.target.value)}
				onKeyDown={handleKeydown}
				ref={inputRef}
			></Input>
			<Button
				className={style.inputbox__btn}
				type='primary'
				onClick={handleAction}
			>
				Ввод
			</Button>
		</div>
	)
}
