# What I Learnt Today

Activities exist as part one or more tasks

Task is a stack of activities
Start activity pushes a new activitiy onto the task's back task
Back function reverses the push function, calling the finish function on the current activity, popping it from the stack
and returning the user back to the previous activity

Fragment - reusuable portion of the app's ui

Push and pop model also applies to fragments - you can add the fragment to back stack. When the user hits the back button
the fragment is reversed and only when there are no fragments will the back button terminate your current activity

Launch modes - define how a new instance of an activity is associated with the current task
