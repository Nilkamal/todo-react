import React from 'react';
import './FaceRecognition.css';

const FaceRecongnition = ({imageUrl, box}) => {
    console.log('Box',box);
    return (
       <div className='center ma'>
           <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding_box' id='box' style={{top: box.leftRow, left: box.leftCol, right: box.rightCol, bottom: box.bottomRow}}
                ></div>
           </div>
       </div>
    )
}
export default FaceRecongnition;