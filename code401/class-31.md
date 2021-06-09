# What I Learnt Today

## Espresso

- used to write concise and reliable Android UI tests
- target audience: developers who believe that automated testing is an integral part of the development cycle
- two main components of espresso tests on views:
    - UI interactions
    - Assertions

Note: It is important to turn off animations to prevent unexpected results.

Espresso test recorder tool helps create tests without writing any test code

Espresso tests run optimally fast

Example of Expresso Test:

    @Test
    public void greeterSaysHello() {
        onView(withId(R.id.name_field)).perform(typeText("Steve"));
        onView(withId(R.id.greet_button)).perform(click());
        onView(withText("Hello Steve!")).check(matches(isDisplayed()));
    }

As you can see in the example, espresso writes the name of someone and clicks the button. After clicking the button it checks whether the message "Hello" + name of someone is displayed

When onView() is invoked espresso waits to perform the corresponding action or assertion. For example, in the test above, espresso performs an action on a specific view defined by onView(withId())

Developers use espresso to check if their application runs properly before deploying the code to a production environment.


