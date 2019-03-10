import React, {Component} from 'react';
import './Todos.css';
import moment from 'moment';

class Todos extends Component {
    
    render() {
        
        return (
            <div  className='f1 center' >
          
                {
                    this.props.todoList.map((todo)=>{
                        console.log(todo);
                        const completed = todo.iscompleted ? 'completed' : null;
                        return (
                            <article  class="br2 ba bg-transparent black b--black-10 mv4 w-100 w-50-m w-25-l mw5">
  
                                <div class="pa2 ph3-ns pb3-ns ">
                                    
                                    <p class="f6 lh-copy measure mt2 mid-gray">
                                    <input 
                                    className={`mr2 f3`} 
                                    type="checkbox" 
                                    checked={todo.iscompleted}
                                    id={todo.id} 
                                    value={todo.title} 
                                    onChange={(e)=>{this.props.onCompleted(e,todo.id)}}
                                />
                                <label 
                                    htmlFor={todo.id} 
                                    className={`lh-copy f3 black  ${completed}`}
                                >
                                    {todo.title} 

                                    <p className='white f4'> {moment(todo.duedate).format('LL')}</p>
                                </label>
                                    </p>
                                </div>
                                </article>
                                 
                            )
                    })
   
                }
              
        </div>
        )
    }
}
export default Todos;