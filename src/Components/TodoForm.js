import React, { useState,useEffect,useRef } from 'react'

const TodoForm = (props) => {
    const [Input,setInput]=useState(props.edit? props.edit.value:"");

    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleSubmit=(e)=>{
   e.preventDefault(); 
   
   props.onSubmit({
       id:Math.floor(Math.random()*10000),
       text:Input
   });
   setInput(""); 
    }
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
  return (
         <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (<> <input type="text" placeholder="update a Resolution" value={Input} className="todo-input edit " onChange={handleChange} ref={inputRef}/>
        <button className='todo-button edit'>Update</button></>):(<> <input type="text" placeholder="Add a Resolution" value={Input} className="todo-input" onChange={handleChange} ref={inputRef}/>
        <button className='todo-button'>Add a todo</button></>)} 
       
        </form>
        
        </div>    
    
  )
}

export default TodoForm
