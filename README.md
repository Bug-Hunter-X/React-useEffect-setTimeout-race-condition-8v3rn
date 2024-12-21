# React useEffect setTimeout Race Condition

This repository demonstrates a common bug in React components involving `setTimeout` within the `useEffect` hook.  The issue arises when a component unmounts before the `setTimeout` callback executes, potentially leading to unexpected behavior or memory leaks if the timeout isn't properly cleared.

## Problem Description
The `bug.js` file contains a React component that increments a counter every second using `setTimeout` within `useEffect`. The cleanup function attempts to clear the timeout using `clearTimeout`, but this only works if the component unmounts *after* the timeout has already been scheduled to execute.  If the component unmounts sooner, the timeout will still execute, potentially resulting in state updates for a component that no longer exists.

## Solution
The `bugSolution.js` file provides a solution using `useRef` to manage the timeout ID and ensuring the timeout is only cleared if it is still active when the component unmounts.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the unexpected behavior in the `bug.js` example and the correct behavior in the `bugSolution.js` example.

## License
MIT