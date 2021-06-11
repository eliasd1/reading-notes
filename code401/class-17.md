# What I Learnt Today

## oAuth

 - open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords
 - not an API or service

 - can use GitHub's OAuth to autnhenticate users

 Several samples building on each other, adding new features at each step:

- simple: a very basic static app with just a home page and unconditional login via Spring Boot’s OAuth 2.0

- click: adds an explicit link that the user has to click to login.

- logout: adds a logout link as well for authenticated users.

- two-providers: adds a second login provider so the user can choose on the home page which one to use.

- custom-error: adds an error message for unauthenticated users, and a custom authentication based on GitHub’s API.


- Applications can be secured by adding Spring Security as dependency
- To use GitHub's OAuth, the github application must be downloaded
