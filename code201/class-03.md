# Topics Learnt Today
## Reset CSS
- Some CSS properties or rules are predefined (like padding or margins) by the browser
- Resetting CSS removes these predefined CSS rules (making the default values to zero)
- Used for more specific design purposes or to better understand CSS
- reset.css can be found online

## Border and Margin shorthand
Instead of writing each property on its own line, it can be combined into one line as demonstrated below. 

    Example

    div{
        margin: 0 auto;
    }
    p{
        border: 2px solid blue;
    }

    
## Order of CSS links in the HTML file maters
- must take note of the order of the links
- the last link overwrites properties of same selectors in the previous link, which means that the reset.css link should be placed after the style.css one

## JavaScript strict mode
- used to prevent mistakes
- can be enabled by adding 'use strict' at the top of a javascript file

## Conditions in JavaScript
- conditions are case-sensitive 
- conditions can be nested

## Confirm function
- used to take boolean inputs from a user

## Switch statements
- variable or expression changing the control flow of a program
- similar to If-Else
- important to add a break statement to each case so it doesn't execute the code of the following cases

        var response = prompt("Y/Yes or N/No?")
        switch(response){
            case "Y":
                console.log("yes")
                break;
            case "Yes":
                console.log("yes")
                break;
            case "N":
                console.log("no")
                break;
            case "No":
                console.log("no")
                break;
        }

## Chapter 3 - Lists
Two types of lists:
- unordered (&lt;ul&gt;)
- ordered (&lt;ol&gt;)

Definition list:
- &lt;dl&gt; - definition list, contains a series of terms and their definitions
- &lt;dt&gt; - term
- &lt;dd&gt; - definition of term

*Note:* Lists can be nested inside one another

## Chapter 13 - Boxes
- CSS treats each element as a box
- Width and height of a box can be adjusted using css
- Some pages expand and shrink, so you can add a min-width and a max-width (same for height) to an element
- Overflow property tells the browser what to do if the content contained within a box is larger than the box itself
    - hidden - hides the content
    - scroll - adds a scrollbar
- Display of an element can be changed
    - none, inline, inline-block, block
- border-image - uses a border as an image
- border-shadow - adds drop shadow around a box
- border-radius - adds rounded corners to a box 

## Reviewed JS Chapter 2 and Chapter 4
- [Reading notes on the two chapters](class-02.md)