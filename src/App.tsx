import React,{useState, ChangeEvent} from 'react';
import TodoTask from '../src/components/TodoTask'
import './App.css';
import {iTask} from './interfaces';

function App() {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<iTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task" ) {
      if(event.target.value == ''){
        window.alert("Please add a task");
      }
      setTask(event.target.value);
    } 
  };

  const addTask = (): void => {
    const newTask = { taskName: task};  
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: iTask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
