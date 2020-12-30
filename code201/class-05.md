# What I Learnt Today

- Arrays have length properties that return the length of the arrays
- Element's display may be changed to one of the following:
    - Block - creates a new line and adds vertical spacing
    - inline - element is displayed inside the current block on the same line
    - inline-block - allows you set a width and height to an element, unlike inline
    - none - hides element
- Local and global variables
- Learnt how to fork a repo
- Add a new branch
    - git checkout -b (branch name) (creates a new branch and switches to it)
- Pull requests may be used to merge changes

HTML Chapter 5 Images
- &lt;img&gt; to add images to a site
    - src attribute tells the browser where to find the image
    - title - information about the image that can be seen users hovers over the image
- Images can have different display properties
    - block or inline
- Aligning images horizontally
    - align left or align right
- Aligning images vertically
    - align top, middle, or bottom
- Three rules for creating images: 
    - Save images in the right format
    - Save images at the right size
    - Use the correct resolution
- Photograph are best saved as JPEG
- Save illustrations or logos that use flat colors as GIF

HTML Chapter 11 Color
- color property used to change the color of text inside an element
    - color can be specified in one of the following ways: 
        - RGB - red, green, blue are expressed as numbers (between 0-255)
        - Hex codes- represents red,gren, and blue in hexadecimal code
        - Color names - colors are represented by predefined names
        - HSL colors (introduced in CSS3) - hue, saturation, lightness
- background-color property sets the color of the background of a specific box 

- Opacity property - specify the opacity of an element or of its child elements

HTML Chapter 12 Text
Typeface Terminology
- SERIF - extra details on the ends of the main strokes of the letters
- SANS-SERIF - straight ends to letters 
- MONOSPACE - every letter has the same width 
- Weight - used to add emphasis 
- Style - change the style of the letters to normal, italics, or oblique
- Stretch 
    - condensed - letters are thinner and closer together
    - extended - thicker and further apart
    - regular

Font-family property is used to specify the typeface 

        body{
            font-family: Georgia, Times, serif;
        }

Font-size property - specify size of a font

Text-transform property - used to change the case of a text
- Uppercase
- Lowercase
- Capitalize

Text-decoration property 
-  underline
- overline
- line-through
- blink (animates the text to flash on or off)

Control spaces between lines of text, individual letters, or words:
- line-height
- letter-spacing
- word-spacing

Pseudo-classes can be used to change the style of an element when a user hovers or clicks a text

    Example

    button:hover{
        color: blue;
    }