import React, { useState } from 'react';
import TaskList from './components/TaskList';
import Item from './models/item'
import TaskForm from './components/TaskForm';

function App() {

  const [items, setItems] = useState<Item[]>([])

  const generateId = () => {
    return Math.floor(Math.random() * 1000)
  }

  const addItem = (name: string) => {
    setItems([...items, { id: generateId(), name }])
  }

  return (
    <div className="App">
      <TaskForm onAddItem={ addItem }/>
      <TaskList items={ items }/>

      {/* example send props to Task component => <Task name="write program"/> */}
    </div>
  );
}

export default App;
