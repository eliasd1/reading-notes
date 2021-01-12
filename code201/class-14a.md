# What I Learnt Today

## Local Storage and Session Storage

Local Storage

- a property of the windows object that can save key/value pairs in a web browser
- helps keep track of data created

Session Storage

- similar to local storage
- data is cleared when the page session ends

JSON

- javascript object notation, stores date in key/value pairs
- JSON.stringify() - converts an object or an array into a string
- JSON.parse() - parses JSON strings

## CSS Transforms, Transistions, and Animations

Transforms

- a ways to size, position, and change elements
- comes in two settings: 2D or 3D
- provides the ability to rotate an element from 0 to 360 degrees

        .box-1 {
        transform: rotate(20deg);
        }
- using the scale value within the transform property changes the appeared size of an element

        .box-1 {
        transform: scale(.75);
        }
- translate value changes the position of an element without interrupting the normal flow of the document

        .box-1 {
        transform: translateX(-10px);
        }
- skew value is used to distort elements on the horizantal axis, vertical axis, or both
        .box-1 {
        transform: skewX(5deg);
        }

Transitions

- transisiton-property determines what properties will be altered

        .box {
        background: #2db34a;
        border-radius: 6px
        transition-property: background, border-radius;
        transition-duration: 1s;
        transition-timing-function: linear;
        }

        Only background and border-radius will receive transition behaviors

- transition duration - duration in which a transition takes place
- transition-timing-function - set the speed in which a transition will move (linear, ease-in, ease-out)
- transition delay - add a time delay to the transition

        .box {
        background: #2db34a;
        border-radius: 6px;
        transition: background .2s linear, border-radius 1s ease-in 1s;
        }
