# What I Learnt Today

## Call Stack

- helps interpreter (like JS) keep track of its place in a script that calls multiple functions
- functions that are called are added onto the call stack
- Last In, First Out - last function to be added to the call stack is the first to be popped out
- single-threaded, can only do one thing at a time
- code execution is synchronous
- when the current function is finished, the interpreter removes it from the call stack and resumes from where it left off
- stack overflow - stack takes up more space than it had assigned to it

## Types of Errors

- Reference errors - try to use a variable that is not yet declared
- Syntax errors - any syntax-related errors or having something that cannot be parsed in terms of syntax
- Range errors - occurs when a value is not in the set or range of allowed values
- Type errors - when an argument passed to a function is incompatible with the type expected by the function
