import React, { useState, useEffect } from 'react';

const Clicked = React.memo(() => {
    const [ clickCount, setClickCount ] = useState(0);
    const [ name, setName ] = useState('Sean');

    useEffect(() => {
        console.log('update title');
        document.title = name;
    }, []);

    const onClick = () => {
        setClickCount(clickCount + 1);
    }

    return (
        <div>
            <button onClick={onClick}>Clicked {clickCount} times.</button>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>{name}</div>
        </div>
    );
});

export default Clicked;