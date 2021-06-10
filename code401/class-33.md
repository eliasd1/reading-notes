# What I Learnt Today

## GraphQL

### What is Serverless Architecture? What are its Pros and Cons?

- Serverless architecture is exciting, but it comes with a bunch of limitations.
- As the validity and success of architectures depend on the business requirements and by no means solely on technology.
- Serverless can shine when used in proper place.

What is AWS Amplify?

  - Tools and services that can be used to help front-end web and mobile developers build full stack applications, powered by AWS, Without app backends.

What is GraphQL?

  - It is tool helps on create backends for your web and mobile applications on AWS. 

AWS Amplify Advantages:
  - Easy to connect with the backend
  - Easily deploy web applications
  - Easily manage app content outside the AWS console

The disadvantages of using serverless:
- Cannot directly access APIs through the usual IP, serverless functions are accessed only as private APIs
- Unusable for applications that have variable execution times

Example

        type Blog @model {
        id: ID!
        name: String!
        posts: [Post] @connection(name: "BlogPosts")
        }
        type Post @model {
        id: ID!
        title: String!
        blog: Blog @connection(name: "BlogPosts")
        comments: [Comment] @connection(name: "PostComments")
        }
        type Comment @model {
        id: ID!
        content: String
        post: Post @connection(name: "PostComments")
        }