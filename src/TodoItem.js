import React from 'react';


const TodoItem = (props)=>{
    const {todo,index} = props;
    return(
        <li key={todo.title}>
            <input onChange={(event)=>props.toggleTodoDone(event,index)} type="checkbox" checked={todo.done}/>
{/*             <span style={{textDecoration: todo.done? 'line-through':''}}>{todo.title}</span>
 */}            
                <span className={todo.done? 'done' : ''}>{todo.title}</span>
                <button className="remove" onClick={() => props.removeTodo(index)}>x</button>
            </li>
    )
};

export default TodoItem;