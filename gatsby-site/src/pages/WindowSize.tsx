import React, { useState, useEffect, useRef } from 'react';

function useSize(target: React.RefObject<HTMLElement>) {
    const [size, setSize] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const subscriber = () => {
            if (target.current) {
                setSize({
                    w: target.current.offsetWidth,
                    h: target.current.offsetHeight,
                });
            }
        };
        subscriber();

        console.log('Add listener');
        window.addEventListener('resize', subscriber);

        return () => {
            console.log('Remove listener');
            window.removeEventListener('resize', subscriber);
        };
    }, [setSize, target.current]);

    return size;
}

/**
 * Child
 */
const SizeViewer = (props: { target: React.RefObject<HTMLElement> }) => {
    const size = useSize(props.target);
    return (
        <div>
            Size is: {size.w} x {size.h}
        </div>
    );
};

/**
 * Parent
 */
const WindowSize = () => {
    const [showWindowSize, setShowWindowSize] = useState(true);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleShowWindowSize = () => {
        setShowWindowSize(!showWindowSize);
    };

    const verb = showWindowSize ? 'Hide' : 'Show';

    return (
        <>
            <button ref={buttonRef} onClick={toggleShowWindowSize}>
                {verb} window size
            </button>
            {showWindowSize ? <SizeViewer target={buttonRef} /> : null}
        </>
    );
};

export default WindowSize;
