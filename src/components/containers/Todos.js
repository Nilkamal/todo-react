import React, {Component} from 'react';
import './Todos.css';
class Todos extends Component {
    
    render() {
        return (
            <div className='fl w-two-thirds pa2'>
                
                <fieldset className="bn">
                    <legend className="fw7 mb2 f2 white">Inbox</legend>
   
                {
                    this.props.todoList.map((todo)=>{
                        console.log(todo);
                        const completed = todo.iscompleted ? 'completed' : null;
                        return (
                            
                            <div key={todo.id} className="flex items-center mb2">
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
                                    className={`lh-copy f3  ${completed}`}
                                >
                                    {todo.title}
                                </label>
                             </div>
                            )
                    })
   
                }
                </fieldset>
        </div>
        )
    }
}
export default Todos;