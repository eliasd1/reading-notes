# What I Learnt Today

## Primitives vs. Objects

Java consists of two types: primitives(int, boolean) and reference types(Intenger, Boolean)

Autoboxing - converting primitive type to a reference one

Unboxing - converting a reference type to a primitive one

Reference types occupy more than their primitive counterparts, so it's better to use primitive types when possible

Primitive types live in a stack while references types live in a heap

Primitive types perform better than reference types

## Exceptions in Java

According to oracle, "An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions."

Creating an exception object and handing it to the runtime system is called throwing an exception

Certains exceptions must be enclosed by either try statement or a method that specifies that it can throw the exception, otherwise the code will not compile

Three types of exception:

- Checked Exceptions
- Error
- Runtime exception

Catching and Hanlding Exceptions

- can use try, catch, and finally blocks to handle exceptions

## Scanner

- used to read a file in Java
- used to get user input
