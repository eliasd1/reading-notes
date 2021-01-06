# What I Learnt Today

# Forms and Events
- forms are used to get data from a user
- input element is used to provide a field to enter data to the user
- you can add placeholders to inputs
- it is sometimes important to make inputs required, which is a form of validation to make sure the user has inputted data in the required field
- Elements can have event listeners
- the method addEventListeners has two parameters
    - type of event
    - callback function

- preventdefault method is used to prevent any default behaviors of the form, such as refreshing the page
- you can get data from an input in the callback function using the event parameter

# JS Chapter 10 Error Handling and Debugging

Three execution contexts:
- Global Context - code in a script but not in a function, only one in any page, 
- Function Context - code being run within a function
- Eval Context

Two variable scopes:
- Global scope - variable declared outside a function
- Function-level scope - variable declared within a function

When a statement has to call some other code, Javascript stacks the new function on top of the current task

Variables and functions within an execution context are created before they are executed

Preparation phase - taking all variables and functions and hoisting them to the top of the execution context

Each execution context can access its parent's variables object

If Javascript generates an error, it throws an exception. Javascript has 7 different types of errors and each error creates its own error object. Browsers have tools to help you read error objects

You can handle errors using the try, catch, finally statements 

