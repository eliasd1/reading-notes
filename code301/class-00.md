# What I Learnt Today

## Responsive Web Design

The increase in mobile internat usage means that it's important to build a responsive website (RWD) that is suitable for all users

RWD - practice of building website to work on every screen size
Responsive- websites continually and fluidly changes based on different factors

Adaptive - websites are built to a group of preset factors

Mobile - build a separate website solely for mobile users

RWD's three components:
- Flexible layouts - making layout dynamically resize to any width (flexible grids), uses relative length units
- Media queries - provide the ability to specific different styles for individual browsers and devices
	- use @media inside a stylesheet
	- logical operators: and, not, and only
	- mobile first approach - using styles targeted at smaller viewports as the default styles for a website

- Flexible media

## Floats

Float property places an element on the far left or far right side of its container, allowing text and inline elements to wrap around it

Floated elements remain a part of the flow of the webpage

Absolutely positioned elements are removed from the flow of the webpage

Four valid values for the float property: left, right, none, and inherit

Clear property - will move an element down past the float and not up adjacent to the float

## SMACCS

- Base.css - contains general styling, applied to elements such as body and main
- Layout.css - contains general positioning on the page, applied to header,footer,nav, aside
- Module.css - contains styling of smaller components, such as indivdual images or specific paragraphs
- State.css - contains any styling the changes upon user interaction
- Theme.css - used when applying temporary changes
