# Notes

#### 24 Feb 2021

### Event Handler Signature

It is a function with atleast one event parameter/argument

Eg.:

```javascript
<button onclick="clickMe(event)"></button>;

// Event handlers (ES5 & beyong)
function clickMe(event) {
  // write your logic
}

// Arrow function (ES6 & deyong - modern version of javascript)
const clickMe = (event) => {
  // write your logic
};
```

### Tree-shaking

```
demo.ts => 2 Kb
component.ts => 5Kb
```

Original Size: 7 Kb
Main (Actual) bundle size: 5 Kb (Because demo.ts is not being used in component.ts)

1. Tree-shaking helps remove unwanted code.
2. It helps reduce overall bundle size of your application
