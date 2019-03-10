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
      duedate: new Date(),
      todos:  []
    }
  }

  componentDidMount() {
    fetch('https://shrouded-refuge-66418.herokuapp.com/')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({todos: data})
    })
    .catch(error=>{
      console.log(error);
    })
  }
  onInputChange = (e) => {
    console.log(e);
    this.setState({[e.target.name]: e.target.value});
  }

  onDueDateChange = (date) => {
    console.log(date);
    this.setState({duedate: date});
  }
  
  onCompleted = (e,id) => {
    const {checked} = e.target;
    fetch('https://shrouded-refuge-66418.herokuapp.com/complete',{
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

    // fetch('https://shrouded-refuge-66418.herokuapp.com/insert', {
      fetch('http://localhost:3001/insert', {
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
    fetch('https://shrouded-refuge-66418.herokuapp.com/')
    .then(resp=>resp.json())
    .then(todos=>{
      this.setState({todos: todos})
    })
  }

  getTodayTodos = () => {
    fetch('https://shrouded-refuge-66418.herokuapp.com/GetTodays')
    .then(resp=>resp.json())
    .then(todos=>{
      this.setState({todos: todos})
    })
  }

  getUpcomingTodos = () => {
    fetch('https://shrouded-refuge-66418.herokuapp.com/GetUpcomings')
    .then(resp=>resp.json())
    .then(todos=>{
      this.setState({todos: todos})
    })
  }

  getCompletedTodos = () => {
    fetch('https://shrouded-refuge-66418.herokuapp.com/GetCompleted')
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
                  dueDate={this.state.duedate}
                  onDueDateChange={this.onDueDateChange}
                />
            </div>
          )
        }
          
      </div>
    );
  }
}

export default App;
