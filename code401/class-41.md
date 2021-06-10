# What I Learnt Today

## Intent Filters

What is an Intent Filter?

- Intent filter is a property that used in your app to allow other apps use a feature of your app.

- It is added in the manifest file if you want to use it

- Specify type of intent that the component would like to receive

- It can be used to share image or documents with other applications. For example, in our lab assignment, we are supposed to share an image with taskmaster which directs the user to the add task activity.

- If the intent matches an intent filter the system starts that components and delivers it to the Intent object

Criteria of the Intent object:

- Action - string naming the action to perform, which is usually one of the platform-defined values such as ACTION_SEND (deliver data to someone else) or ACTION_VIEW (display data to the user)

- Data - description of the data associated with the intent

- Category - characterize the activity handling the intent