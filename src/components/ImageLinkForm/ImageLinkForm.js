import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
    return (
        <div>
            <p className='f3'>
                This magic brain will detect faces in your pictures. Give it a try.
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-3'>
                    <input 
                        type='text' 
                        className='f4 pa2 w-70 center glow' 
                        onChange={onInputChange}
                    />
                    <button 
                        className='w-30 grow link pointer f4 white bg-light-purple'
                        onClick={onButtonSubmit}
                    >
                    Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;
