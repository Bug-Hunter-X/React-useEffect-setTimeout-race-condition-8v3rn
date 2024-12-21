```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: componentWillUnmount is not called if the component is unmounted before the timeout
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timeoutId); // This only works if the component unmounts *after* the timeout
  }, []);

  return <div>Count: {count}</div>;
}
```