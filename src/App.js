import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Logo from './components/Logo/Logo';
import Navigation from './components/navigation/Navigation';
import Todos from './components/containers/Todos';
import AddTodo from './components/add/AddTodo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      title: '',
      duedate: '',
      todos:  []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({todos: data})
    })
    .catch(error=>{
      console.log(error);
    })
  }
  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  onCompleted = (e,id) => {
    const {checked} = e.target;
    fetch('http://localhost:3000/complete',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({id:id, completed: checked})
    })
    .then(resp=>resp.json())
    .then(success=>{
      if(success) {
        this.state.todos.some((todo)=>{
          if(todo.id === id) {
            todo.iscompleted = checked;
            this.setState({...this.state.todos, todo})
            return todo;
          }
        })
      }
    })
  }

  onAddTodo = (e) => {
    e.preventDefault();
    const id = this.state.todos.length+1;
    const task = {
      id: id,
      title: this.state.title, 
      dueDate: this.state.duedate,
      isCompleted: false
    };

    fetch('http://localhost:3000/insert', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(task)
    })
    .then(resp=>resp.json())
    .then(todo=>{
      console.log(todo);
      if(todo.id) {
        this.setState({todos: [...this.state.todos, todo]})    
        this.onRouteChange('home');
      }
    })
    .catch(err=>{
      console.log(err);
    })    
  }
  onRouteChange = (route) => {
    this.setState({route});
  }

  getAllTodos = () => {
    fetch('http://localhost:3000/')
    .then(resp=>resp.json())
    .then(todos=>{
      this.setState({todos: todos})
    })
  }

  getTodayTodos = () => {
    fetch('http://localhost:3000/GetTodays/')
    .then(resp=>resp.json())
    .then(todos=>{
      this.setState({todos: todos})
    })
  }

  getUpcomingTodos = () => {
    fetch('http://localhost:3000/GetUpcomings/')
    .then(resp=>resp.json())
    .then(todos=>{
      this.setState({todos: todos})
    })
  }

  getCompletedTodos = () => {
    fetch('http://localhost:3000/GetCompleted')
    .then(resp=>resp.json())
    .then(todos=>{
      this.setState({todos: todos})
    })
  }


  render() {
    return (
      <div className="ma3">
        {
          this.state.route === 'home' ?  (
            <div>
              <Logo onRouteChange={this.onRouteChange}/>
              
              <Navigation 
                getAllTodos={this.getAllTodos}
                getUpcomingTodos={this.getUpcomingTodos}
                getCompletedTodos={this.getCompletedTodos}
                getTodayTodos={this.getTodayTodos}
              />
              <Todos todoList={this.state.todos} onCompleted={this.onCompleted} />
            </div>

          )  : (
            <div>
                <AddTodo 
                  onRouteChange={this.onRouteChange} 
                  onAddTodo={this.onAddTodo}
                  onInputChange={this.onInputChange}
                />
            </div>
          )
        }
          
      </div>
    );
  }
}

export default App;
