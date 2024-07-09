import { useState } from 'react';
import Task from './components/Task';

const App = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');
  
  const handleInputText = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleAgregar = () => {
    if (title == "") return
    const newTask = {
      id: crypto.randomUUID(),
      title: title
    };
    setTasks([...tasks, newTask]);
    setTitle("");

  }
  const handleEditar = () => {
    if (title == "") return
    const temp = [...tasks];
    const item = temp.find(task => task.id === id)
    item.title = title;
    setTasks(temp)
    setIsEdit(false);
    setId("");
  }
  function deleteTask(id) {
    const temp = tasks.filter(task => task.id !== id);
    setTasks(temp);
    setIsEdit(false);
  }
  function editTask(id, title) {
    setId(id);
    setTitle(title);
    setIsEdit(true);
  }
  return (
    <>
    <div className='container-form-todo'>
      <form className='form-todo' onSubmit={handleSubmit}>
        <h1 className='form-title'>Agregar Tarea</h1>
        <input className='input-title' type="text" onChange={handleInputText} value={title} />
        {!isEdit ?
          <button className='btn-agregar' type='submit' onClick={handleAgregar}>Crear Tarea</button>
          : <button className='btn-editar' type='submit' onClick={handleEditar}>Editar</button>}
      </form>
    </div>
      <div className='container-tasks'>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  )
}

export default App