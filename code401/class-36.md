# What I Learnt Today

##  Amplify and Cognito

### Cognito

    - Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily.
    - Instead configuring and running authentication locally, you can use AWS services to do the same function

### Authentication with Amplify

- The Amplify Framework uses Amazon Cognito as the main authentication provider.

- Amazon Cognito is a robust user directory service that handles user registration, authentication, account recovery & other operations.

### Steps

1. Amplify add auth to configure authentication for application.
 
        ? Do you want to use the default authentication and security    configuration?
            `Default configuration`
        ? How do you want users to be able to sign in?
            `Username`
        ? Do you want to configure advanced settings?
            `No, I am done.`

2. Use "Amplify push" to push changes to the cloud

    Add the following dependency to the app build.gradle:

        dependencies {
            implementation 'com.amplifyframework:aws-auth-cognito:1.17.4'
        }

- A Initialize Amplify

    Add the following lines:

        Amplify.addPlugin(new AWSCognitoAuthPlugin());
        Amplify.configure(getApplicationContext());

3. Call Amplify.configure
