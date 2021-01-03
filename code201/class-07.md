# What I Learnt Today

## Objects
- object have properties, which are used to describe an object
- object have methods, which are functions in an object

Two ways to access data in an object:
- dot notation
- bracket notation


Use "this" to select current object within that object

## Document Object Model
 - programming interface for HTML
 - learnt how to select elements
 - learnt how to create elements

[More info](class-06.md)

## Domain Modeling
- object oriented modeling - stores data in properties and encapsulates behaviors in methods
- use contrustor function to define the same properties between many objects

<pre>
    function StudentName(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    var studentName = new StudentName("Elias", "Dadoush")
</pre>
new - instantiates an objects

this - initializes properties inside an object

the object is stored in a variable for later use

- Math.random() - used to generate random numbers
- Javascript objects inherit methods from a prototype

## HTML Chapter 6 Tables
- &lt;table&gt; - used to add tables to a webpage
- each table is created row by row, using &lt;tr&gt; to create each row
- inside each row there are number of cells represented by &lt;tr&gt; (or &lt;th&gt; if it's a header)
- rowspan and colspan are attributes that determine the number of rows and/or columns a cell occupies
- can split the table into &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt;

## JS Chapter 3 Functions, Methods, and Objects
- Review of objects
- browsers implement objects that represent both the browser window and the document loaded into the browser window
- Array and objects can be used to create complex data sets
