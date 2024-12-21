```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```