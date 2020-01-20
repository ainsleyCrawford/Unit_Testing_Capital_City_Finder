# Unit Testing a Capital City Finder Program
Through this project I sought to deepen my experience in component testing and to discover Jest, a JavaScript unit testing framework.
## Test Basis: Capital City Finder
The 'Capital City Finder' program accepts a state (country or region) as an argument and returns the corresponding capital city. As JavaScript does not have associative arrays, this was achieved by defining an object, `cityFinder`, with an object literal of state–capital (property–value) pairs, eg. `"Republic of the Congo": "Brazzaville"`. The following function accesses the `cityFinder` object and, should the argument be the same string as a property, returns the property's value:

    function returnCapital(state) {
        return cityFinder[state];
    }
Thus, supplying the input *Malaysia* returns the value *Kuala Lumpur*.

each continent to ensure extensive coverage... 
