import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'

import { addTodo } from '../features/todo/todoSlice'

const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('')

    const addTodoHandler = () => {
        const todo = {
            id: v4(),
            text: todoValue,
            completed: false,
        }

        dispatch(addTodo(todo))
        setTodoValue('')
    }

    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
                type='text'
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                onClick={() => addTodoHandler()}
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
