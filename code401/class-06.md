# What I Learnt Today

## Object

- software bundle of related state and behavior
- model the real-world objects that you find in everyday life
- stores its states in fields and exposes its behavior through methods

Benefits of using objects:

- Modularity- code for an object can be written and maintained independently of the code for other objects

- Information-hiding - keeping internal implementations hidden from the public

- Code re-use - allows for code to reused mulitple of times, saving time and work

- Pluggability and debugging ease - if a particular object becomes a problem you can simple remove it without affecting the whole code

## Class

- a blueprint from which objects are created

Example

        class Bicycle {

            int cadence = 0;
            int speed = 0;
            int gear = 1;

            void changeCadence(int newValue) {
                cadence = newValue;
            }

            void changeGear(int newValue) {
                gear = newValue;
            }

            void speedUp(int increment) {
                speed = speed + increment;   
            }

            void applyBrakes(int decrement) {
                speed = speed - decrement;
            }

            void printStates() {
                System.out.println("cadence:" +
                    cadence + " speed:" + 
                    speed + " gear:" + gear);
        }
    }

In the example above, cadence, speed, and gear are fields and represent the objects state. Methods, such as changeGear and speedUp, define its interaction or its behavior

## Inheritance

- object-oriented programming allows classes to inherit commonly used state and behavior from other classes

- usually, there's a superclass and its subclasses

Example 

    class MountainBike extends Bicycle {

    // new fields and methods defining 
    // a mountain bike would go here

    }

In the example above, MountainBike inherits the methods and fields from Bicycle. It is able to use methods created in Bicycle and add its own methods

## Interface

- group of related methods with empty bodies

    interface Bicycle {

        //  wheel revolutions per minute
        void changeCadence(int newValue);

        void changeGear(int newValue);

        void speedUp(int increment);

        void applyBrakes(int decrement);
    }

When a method implements the interface above, it must define each function

## Packages

- organizes a set of related classes and interfaces
