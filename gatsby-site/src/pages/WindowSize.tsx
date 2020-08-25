import React, { useState, useEffect } from 'react';

/**
 * Child
 */
const SizeViewer = () => {
    return <div>Size is: ? x ?</div>;
};

/**
 * Parent
 */
const WindowSize = () => {
    const [showWindowSize, setShowWindowSize] = useState(true);

    const toggleShowWindowSize = () => {
        setShowWindowSize(!showWindowSize);
    };

    const verb = showWindowSize ? 'Hide' : 'Show';

    return (
        <>
            <button onClick={toggleShowWindowSize}>{verb} window size</button>
            {showWindowSize ? <SizeViewer /> : null}
        </>
    );
};

export default WindowSize;
