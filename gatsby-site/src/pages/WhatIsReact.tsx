
import React from 'react';

const User = (props: { name: string }) => {
    return <div>Hello {props.name}</div>;
}

const WhatIsReact = () => {
    return (
        <div>
            What even is <a href="https://reactjs.org">React</a>
            <User name="Jason" />
            <div className="foo" data-attr="7"> Hello</div>
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
