import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super(); //calls all methods and stuff from component
    this.state={
      message:'Ola Mundo',
      newTodo:'',
    }
  }

  formSubmitted(event){
    event.preventDefault();
    console.log(this.state.newTodo);
    console.log("form submitted")
  }
  
  newTodoChange(event){
    this.setState({
      newTodo: event.target.value
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
            name="newTodo"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
