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
      input: '',
      todos: [
        {
          id: 1, 
          title: 'Buy Milk',
          isCompleted: false, 
          dueDate: '06-03-2019'
        },
        {
          id: 2, 
          title: 'Buy Gift For Birthday',
          isCompleted: false, 
          dueDate: '19-04-2019'
        },
        {
          id: 3, 
          title: 'Listen to prodcast downloaded',
          isCompleted: false, 
          dueDate: '07-03-2019'
        },
        {
          id: 4, 
          title: 'Buy Colddrink',
          isCompleted: false, 
          dueDate: '06-03-2019'
        },
        {
          id: 5, 
          title: 'Watch express.js tutorial',
          isCompleted: false, 
          dueDate: '06-03-2019'
        }
      ]
    }
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }
  
  onAddTodo = (e) => {
    debugger;
    e.preventDefault();
    const id = this.state.todos.length+1;
    const task = {
      id: id,
      title: this.state.input, 
      isCompleted: false, 
      dueDate: new Date()
    };

    this.setState({todos: [...this.state.todos, task]})
    this.onRouteChange('home');
  }
  onRouteChange = (route) => {
    this.setState({route});
  }
  render() {
    return (
      <div className="ma3">
        {
          this.state.route === 'home' ?  (
            <div>
              <Logo onRouteChange={this.onRouteChange}/>
              
              <Navigation />
              <Todos todoList={this.state.todos}/>
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
