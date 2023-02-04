import React, { useRef } from "react";

interface TaskFormProp {
    onAddItem:(name: string) => void
}

const TaskForm = ({onAddItem}: TaskFormProp):JSX.Element => {

    const inputRef = useRef<HTMLInputElement>(null)

    const saveData = (e: React.FormEvent) => {
        e.preventDefault()
        const name = inputRef.current!.value // inputRef.current!.value ต้องไม่เป็นค่า null
        
        onAddItem(name)
        
        inputRef.current!.value = ""
    }

    return (
        <form onSubmit={ saveData }>
            <input type="text" placeholder="Please Input Work" ref={ inputRef }/>
            <button type="submit">Save</button>
        </form>
    )
}

export default TaskForm