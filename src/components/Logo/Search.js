import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div className='dib f3 pt2 '>
                <input style={{backgroundColor: 'white', color:'black'}} class="pa2 input-reset ba bg-transparent  hover-bg-black hover-white w-100" type="email" name="task-title"  id="task-title" placeholder="Search" />

            </div>
        )
    }
}

export default Search;