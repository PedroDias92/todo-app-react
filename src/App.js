import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';



class App extends Component {
  constructor(){
    super(); //calls all methods and stuff from component
    this.state={
      message:'ToDo App *React*',
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
        <h2 style={{textAlign:'center'}}>{this.state.message}</h2>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChange.bind(this)} />
        <button onClick={()=>this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo ={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
