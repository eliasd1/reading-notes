## Problem Domain
- learning the problem domain is the hardest part about programming
- with simple applications, the focus can be taken off the problem domain and put instead on the technology
- making the problem domain easy to understand helps make both teaching and learning easier
- programmers don't have complete information about the problem domain
- learning and understanding the problem domain makes it easier to write code

## JS Chapter 3 Object Literals
- Objects group together variables and functions to create a model
- variables that are part of an object become known as properties
- functions that are part of an object become known as methods

<pre>Example
    var userName = {
        firstName: "Elias",
        lastName: "Dadoush",
        sayHello: function(){
            return `Hello, ${this.firstName} ${this.lastName} 
        }
    }

    var firstName = userName.firstName (or userName["firstName"]);
    var lastName = userName.lastName;

</pre>

## JS Chapter 5 Document Object Models
- Browser represents the page using DOM tree
- Four types of DOM trees:
    - document nodes
    - element nodes
    - attribute nodes
    - text nodes
- Accessing elements:
    - getElementById("id")
    - querySelector("css selector") - returns the first element that matches
    - querySelectorAll("css selector") - returns all elements that match

- If a DOM query can return more than one node, it will return a NodeList
- From an element node, you can access and update its content
