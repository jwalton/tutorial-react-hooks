# Hooks Tutorial

## What is React

* Mix javascript and HTML
* Can create our own "HTML tags" called components
* Doesn't re-render the entire DOM.

## useState

### Simple click count with class and state

We're going to start with a simple react component that displays how many times
you click on a button.  If we were writing this as a traditional class based
component, we'd of course have a `this.state.clickCount`, and we'd maybe have
a function defined on the class called `onButtonClick()` or something along
those lines.

If we're going to write this as a function component in React 15, we can't.
A function component has no place to store state between runs.  It doesn't
have a `this`, so it can't have a `this.state`.

But, we know that React is keeping track of some data about all of our rendered
components.  When we update a component, React doesn't rerender the whole page,
or even the whole component - it just updates the parts of the DOM that need
updating, which suggests that React is keeping track of where this instance of
our component lives in the DOM.

We want to get React to keep track of some state information for us and pass
it to us every time we render this component, and the way we're going to do that
is with the `useState()` hook.

```ts
import React from 'react';

const Clicked: React.FC<{}> = (props) => {
    const clickCount = 0;
    const onClick = () => void 0;

    return (
        <div>
            <button onClick={onClick}>I was clicked {clickCount} times.</button>
        </div>
    );
};us

export default Clicked;
```

* useState takes one param, initializer.
* Returns current state value and a function to set state.
* Note that return value is an array.

DEMO

* Note that object passed to useState can be anything.
* Whenever we call setClickCount, will force component to redraw.
* Setter is a bit like setState(), doesn't do merges.
* Can store multiple states - demo with name and input.
* Can view state in Components debugger.


```ts
import React, { useState } from 'react';

export interface ClickedProps {}

const Clicked: React.FC<ClickedProps> = (props) => {
    const [clickCount, setClickCount] = useState(0);

    const onClick = () => {
        setClickCount(clickCount + 1);
    };

    return <button onClick={onClick}>I have been clicked {clickCount} times </button>;
};

export default Clicked;
```

## useEffect

* useEffect() is passed a function that has "side effects", like manipulating the
  DOM or fetching data or subscribing to something.
* Takes a single function parameter which is run on every redraw
  * document.title example
* Second parameter is an array of dependencies
  * set document.title to name, only if name changes.
  * Can pass a prop as a dep to only run again if dep changes
  * Array of dependencies is a common theme in react hooks - we'll see this again.
* empty array acts like componentDidMount
* no array acts like componentDidUpdate

### useWindowSize

```ts
import React, { useState } from 'react';

const ShowWindowSize: React.FC<{}> = () => {
    return <div>Size is: ? x ?</div>;
};

const WindowSize: React.FC<{ cameraId: string }> = (props) => {
    const [showWindowSize, setShowWindowSize] = useState(false);

    const toggleShowWindowSize = () => {
        setShowWindowSize(!showWindowSize);
    };

    return (
        <>
            <button onClick={toggleShowWindowSize}>Show window size</button>
            {showWindowSize ? <ShowWindowSize /> : null}
        </>
    );
};

export default WindowSize;
```

```ts
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

    useEffect(() => {
        setWindowSize({ w: window.innerWidth, h: window.innerHeight });

        const listener = () => {
            setWindowSize({ w: window.innerWidth, h: window.innerHeight });
        };

        console.log('Add listener');
        window.addEventListener('resize', listener);

        return () => {
            console.log('Remove listener');
            window.removeEventListener('resize', listener);
        };

    }, [setWindowSize]);

    return windowSize;
}
```

* Want to redraw whenever size changes - useState.
* Want to subscribe to window resize events - useEffect.
  * Initialize to current window size.
  * Put setSize in dependency array.
* Only want to subscribe once - use an array of dependencies.
* Now we have a problem - every time this unmounts, we leak a listener.
    * In class based react, use componentWillUnmount
    * useEffect() has one more trick - return a cleanup function.

* So far we've seen useState, which is a lot like state in class,
  useEffect() which is a lot like a lifecycle swiss army knife.  Why is this
  better?
  * In a class based component, this logic would be split all over the place.
  * Very hard to reuse.
  * We can write our own custom hook.

* useEffect vs useLayoutEffect
  * useEffect won't block render pipeline.  Slightly different from componentDidMount/componentDidUpdate.
  * useLayoutEffect is run synchronously after React has done all DOM mutations.
  * use useLayoutEffect when you need to measure a DOM element or mutate the DOM.

## useRef

* Example where we measure some other element in the DOM.

```ts
const buttonRef = useRef<HTMLButtonElement>(null);

props: {target: React.RefObject<HTMLButtonElement>}
```

* Note that we can use `useRef` for things other than elements.  Like useState(), but doesn't force update.


## Sidebar: Rules of Hooks

* Only call hooks at the top level.
  * Don't put your hooks inside a condition.
* Only call hooks from React functions.
  * Can't use inside a React class!
* eslint plugin to enforce these.

## useContext

```ts
import React, { useState, useContext } from 'react';
import LanguagePicker from '../components/LanguagePicker';
import { translationsByLocale, Translations } from '../components/translationsDemo/translations';

/**
 * Parent
 */
const TranslationsDemo: React.FC<{}> = () => {
    const [currentLocale, setCurrentLocale] = useState('en');
    const translations = translationsByLocale[currentLocale];

    return (
        <div>
            <LanguagePicker currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />

            <SayHello />
        </div>
    );
};

/**
 * Child
 */
const SayHello: React.FC<{}> = () => {
    return <span>{'untranslated'}</span>;
};

export default TranslationsDemo;
```

* Tranlations demo.
* createContext, Consumer and Provider.
* useContext() version.

## useCallback

```ts
import React, { useState, useCallback } from 'react';

export interface ClickedProps {}

const Clicked: React.FC<ClickedProps> = (props) => {
    const [clickCount, setClickCount] = useState(0);

    const onClick = useCallback(() => {
        setClickCount(clickCount + 1);
    }, [clickCount, setClickCount]);

    return <button onClick={onClick}>I have been clicked {clickCount} times </button>;
};

export default Clicked;
```

* button component will only rerender if props change, but they always change.
* Could do something hacky with useState.
* useCallback(fn, deps) - deps are just like useEffect.  Only regenerates callback if required.

## useMemo

useMemo - like useCallback, but only executes the function when required.

