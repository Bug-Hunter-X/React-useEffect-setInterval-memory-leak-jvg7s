```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Incorrect usage of setInterval. The callback function needs to return a cleanup function
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    // Missing cleanup function to clear the interval when the component unmounts
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
export default MyComponent; 
```