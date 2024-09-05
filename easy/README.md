# LeetCode Easy Level Solutions

This folder contains solutions to easy-level problems encountered on LeetCode. Each problem is explained with a link to the LeetCode problem and the corresponding solution file.

## Table of Contents

1. [Create Hello World Function](#create-hello-world-function)
2. [Counter](#counter)
3. [To Be Or Not To Be](#to-be-or-not-to-be)
4. [Counter II](#counter-ii)
5. [Apply Transform Over Each Element in Array](#apply-transform-over-each-element-in-array)
6. [Filter Elements from Array](#filter-elements-from-array)

## Problems and Solutions


### 1. Create Hello World Function

- **Description**: Write a function called `createHelloWorld`. This function should return a new function that, when called, always returns the string `Hello World`.
- **LeetCode Link**: [create-hello-world-function](https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- **Solution File**: [create-hello-world-function.js](./create-hello-world-function.js)

### 2. Counter

- **Description**: Given an integer `n`, write a function called `createCounter`. This function should return another function that initially returns `n`, and each subsequent call to this counter function should return one more than the previous value (i.e., `n`, `n + 1`, `n + 2`, etc.).
- **LeetCode Link**: [counter](https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- **Solution File**: [counter.js](./counter.js)

### 3. To Be Or Not To Be

- **Description**: Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions:
  - `toBe(val)`: Accepts another value and returns `true` if the two values are strictly equal (`===`). If they are not equal, it should throw an error `"Not Equal"`.
  - `notToBe(val)`: Accepts another value and returns `true` if the two values are not equal (`!==`). If they are equal, it should throw an error `"Equal"`.
- **LeetCode Link**: [to-be-or-not-to-be](https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- **Solution File**: [to-be-or-not-to-be.js](./to-be-or-not-to-be.js)

### 4. Counter II

- **Description**: Write a function `createCounter`. It should accept an initial integer and return an object with the following three functions:
  - `increment()`: Increases the current value by 1 and returns it.
  - `decrement()`: Decreases the current value by 1 and returns it.
  - `reset()`: Sets the current value to `init` and then returns it.
- **LeetCode Link**: [counter-ii](https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- **Solution File**: [counter-2.js](./counter-2.js)

### 5. Apply Transform Over Each Element in Array

- **Description**: Given an array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element. The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.
- **LeetCode Link**: [apply-transform-over-each-element-in-array](https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- **Solution File**: [transform-array.js](./transform-array.js)

### 6. Filter Elements from Array

- **Description**: Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr` that contains only the elements for which the expression `fn(arr[i], i)` evaluates to a truthy value.
- **LeetCode Link**: [filter-elements-from-array](https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- **Solution File**: [filter-array.js](./filter-array.js)