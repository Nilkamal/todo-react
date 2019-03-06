import React, {Component} from 'react';

class Todos extends Component {
    
    render() {
        return (
            <div className='fl w-two-thirds pa2'>
                
                <fieldset className="bn">
                    <legend className="fw7 mb2 f2 white">Inbox</legend>
   
                {
                    this.props.todoList.map((todo)=>{
                        return (
                            <div key={todo.id} className="flex items-center mb2">
                                <input className="mr2 f3" type="checkbox" id={todo.id} value={todo.title} />
                                <label htmlFor={todo.id} className="lh-copy f3">{todo.title}</label>
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