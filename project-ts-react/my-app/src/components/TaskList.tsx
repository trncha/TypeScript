import React from "react";
import Item from '../models/item'

interface TaskListProp {
    items: Item[]
}

const TaskList = (props: TaskListProp):JSX.Element => {
    return (
        <div>
            <h1>Work in Day</h1>
            <ul>
                { props.items.map((element) => (
                    <li key={element.id}>{element.name}</li>
                )) }
            </ul>
        </div>
       
    )
}

export default TaskList