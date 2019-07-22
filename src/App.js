import React, { Component } from 'react'
import SingleTodo from './SingleTodo';


/**
* @author
* @class App
**/

class App extends Component {
  constructor(props){
    super(props);
  
 this.state = {
   todos:[],
   currenttodo:''
 };
}
onInputChange = e => {
  this.setState({
    currenttodo:e.target.value
  })
}
onClick = () =>{
  let todocopy = this.state.todos.slice();
  todocopy.push(this.state.currenttodo);
  this.setState({
    todos:todocopy, currenttodo:''
  });
}
deleteTodo = (i) =>{
  let todocopy = this.state.todos.slice();
 todocopy.splice(i, 1);
 this.setState({todos: todocopy})
  
}

 render() {
   let BulletTodos = this.state.todos.map((e,i) => {
   return(
     <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
   );
   });
   
  return(
   <div>
    <input placeholder='add todo' value={this.state.currenttodo} onChange={this.onInputChange} />
    <button onClick={this.onClick}>Add</button>
    {this.state.todos.length === 0 ? ' no todo' : <ul>{BulletTodos}</ul>}
   </div>
    );
   }
  }




export default App;
