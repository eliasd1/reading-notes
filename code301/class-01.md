# What I Learnt Today

## JavaScript - jQuery

jQuery is a library that offers a simple way to achieve variety of common JS tasks

- Use css style selectors to find items
    - $("ul") // selects all uls in an html file
    - $("ul").addClass("list") // add a class to the elements
    - $("input").val() // get value of an input
- To check if a page is ready:
$(function{
    //script
})
- Getting element content: .html() or .text()
- Changing element content .html("value") or .text("value")
- Adding elements:
    - creating new element: var $newItem = $('&lt;li&gt;&lt;/li&gt;')
    - using a method to add new content
        - prepend() - add content inside the selected element, after the opening tags
        - append() - add content inside the selected element, before cloing tags
        - before() - add content before the selected element
        - after() - add content after the selected element

- use .attr to set and get attributes
- use .css to set and get css properties
- .each loops through a list of items
- The .on() method is used to handle all events
    - $("li").on("click", function(){})

- Learnt how to add jQuery to an html file using cdn

## Pair Programming

1. Great Efficiency - easier to catch mistakes

2. Engaged Collaboration - programmers are more focused on the work

3. Learning from fellow students - working with a teammate can expose delevopers to new techniques

4. Social skills - improves social skills

5. Job interview readiness - pair programming may be used during an interview
