import React from 'react';

const AddTodo = ({onRouteChange, onAddTodo, onInputChange}) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
                <fieldset id="add_todo" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Add Task</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="title">Task</label>
                    <input onChange={onInputChange} className="pa2 mt2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="title"  id="title" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="duedate">Due Date</label>
                    <input onChange={onInputChange} className="pa2 mt2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="duedate"  id="duedate" />
                </div>
                
                </fieldset>
                <div className="">
                    <input onClick={onAddTodo} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Create" />
                </div>
                <div className="lh-copy mt3">
                    <a href="#0" onClick={()=>onRouteChange('home')} className="f6 link dim black db">Go Back</a>
                </div>
        </main>
    </article>
    )
}
export default AddTodo;