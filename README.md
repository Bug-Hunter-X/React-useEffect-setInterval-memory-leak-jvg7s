# React useEffect setInterval Memory Leak

This repository demonstrates a common React bug involving memory leaks when using `setInterval` within the `useEffect` hook without proper cleanup.

## Bug Description
The `MyComponent` uses `setInterval` to update a count every second.  However, it fails to include a cleanup function within the `useEffect` hook to clear the interval when the component unmounts. This leads to a memory leak, as the interval continues to run even after the component is removed from the DOM.

## Bug Reproduction
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the count increasing every second. Then unmount the component. The interval keeps running causing memory leaks.

## Solution
The solution involves returning a cleanup function from the `useEffect` hook, which uses `clearInterval` to stop the interval when the component unmounts.