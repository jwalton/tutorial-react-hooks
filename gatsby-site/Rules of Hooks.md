# Rules of Hooks

* Only call hooks at the top level, never inside conditionals or loops.

This is bad:

```ts
if(props.username) {
    useEffect(() => {
        document.title = `Hello ${props.username}`;
    });
}
```

* Only call hooks from React functions.

* eslint-plugin-react-hooks
