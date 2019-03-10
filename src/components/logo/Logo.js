import React from 'react';
import './logo.css';

const Logo = ({onRouteChange}) => {
    return (
        <div className='Logo'>
            <div className='left'>
            <h1 className='f1' style={{color: 'white'}}>Todoz</h1>
            </div>
            <div className='right pt3'>
                <p 
                    className='f3 dim black link underline pa3 pointer'
                    onClick={()=>{onRouteChange('newtask')}}
                >
                    Add New
                </p>
            </div>
        </div>
    );
}

export default Logo;