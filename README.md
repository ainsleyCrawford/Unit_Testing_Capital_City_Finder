# Unit Testing a Capital City Finder Program
Through this project I sought to deepen my experience in component testing and to discover Jest, a JavaScript unit testing framework.
## Test Basis: Capital City Finder
The 'Capital City Finder' program accepts a state (country or region) as an argument and returns the corresponding capital city. The program must be extensive, covering every United Nations–⁠recognised country, in addition to many regions, e.g., the capital of the Dutch province of South Holland is Rotterdam.
## Program Specification: Capital Finder Module
Unlike other programming languages, JavaScript cannot create associative arrays, however the same functionality may be achieved using objects. In this case, the object `cityFinder` is defined with an object literal of state–capital (property–value) pairs, eg. `"Republic of the Congo": "Brazzaville"`. The following function accesses the `cityFinder` object and, should the argument match a property, returns the property's value:

    function returnCapital(state) {
        return cityFinder[state];
    }
Thus, supplying the input *Malaysia* returns the value *Kuala Lumpur*. The combination of the `cityFinder` object and the `returnCapital(state)` function may be thought of collectively as the capital finder module.
## Unit Test Planning: How to Test the Program
To ensure the extensiveness of the capital finder module (i.e. app.js file) test data should cover a collection of geographically and culturally disparate states. This approach aknowledges the risk of a particular cultural bias, especially a pro-Occidental or a pro-Anglo-Saxon one, during development resulting in a disregard for dissimilar countries. For this reason, it is advantageous that each test condition concern one of the six inhabited continents: Africa, Asia, Europe, North America, South America and Oceania.

....export
## Test Cases
