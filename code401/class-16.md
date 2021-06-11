# What I Learnt Today

## Spring Security Architecture

Authentication and Access Control

### Authentication

        public interface AuthenticationManager {

        Authentication authenticate(Authentication authentication)
        throws AuthenticationException;
        }

AuthenticationManager can do one of 3 things:

 - Return an Authentication (normally with authenticated=true) if it can verify that the input represents a valid principal.

 - Throw an AuthenticationException if it believes that the input represents an invalid principal

- Return null if it cannot decide



### Authorization

- performed once authentication is successful


### Web Security

- Spring Security in the web tier (for UIs and HTTP back ends) is based on Servlet Filters

- The client sends a request to the application, and the container decides which filters and which servlet apply to it based on the path of the request URI

- A filter can also modify the request or the response used in the downstream filters and servlet

- Spring boot manages the order of the filter chain using @Beans or implement ordered

        @RequestMapping("/foo")
            public String foo(@AuthenticationPrincipal User user) {
                ... // do stuff with user
        }
    
    The method above is used to give access to the currently authenticated user

