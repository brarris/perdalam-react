# How to run this project

## first

```
npm install
```

## second

```
npm run dev
```

## How to fetch API with useEffect

```jsx
import { useEffect } from "react";

function Component() {
  useEffect(() => {
    fetch("yourAPItarget")
      .then((data) => data.json())
      .then((result) => console.log(result));
  }, []);

  return ();
}

export default Component;
```
