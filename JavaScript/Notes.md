## JavaScript Notes


**Synchronous JS**

```javascript
const second = () => {
  console.log("Hello there");
}

const first = () => {
  console.log("Hi there!");
  second();
  console.log("The end");
}

first();
/* Hi there!
Hello there
The end */
```
