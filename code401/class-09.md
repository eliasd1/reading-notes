# What I Learnt Today

## HTTP Request Lifecycle

1. Local Processing
    - Browser extracts the "scheme"/protocol, port number, resource path, and query strings

2. Resolve an IP
    - Check cache, if cache lookup fails fire off DNS request using UDP
    - Once the requests arrives at the DNS serve, it will for the address associated with the request and then send a response
    - Client receives IP address
 
3. Establish a TCP Connection
    - Client sends over the IP to TCP ( transport layer protocol)

4. Send an HTTP request
    - Now that client has the IP address and TCP connection it can send an HTTP request
    - Request is made up for "request" lines, request header, and body

5. Tearing Down and Cleaning Up
    - Browser begins processing what it received

Example of creating a request

        URL url = new URL("http://example.com");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");