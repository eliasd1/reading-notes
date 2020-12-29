# What I Learnt Today

## Box Model
- CSS treats each html element as a box
- margins, paddings, and border of the box can be changed

## List properties
- list-style-type (making the list style be circle or decimal)
- list-style-position (outside or inside the box)
- list-style-image (adding an image icon before each list item)

## Tables

    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
        <tr>
            <td>Elias</td>
            <td>Dadoush</td>
        </tr>
    </table>

- &lt;tr&gt; makes a new row
- &lt;th&gt; makes a new header
- &lt;td&gt; contains table data

## Do Loop
- similar to while loop, except it executes the code once before checking the conditions

## HTML Chapter 4 Links
- Links allow you to move from one page to another, enabling browsing or surfing
- &lt;a&gt; tag uses href attribute to make links
- relative urls - shorthand way of telling the browser where to find your files
    - best to use relative urls to links pages with your own site
- target attribute can be used to open links in a new window
- you can link to a specific part, which can be identified by its id, of the same page or a different page

## HTML Chatper 15 Layout
- CSS treats each element as a box
    - either inline or block
- containing element - block-level outer box that contains a block-level element
- CSS positioning schemes
    - Normal flow (position: static) - block-level elements appear on a new line
    - Relative positioning (position: relative) - moves an element from where it would be in normal flow
    - Absolute positioning (position: absolute) - positions an element in relation to its parent element
    - Fixed position (position: fixed) - stays in positions even if the user scrolls down the page
    - z-index - used to deal with overlapping elements 
    - float - allows you to place an element in the far right or far left of the containing element

- Fixed width layout designs do not change size as the browser increases or decreases
- Liquid layout designs can stretch or contract depending on whether the browser size increases or decreases
- You can include multiple style sheets in the same html file

## JS Chapter 3 Functions, Methods, and Objects
- Functions allow you to group a series of statements together to perform a certain task
- A function needs to declared and then called for it to perform a certain task or function
- function can take one or more parameters
- functions can return single value or multiple values
- there are anonymous functions 
- Local variables - function-level scope or local scope
- Global variables - usually declared outside of functions, have global scope

## Article 6 Reasons for Pair Programming
- Pair programming is the practice of two developers sharing a single work stations 
    - commonly involves two roles: the driver and the navigator
    - driver is one the who types and handles the "mechanics" of coding
    - navigator guides the driver
- Pair programming touches all four skills (listening, speaking, reading, and writing)

Six reasons:

1. Greater efficiency
    - research indicates that pair progrmaming takes longer but produces higher-quality code
    - two programmers may come to solution faster than one programmer on their own
2. Engaged Collaboration
    - experience is more engaging when two programmers are focusing on the same code
    - harder to procrastinate or slack off
3. Learning from fellow students
    - pair programming exposes developers to unique approaches to a specific problems
    - less experienced developer can learn things from a more experience developers
4. Social Skills
    - improves social skills
    - improves your communication skills
5. Job intereview readiness
    - many interview may involve pair programming between current employee and applicant
    - ability to work with others and be able to communicate ideas properly are important to a company 
6. Work environment readiness
    - being familiar with pair programming makes it easier to get into a work environment as you don't need to be trained on how to utilize pair programming
