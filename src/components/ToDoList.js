import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import Header from './Header';

function ToDoList() {
  // Setter opp "tasks" tilstand med to standard oppgaver
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Legetime',
      completed: true
    },
    {
      id: 2,
      text: 'Møte',
      completed: false
    }
  ]);
  
  // Tilstand for tekstinput
  const [text, setText] = useState('');
  
  // Funksjon for å legge til ny oppgave
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText(''); // Tømmer inputfeltet
  }
  
  // Funksjon for å slette en oppgave basert på ID
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  // Funksjon for å bytte status for om oppgaven er fullført
  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }; // Oppdaterer completed status
      } else {
        return task;
      } 
    }));
  }
  
  // Returnerer JSX som representerer todo-listen og input for nye oppgaver
  return (
    <div className="todo-list">
      {/* Mapper gjennom oppgaver og viser hver oppgave som en ToDoItem */}
      <Header />
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted} 
        />
      ))}
      {/* Inputfelt for å legge til ny oppgave */}
      <input 
        id="text-box"
        value={text}
        onChange={e => setText(e.target.value)} // Oppdaterer text tilstand med verdien fra input
      />
      {/* Knapp for å legge til ny oppgave */}
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default ToDoList;
