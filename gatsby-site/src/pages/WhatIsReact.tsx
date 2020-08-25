import React from 'react';

const WhatIsReact = () => {
    return (
        <div>
            What even is <a href="https://reactjs.org">React</a>
        </div>
    );

    // return React.createElement(
    //     'div',
    //     null,
    //     'What even is ',
    //     React.createElement(
    //         'a',
    //         {
    //             href: 'https://reactjs.org',
    //         },
    //         'React'
    //     )
    // );
};

export default WhatIsReact;
