import React from "react";

const Task = (props: { name: string }):JSX.Element => {
    // JSX.Element => เป็นการ return tag html ออกไปด้านนอก
    return <h1>{props.name}</h1>
}

export default Task;