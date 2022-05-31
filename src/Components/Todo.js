
import React from 'react'
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import TodoForm from './TodoForm';


const Todo = ({todos,completeTodo,removeTodo,updateTodo}) => {
    const[edit,setEdit]=useState({
      id:null,
      value:""
    })

    const submitUpdate=value=>{
      updateTodo(edit.id,value);
      setEdit({id:null,value:''})
    };

    if(edit.id){
      return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }
  return todos.map((todo,index)=>(
    <div className={todo.isComplete?'todo-row complete':'todo-row'} key={index}>
      <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
          <HighlightOffIcon onClick={()=>removeTodo(todo.id)} className='delete-icon'/>
          <EditIcon onClick={()=>setEdit({id:todo.id,value:todo.text})} className='edit-icon'/>
      </div>
      </div>
  ))
}

export default Todo;