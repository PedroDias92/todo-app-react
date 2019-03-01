import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super(); //calls all methods and stuff from component
    this.state={
      message:'Ola Mundo',
      newTodo:'',
      todos:[{
        title:'Learn react',
        done: false
      },{
        title:'Learn vue',
        done: false
      }],
    }
  }

  formSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo:'',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
    console.log(this.state.newTodo);
    console.log(this.state.todos);
    console.log("form submitted");
  }
  
  newTodoChange(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  toggleTodoDone(event,index){
    console.log(event.target.checked);
    const todos = [...this.state.todos] //copy the array
    console.log(todos)
    todos[index] = {...todos[index]}; //copy the todo
    console.log(todos[index]);
    todos[index].done = event.target.checked; //update done property on copied array
    console.log(todos[index].done)
    this.setState({ //set new array
      todos
    })
  }

  removeTodo(index){
    const todos = [...this.state.todos]; //copy the array
    todos.splice(index,1) ; // removes the toDo

    this.setState({ //sets new todos
      todos
    });
  }

  allDone(){
    const todos = this.state.todos.map(todo =>{
      return {
        title:todo.title,
        done: true
      };
    }); //copy the array
    this.setState({
      todos
    })
  }


  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={(event)=>this.formSubmitted(event)}>
          <label htmlFor="newTodo">New todo</label>
          <input onChange={(event)=>this.newTodoChange(event)} 
            id="newTodo" 
            type="text" 
            name="newTodo"
            value={this.state.newTodo}/>
          <button type="submit">Add</button>
        </form>
        <button onClick={()=>this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo,index) =>{
            return <li key={todo.title}>
            <input onChange={(event)=>this.toggleTodoDone(event,index)} type="checkbox" checked={todo.done}/>
{/*             <span style={{textDecoration: todo.done? 'line-through':''}}>{todo.title}</span>
 */}            
                <span className={todo.done? 'done' : ''}>{todo.title}</span>
                <button className="remove" onClick={() => this.removeTodo(index)}>remove</button>
            </li>
            
          })}
        </ul>
      </div>
    );
  }
}

export default App;
