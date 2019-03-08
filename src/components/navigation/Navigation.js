import React from 'react';

const Navigation = ({getAllTodos, getTodayTodos, getUpcomingTodos,getCompletedTodos}) => {
    return (
        <nav className='fl w-third pa2'>
            <p 
                className='f3 dim black link underline pa3 pointer'
                onClick={getAllTodos}
            >
                Inbox
            </p>
            <p 
                className='f3 dim black link underline pa3 pointer'
                onClick={getTodayTodos}
            >
                Today
            </p>
            <p 
                className='f3 dim black link underline pa3 pointer'
                onClick={getUpcomingTodos}
            >
                Upcoming
            </p>
            <p 
                className='f3 dim black link underline pa3 pointer'
                onClick={getCompletedTodos}
            >
                Completed
            </p>
        </nav>
        )
}

export default Navigation;