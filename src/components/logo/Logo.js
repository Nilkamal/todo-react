import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
    
    <div className='ma4 mt0'>
        <Tilt 
            className="Tilt bw-3 shadow-2" 
            options={{ max : 66, scale:1.2 }} 
            style={{ height: 150, width: 150 }} 
        >
            <div className="Tilt-inner pa3"> 
                <img src={brain} alt="logo" />    
             </div>
        </Tilt>
    </div>
    );
}

export default Logo;