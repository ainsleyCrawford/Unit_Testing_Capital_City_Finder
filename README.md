# Unit Testing a Capital City Finder Program
Through this project I sought to deepen my experience in component testing and to discover Jest, a JavaScript unit testing framework.
## Test Basis: Capital City Finder
The 'Capital City Finder' program accepts a state (country or region) as an argument and returns the corresponding capital city. The program must be extensive, covering every United Nations–⁠recognised country, in addition to many regions, e.g., the capital of the Dutch province of South Holland is Rotterdam.
## Program Specification: Object and Function
Unlike other programming languages, JavaScript cannot create associative arrays, however the same functionality may be achieved using objects. In this case, the object `cityFinder` is defined with an object literal of state–capital (property–value) pairs, eg. `"Republic of the Congo": "Brazzaville"`. The following function accesses the `cityFinder` object and, should the argument be the same string as a property, returns the property's value:

    function returnCapital(state) {
        return cityFinder[state];
    }
Thus, supplying the input *Malaysia* returns the value *Kuala Lumpur*.
## Unit Test Planning: How to Test the Capital Finder Module
each continent to ensure extensive coverage... 
