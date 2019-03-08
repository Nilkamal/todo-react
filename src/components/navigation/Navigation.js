import React from 'react';

<<<<<<< HEAD
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

=======
const Navigation = ( {onRouteChange, isSignedIn } ) => {
    
        if(isSignedIn) {
        return (<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="f3 dim black link underline pa3 pointer" onClick={()=>{onRouteChange('signin')}}>
                Sign Out
            </p>
        </nav>)

        } else {
            return (<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p 
                    className="f3 dim black link underline pa3 pointer" 
                    onClick={()=>{onRouteChange('signin')}}>
                    Sign In
                </p>
                <p 
                    className="f3 dim black link underline pa3 pointer" 
                    onClick={()=>{onRouteChange('register')}}>Register</p>
        </nav>)
        }
    
}
>>>>>>> 85feb462e0bfa465243804f5cd1da824876c7853
export default Navigation;