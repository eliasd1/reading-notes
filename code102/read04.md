
<link rel="stylesheet" type="text/css" href = "read04.css">

## Chapter 18: Process and Design

### Understanding the customer

The website should be designed for the target audience and not just for the developer.

Important questions for designing and updating a website:
* Who is the site for?
* Why people visit your website? 
* What your visitors are trying to achieve?
* What your information your visitors need?
* How often people will visit your site?

The answers to these questions may help the developer better understnad the audience, and help him/her design a website that appeals to said audience. After creating the website, it is important to know exactly why people visit the website

**Summary** : Understanding the customer, be it an individual or a company, is important when it comes to developing a site. And after the website has been created, it important to know why people visit the site so it can be updated appropriately. The website should be designed to appeal to the intended audience and be updated appropriately otherwise it will fail. 

### Organizing and implementing information 

Organizing and prioritizing information on a page helps gets the developer's message across, such as what is important or what order to read it in.

*For example*, items with higher visual contrast are recognized and processed first. Grouping related pieces of information together can make it easier to understand

*Site Map* - organization information into sections or pages. Allows a developer to plan the structure of the site

*Wireframe* - design the layout of the website

Designing navigation - should be concise and should help users navigate the website easily 

## Chapter 1 - Structure

HTMl uses elements to describe the structure of pages. Each element has an opening and ending tag, which tells you something about the information that lies between the tags
Attributes provide additional information about the conents of the element.

        <head> - contains information about the page, usually written at the top of the source code

        <body> - everything inside this element is displayed on the main browser window

        <title> Shown at the top of the browser


## Chapter 17 - HTML 5 Layout
 
New set of elements that divide up parts of the page, instead of using the &lt;div&gt; element.

**New elements and features:**

    <header> - used at the top of page, can contain the site's main navigation
    <footer> - end of the page, can contain contact information or terms and conditions.
    <nav> - used to contain main navigational blocks on the site, may contain an unordered list with links to specific pages
    <article> - used for article or blog entry
    <asides> - contains information that is not necessarily but not essential to the article or webpage's overall meaning
    <section> - used to group related content together, such as latest news
    <hgroup> - group together <h1> through <h6> elements, not very popular and not widely used
    <figure> may contain images, videos, or graphs. can be used as a reference
    <div> - if there's not suitable element to group a set of elements, div can be used to group them. A popular way to group elements  
    Ability to turn an entire block into a link by placing an a tag around it.


*Note*: Some browsers do not support html5 and treat new elements as inline elements. Changing the css file to support older browsers can help these new elements be rendered as block elements

Chapter 8 - Extra Markup
There have been serval versions of html.
Each webpage should begin with !DOCTYPE to tell the web browser what version of html you are using 
To add a comment used these characters: &lt;!-- --&gt; (Control + / can be used)

* id - uniquely identify an element
* class - identify several elements as being different from the other elements on the page
* Block elements - start a new line, like &lt;h1&gt; or &lt;p&gt;
* inline elements - continue on the same line, like &lt;a&gt; or &lt;em&gt;
* div - groups elements together in one block-level box
* span - inline equivalent of div
* iframe - little window on a page that displays contents of another page. Example, embedding google maps on a website
* meta - information about your page, makes the website easier to search for