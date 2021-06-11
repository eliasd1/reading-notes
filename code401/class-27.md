# What I Learnt Today

- Activities exist as part one or more tasks

- Task is a stack of activities

- Start activity pushes a new activitiy onto the task's back task

- Back function reverses the push function, calling the finish function on the current activity, popping it from the stack
and returning the user back to the previous activity

Default behaviors of activities and tasks:

- If Activity B is started from Activity A, Activity A is stopped. If a user clicks on the back button while on Activity B, Activity B will be stopped and Activity A will be started

- When the user leaves a task by pressing the Home button, the current activity is stopped and its task goes into the background. When the user comes back, the activity at the top of the stack is resumed

- If the user presses the Back button, the current activity is popped from the stack and destroyed. The previous activity in the stack is resumed. When an activity is destroyed, the system does not retain the activity's state

- Activities can be instantiated multiple times, even from other tasks.

Fragment - reusuable portion of the app's ui

Push and pop model also applies to fragments - you can add the fragment to back stack. When the user hits the back button
the fragment is reversed and only when there are no fragments will the back button terminate your current activity

Launch modes - define how a new instance of an activity is associated with the current task

- Using the manifest file
    - specify how an activity should be perform when launched

- Using Intent flags
    - declare whether a new activity should be associated with the current task

Clearing the back stack

The system clears the task of all activities except the root activity when the user has been inactive for a while. This way the user can get back to application in a refreshed state

- alwaysRetainTaskState
    - application retains all acitivities in a stack

- clearTaskOnLaunch
    - task is cleared down to root activity

Shared Preferences
 - points to a file containing key-value pairs and provides simple methods to read and write them
 - getSharedPreferences() — use this if you need multiple shared preference files identified by name
 - getPreferences() — use this from an Activity