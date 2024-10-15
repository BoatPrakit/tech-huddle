## Introduction to Asynchronous JavaScript

Asynchronous operations allow the program to continue executing other tasks while waiting for the time-consuming operation to complete.

So, JavaScript executes code sequentially. However, many tasks, like fetching data from a server or reading a file, can be time-consuming.

To prevent the main thread from blocking and ensuring a responsive user interface, JavaScript employs asynchronous programming.

## What is a Promise?

A Promise in JavaScript is like a placeholder for a value that might be available in the future.

Three States a Promise including

1. Pending - Initial state. The Promise is waiting for the asynchronous operation to complete.
2. Fulfilled - Completed successfully, and a value is associated with it.
3. Rejected - Failed, and an error is associated with it.

![](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)
