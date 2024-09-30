import React from 'react';

function ToDoItem({ task, deleteTask, toggleCompleted }) { 
// Denne funksjonen håndterer endringen av "completed"-status for oppgaven
function handleChange() {
 toggleCompleted(task.id); 
 // Kaller funksjonen som markerer oppgaven som fullført eller ikke fullført
 }
  // Bestemmer CSS-klassen basert på oppgavens fullføringsstatus
  const textClass = task.completed ? 'completed' : '';

 // Returnerer JSX som representerer en oppgave (todo-item)
 return (
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={task.completed} // Sjekker om oppgaven er fullført
 onChange={handleChange} //Kaller handleChange når checkboxen endres
 />
<p className={textClass}>{task.text}</p>
<button id="btn" onClick={() => deleteTask(task.id)}>
 X {/* "X" brukes som ikon for å representere sletting */}
 </button>
 </div>
 );
}
export default ToDoItem;