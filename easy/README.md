# Easy Level Problems

This folder contains solutions to easy-level problems encountered on LeetCode.

## Problems and Solutions

1. **Create Hello World Function**

   - The task is two write a function called `createHelloWorld`. This function should return a new function that, when called, always returns the string `Hello World`.

   [LeetCode Link](https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript)

   - Solution file: [create-hello-world-function.js](./create-hello-world-function.js)

2. **Counter**

   - Given an integer `n`, write a function called `createCounter`. This function should return another function that initially returns `n`, and each subsequent call to this counter function should return one more than the previous value (i.e., `n`, `n + 1`, `n + 2`, etc.).

   [LeetCode Link](https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript)

   - Solution file: [counter.js](./counter.js)

3. **To Be Or Not To Be**
   - Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions:

- `toBe(val)`: Accepts another value and returns `true` if the two values are strictly equal (`===`) to each other. If they are not equal, it should throw an error `"Not Equal"`.

- `notToBe(val)`: Accepts another value and returns `true` if the two values are not equal (`!==`). If they are equal, it should throw an error `"Equal"`.

  [LettCode Link](https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript)

  - Solution file: [to-be-or-not-to-be.js](./to-be-or-not-to-be.js)

4. **Counter II**

   - Write a function `createCounter`. It should accept an initial integer. It should return an object with the following three functions:

- `increment()` increases the current value by 1 and returns it.
- `decrement()` reduces the current value by 1 and returns it.
- `reset()` sets the current value to `init` and then returns it.

  [LeetCode link](https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript)

  - Solution file: [counter-2.js](./counter-2.js)
