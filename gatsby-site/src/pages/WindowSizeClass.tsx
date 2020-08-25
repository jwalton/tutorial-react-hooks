import React, { useState, useEffect } from 'react';

interface State {
    size: { w: number; h: number };
}

/**
 * Child
 */
class SizeViewer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = { size: { w: 0, h: 0 } };
    }

    listener = () => {
        this.setState({
            size: { w: window.innerWidth, h: window.innerHeight },
        });
    };

    componentDidMount() {
        window.addEventListener('resize', this.listener);
        // Initialize on mount.
        this.listener();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.listener);
    }

    render() {
        const { size } = this.state;
        return (
            <div>
                Size is: {size.w} x {size.h}
            </div>
        );
    }
}

/**
 * Parent
 */
const WindowSize: React.FC<{}> = (props) => {
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
