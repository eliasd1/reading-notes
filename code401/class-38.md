# What I Learnt Today

## Amazon SNS

- Amazon Simple Notification Service (SNS) is a fully managed messaging service for application-to-application systems
- Amplify framework is used to implement all types of project such as iOS, android, flutter, and web
- Amplify CLI - configures and covers all the services needed to power your backend through a simple command line interface
- Amplify Libraries - case-centric client libraries to integrate your app code with a backend using declarative interfaces

Benefits of SNS:

- Modernize and decouple your applications
- Send messages directly to millions of users
- Reliably deliver messages

## How to implement Amazon SNS?

1. Create a topic
2. Create a subscription to the topic
3. Publish a message to the topic
4. Delete the subscription and topic

## Publish a message to the topic

- In the left navigation pane, choose Topics.
- On the Topics page, choose the topic that you created earlier, and then choose Publish message.
- The console opens the Publish message to topic page.
- In the Message body section, choose Identical payload for all delivery protocols, and then enter a message body.
- Choose Publish message.
- The message is published to the topic, and the console opens the topic’s Details page.
- Check your email inbox and verify that you received an email from Amazon SNS with the published message.