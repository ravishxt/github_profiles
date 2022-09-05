import React from 'react';
import '../css/scroll.css';

const Scroll = (props) => {
    return (
        <div className='robots-view'>
            {props.children}
        </div>
    );
};

export default Scroll;