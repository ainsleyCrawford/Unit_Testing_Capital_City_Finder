# Unit Testing a Capital City Finder Program
Through this project I sought to deepen my experience in component testing and to discover Jest, a JavaScript testing framework.
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

Jest is an open-source library that simplifies performing tests in JavaScript. In this project Jest is installed and the test script of package.json is set to `"jest"` so that Jest runs when `npm test` is entered in the command line. The statement `module.exports = returnCapital` exports the function to be tested from the app.js file. The function is thn imported into the newly created app.test.js file via `const returnCapital = require('./app')`. The Jest method  
`test('', () => { expect().toBe() })` verifies expected output against actual output for a given input.
## Test Cases
**Project Name:** Capital City Finder  
**Created By:** Ainsley  
**Creation Date:** 21/01/20  
**Test Condition ID:** Af  
**Test Condition Description:** Verify that the program returns the correct capital city for a given African country or province.  

|Test Case ID |Test Data   |Expected Outcome|Actual Outcome|Status|
|:-----------:|:----------:|:--------------:|:------------:|:----:|
|Af-01        |"Liberia"   |"Monrovia"      |"Monrovia"    |Passed|
|Af-02        |"Mozambique"|"Maputo"        |"Maputo"      |Passed|
|Af-03        |"Senegal"   |"Dakar"         |"Dakar"       |Passed|

**Test Condition ID:** As  
**Test Condition Description:** Verify that the program returns the correct capital city for a given Asian country or province.  

**Test Condition ID:** Eu  
**Test Condition Description:** Verify that the program returns the correct capital city for a given European country or province.  

**Test Condition ID:** No  
**Test Condition Description:** Verify that the program returns the correct capital city for a given North American country or province.   

**Test Condition ID:** So  
**Test Condition Description:** Verify that the program returns the correct capital city for a given South American country or province.  

**Test Condition ID:** Oc  
**Test Condition Description:** Verify that the program returns the correct capital city for a given Oceanian country or province.  
