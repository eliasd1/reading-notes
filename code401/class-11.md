# What I Learnt Today

## Spring App Basics

 - Visit the Spring Initializr website to generate a new project with the required dependencies (Spring Web, Thymeleaf, and Spring Boot DevTools)

Example of dependencies created by the spring initializr

        dependencies {
            implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
            implementation 'org.springframework.boot:spring-boot-starter-web'
            developmentOnly 'org.springframework.boot:spring-boot-devtools'
            testImplementation 'org.springframework.boot:spring-boot-starter-test'
        }
 
- HTTP requests are handled by a controller

Example of controller

        @Controller
        public class GreetingController {

            @GetMapping("/greeting")
            public String greeting(@RequestParam(name="name", required=false defaultValue="World") String name, Model model) {
                model.addAttribute("name", name);
                return "greeting";
	        }

        }

As shown above, the @controller annotates that this code functions as a controller. Spring boot will recognize that annotation and act according

- @GetMapping - ensures HTTP requests are mapped to a certain path
- @RequestParam binds the value of the query string parameter
- Spring intializr will provide a basic java class that will start the spring application

## Spring MVC and Thymeleaf

- Variables can be passed from the controller to the view using the Model attribute. Model is defined in the parameter and is used to add an attribute with a certain value that is passed to the view

- Passed value can be accessed by Thmeleaf on the view