import React from 'react';

const Clicked = () => {
    const clickCount = 0;
    const onClick = () => void 0;

    return (
        <div>
            <button onClick={onClick}>Clicked {clickCount} times.</button>
        </div>
    );
};

export default Clicked;