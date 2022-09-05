import React from 'react';

const Searchbox = ({ search }) => {
    return (
        <React.Fragment>
            <div className='pa2'>
                <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search profiles' onKeyDown={(e) => search(e)} />
            </div>
        </React.Fragment >
    );
}

export default Searchbox;