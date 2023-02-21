# DD2480-JavaScript - Assignment 3

## Project

Name:

URL:

One or two sentences describing it

The Algorithms - JavaScript

<https://github.com/TheAlgorithms/JavaScript>

This repository contains a wide collection of different algorithms that can be used for problems such as conversions, graphs, mathematics, searches and so on.

## Onboarding experience

Did it build and run as documented?
    
See the assignment for details; if everything works out of the box,
there is no need to write much here. If the first project(s) you picked
ended up being unsuitable, you can describe the "onboarding experience"
for each project, along with reason(s) why you changed to a different one.

Our first selected project was [mockito](https://github.com/mockito/mockito). We selected this project because it is written in Java and uses gradle as it's build tool. Gradle automatically downloads the needed dependencies, which makes it easier for us to set up the local environment needed to build and test the project. However, we all had problems building the project version at the time, and gradle simply gave us build errors before we had even started working. Because it seemed like quite a hassle trying to solve mockitos problems, we decided to switch to the project [electron](https://github.com/electron/electron)

This project is instead mostly written in C++, and we all gave it a try to set up the local environment needed to build this project. Neither of us were able to do so, as we felt the documentation for doing this was very complicated and had multiple links linking to other documentations, which in turn linked to even more documentations. We then decided to switch projects again and settled for [TheAlgorithms/JavaScript](https://github.com/TheAlgorithms/JavaScript).

This project has a contribution guidelines markdown document, which briefly explains that you need to run `npm install`, followed by `npm test`, to install the project dependecies, and then run the jest tests. Some of us already had some experience working with Node.js and npm, and understood that this meant that the only tools we had to manually install were Node.js and npm. This went quite smootly for most of us, but some had problems with old Node.js versions, which were unable to run the project. After updating Node.js, everything ran smoothly without any errors. We noticed, however, that one of the tests included in the project ran for a very long time, which we solved by simply commenting out the test in our version of the repository.

## Complexity

1. What are your results for ten complex functions?
   * Did all methods (tools vs. manual count) get the same result?
   * Are the results clear?
2. Are the functions just complex, or also long?
3. What is the purpose of the functions?
4. Are exceptions taken into account in the given measurements?
5. Is the documentation clear w.r.t. all the possible outcomes?

#### Function `BinaryToHex.hexLookup` (24 NLOC, 18 CCN):

The purpose of this function is to convert a binary value into a hexadecimal value. Input is a block of 4 characters representing half of a byte in binary form. Output is a block of 1 character representing half of a byte in hexadecimal form.

This function is more complex than it needs to be. It uses a `switch-case` statement to determine the corresponding hexadecimal value which in turn results in 16 different cases. As a result of that the cyclic complexity number is inappropriately high and the function itself is also inappropriately long. On top of that it's inefficient since it makes a string comparison up to 16 times to determine which case to use instead of computing it directly.

CCN  =  E - N + 2  =  38 - 23 + 2  =  17

#### Function `FlashSort.flashSort` (58 NLOC, 15 CCN):

The purpose of this function is to efficiently sort an array of numerical values. Input is an array consisting of `n` number of elements. Output is an array consisting of the same `n` number of elements sorted in ascending order.

This function is more complex than it needs to be. It uses `if` statements to determine the `min` value and `max` index of the input array when a conditional operator could have been used instead. Further it uses one `for` loop to set all buckets to zero when that could have been achieved with `Array.fill` instead. It also uses insertion sort as the final step but reimplements it rather than calling the existing implementation.

CCN  =  E - N + 2  =  41 - 30 + 2  =  13

#### Function `Timing-Functions/GetMonthDays.getMonthDays`:

The purpose of this function is to, given a number of a month and a year, return the number of days that month, that year. The function has 17 NLOC and a cyclomatic complexity of 10, as counted by lizard. The function is not overly complex, but could probably be made a bit less complex quite easily. For example, when checking if the input month is valid, one could simply check if it is between 1 and 12 (inclusive). This would only require 2 checks, instead of the three, even more time consuming checks, that it is doing now. To me it would also make sense to store the number of days for each month in an array of length 12, and simply do a lookup, using the month as the index. Lastly, add 1 day if the number of the month is 2 and it is a leap year.

The documentation for this function is lacking. The calculation to check for leap year is not intuitive at all and I had to google when leap years occur to have a chance of understanding what it was doing.

#### Function `ConvexHullGraham.convexHull` (NLOC 37, CCN 13):
The purpose of this function is to find the convex hull of a finite set of points in the plane with time complexity O(n log n) using Graham Scan.
Given a set of points in the plane, the Convex hull of the set is the smallest
convex polygon that contains all the points of it.

This function's cyclomatic complexity can be reduced.
Firstly, it uses two `for` loop to slice copy and reverse the array. This can be achieved with `slice()` and `reverse()`.
Secondly, the process of updating `upperPoints` and `lowerPoints` can be put into sub-functions, which reduces the complexity and make the function more readable.
Additionally, the function has a redundant `if` condition that can be removed.

The cyclomatic complexity is:

CCN  =  E - N + 2  = 44 - 33 + 2  =  13

#### Function `RgbHsvConversion.getRgbBySection` (NLOC 29, CCN 11):

Lizard calculated the cyclomatic complexity of `RgbHsvConversion.getRgbBySection` as 11.

The purpose of this function is to convert the HSV-representation to the RGB-representation. The original input is the hue, saturation and brightness-value of the color. Before `RgbHsvConversion.getRgbBySection` is called, four intermediate value is calculated and used as the input of this function. Output is the red, green and blue value.

This function is more complex than it needs to be. It uses `if-else` statements to determine the calculation method of RGB value according to the value of `hueSection`. But more than half of the conditions is unnecessary.  As a result of that the cyclic complexity number is inappropriately high.

Manually count the cyclomatic complexity:

CCN = E - N + 2 = 30 - 21 + 2 = 11

#### Function `PrimMST._shiftDown` (39 NLOC, 12 CCN):

This function is part of PrimMST, which generates a Minimum Spanning Tree (MST) of a graph using Prim's Algorithm. To order the weighted edges, a Minimum Binary Heap is used to implement the class Priority Queue. `_shiftDown` is a method of this class which takes as argument the position of a node and shifts it down in the heap to a correct position (ie all of its parents should have smaller values and all of its children greater values).

This function has a cyclomatic complexity number of 12 (CCN = E - N + 2 x P = 32 - 22 + 2 x 1 = 12). When computing the CCN by hand, we find the same result as "lizard" if we take into account exceptions with their `try {} catch () {}` statements, and we consider clauses individually in every predicate. This function also has a high number of ligns of code compared to the others in the class, so it seems in this case that NLOC and CCN are correlated.

The complexity of the function could be largely avoided by adding an auxiliary function to get the priorities of the children of a node. We could also avoid checking if the children exist because we already have that information from the priority, which is infinite if a node doesn't exist.

The different outcomes of taking branches in this function are not at all documented, we only have a comment at the top of the method to indicate what it does, but no indications are given inside the function.


#### Function `ConwaysGameOfLife.newGeneration` (25 NLOC, 20 CCN):

This function implements the famous Game Of Life by computing the next generation of cells from the current one. It takes as argument an integer matrix representing the alive cells with value 1 and dead cells with value 0, and evaluates which cells survive or not according to the status of their neighbours. It returns the matrix of the new cell generation. 

The function has a cyclomatic complexity of 20 but a lign count of 25, so the complexity here is not due to the length of the function, but rather the fact that we need to check all neighbours of a cell to determine whether it survives or not. So this complexity can difficulty be avoided.

All different outcomes of the game are very well documented in the head comment of the file, and the different steps are commented inside the function, so it is very easy to understand the outcome from different branches. 


#### Function SimpsonIntegration.integralEvaluation

For the function integralEvaluation in Maths/SimpsonIntegration.js, lizard calculated its cyclomatic complexity as 15. When analysing the function by hand, I constructed a control flow graph with 37 edges and 24 nodes. Using the formula E - N + 2, the by-hand cyclomatic complexity was also calculated as 15. It seems lizard does account for exceptions, as while constructing my control flow diagram, I drew edges from where the exceptions were thrown to the return node at the bottom. If these are not counted, the cyclomatic complexity is significantly lower.

The purpose of the function is to approximate the value of a definite integral, using Simpsons 1/3 rule. This function was one of the ones with the highest cyclomatic complexity in the repository, but its number of lines of code (26) is not particularly large. A large part of the cyclomatic complexity seems to be comming from the quite extensive input validation.

The documentation of the function is quite thorough. There is a comment above the function, explaining what the function does, as well as the requirements of the different parameters. There are also comments inside the function, explaning what different parts are supposed to do. When the function throws an error, it is clearly specified by the error message what went wrong. There is extensive error checking for the input, however, I noticed that there is no check to make sure that the passed variable "func" is indeed a function. If it is not, an error will be thrown when the "func"-variable is attemped to be invoked.


## Refactoring

Plan for refactoring complex code:

Estimated impact of refactoring (lower CC, but other drawbacks?).

Carried out refactoring (optional, P+):

git diff ...

#### Function `BinaryToHex.hexLookup` (24 NLOC, 18 CCN):

This function can be refactored by computing an index value instead of using a `switch-case` statement. The index value can be computed by subtracting the ASCII-value of `'0'` from the ASCII-value of each character in the binary string and then shift the bit into the corresponding position. That index value can then be used to return the corresponding character from an array containing all of the hexadecimal digits.

Before the refactoring the function had 24 NLOC, 18 CCN and 50% branch coverage. After the refactoring the function has 12 NLOC, 2 CCN and 100% branch coverage.

<https://github.com/Xolvez/DD2480-JavaScript/commit/b42e857819676f79647d44083fb126015c636cd8>

#### Function `SimpsonIntegration.integralEvaluation`:

As mentioned earlier, a large part of the complexity of this function comes from checking for invalid input. By creating and calling another function, `validateInput`, which handles all input validation and error throwing, the cyclomatic complexity can be reduced significantly. In fact, making this simple adjustment almost cuts the cyclomatic complexity in half, reducing it from 15 down to just 8.


The refractoring was carried out in the commit [f08ccc95131a607eb9013abd2abf56642a7f861d](https://github.com/Xolvez/DD2480-JavaScript/commit/f08ccc95131a607eb9013abd2abf56642a7f861d). Before the refractor, the function had 26 NLOC and a cyclomatic complexity of 15. After the refractor, the function has 22 NLOC and a cyclomatic complexity of 8.

### Function `ConvexHullGraham.convexHull`:
As mentioned earlier, this function's cyclomatic complexity can be reduced.
Firstly, it uses two `for` loop to slice copy and reverse the array. This can be achieved with `slice()` and `reverse()`, which can reduce the complexity by 2. 
Secondly, the process of updating `upperPoints` and `lowerPoints` can be put into sub-functions, which reduces the complexity by 4 and make the function more readable.
Additionally, the function has a redundant `if` condition that can be removed, which reduced the complexity by 1.
Making these adjustments should reduce the cyclomatic complexity from 13 to 6.


### Function `RgbHsvConversion.getRgbBySection`:

This function can be refactored by replacing the `if-else` statements with five `if` statements.
And since the invalid input is checked before this function is called(`hueSection` < 0 and `hueSection` > 6), we don't need to check them again.
Making this adjustment can cut the cyclomatic complexity from 11 to 5.

#### Function `PrimMST._shiftDown` (from 13 CCN to 7 CCN):

The complexity of the function comes mainly from two things:
- computation of the priorities of the children of a node, which is done multiple times
- checking the existence of the children, which is not necessary because we already have that information from the priority, which is infinite if a node doesn't exist.

A refactoring plan could be to:
- add an auxiliary function to compute the priority of the children of a node
- remove all assertions like `child2Pos < this._heap.length` which would also avoid the last if statement

The refactoring was carried out in this [commit](https://github.com/Xolvez/DD2480-JavaScript/commit/0600e9aa6bd6dccab7a9bb9a3edd7e81d88bd881). It decreased the CCN of the method _shiftDown from 13 to 6, along with a big reduce in NLOC (from 46 to 23).

## Coverage

### Tools

Document your experience in using a "new"/different coverage tool.

How well was the tool documented? Was it possible/easy/difficult to
integrate it with your build environment?

### Your own coverage tool

Show a patch (or link to a branch) that shows the instrumented code to
gather coverage measurements.

The patch is probably too long to be copied here, so please add
the git command that is used to obtain the patch instead:

git diff ...

What kinds of constructs does your tool support, and how accurate is
its output?

### Evaluation

1. How detailed is your coverage measurement?

2. What are the limitations of your own tool?

3. Are the results of your tool consistent with existing coverage tools?

#### Function `FlashSort.flashSort` (58 NLOC, 15 CCN):

The ad-hoc coverage tool can be found in the following commit:
<https://github.com/Xolvez/DD2480-JavaScript/commit/ce0414e95ff2d38a01357c273e5e999a4edb0ae2>

Using it with the 4 tests in that branch results in the following output:
```
Branch 5 was not covered.
Branch 6 was not covered.
Branch 9 was not covered.
Branch 12 was not covered.
Branch 14 was not covered.
Branch 16 was not covered.
```

The biggest limitation of the tool at the moment is that it requires the user to manually add logging lines in the target function. The results are inconsistent compared to the measurement with `npm test -- --coverage` which only detects that branch indices `6` and `14` are uncovered. For example, it seems like it does not consider the branches that correspond to loops that was entirely skipped, such as branch index `5`.

#### Function `ConwaysGameOfLife.newGeneration` (25 NLOC, 20 CCN):

The ad-hoc coverage tool can be found in the following commit:
<https://github.com/Xolvez/DD2480-JavaScript/commit/9442562c0a86a4b5bd013e2a1b771faad35f41d3>

When used with the current test suite, we get the following output:

` Total branch coverage: 22 out of 22, ie 100 % `

Since the function `newGeneration` is quite straighforward (no exception handling or tertiary operators), our coverage tool only handles simple branches here. It is very limited since it requires the user to add lines in the code of the function to check visited branches, so we would also need to udpate it if we were to change the program. 

However, the result here is consistent with the automatic tool we have been using (`npm test` which calls `jest`), ie it gives 100% branch coverage for this function.

## Coverage improvement

Show the comments that describe the requirements for the coverage.

Report of old coverage: [link]

Report of new coverage: [link]

Test cases added:

git diff ...

Number of test cases added: two per team member (P) or at least four (P+).


### Function `SimpsonIntegration.integralEvaluation`:

The coverage of this function was quite low, as almost no tests for invalid input had been written. 
I implemented tests that took all branches, and increased the coverage to 100% for statements, branches and lines. Before the new tests, the statement- and branch-coverage was 79.41% respectively 69.56%. 
The tests were implemented in the commit [10dededbbeb3fe01e87282c638b83d2066aedb89](https://github.com/Xolvez/DD2480-JavaScript/commit/10dededbbeb3fe01e87282c638b83d2066aedb89).


### Function `Sorts/InsertionSort.insertionSort`:

This function had 0 tests written for it, and thus the function itself had 0% coverage. The file, had a statement-, branch- and lines-coverage of 63.15%, 66.66% respectively 62.5%. After the added tests, all of these numbers was 100%, as measured by lizard. 
The tests were implemented in the commit [e647b5d52f2d640e43d56ae6874818b0a82a3f73](https://github.com/Xolvez/DD2480-JavaScript/commit/e647b5d52f2d640e43d56ae6874818b0a82a3f73).


#### Function `FibonacciSearch.fibonacciSearch` (75% branch coverage):

<https://github.com/Xolvez/DD2480-JavaScript/commit/f2abd7138883993f10f7ba3facd437d4d31d4e95>

Extends the testing with a case where the input array consists of both negative and positive elements and also contains the target element. Increases the branch coverage to 87.5%.

<https://github.com/Xolvez/DD2480-JavaScript/commit/60db3f98be7914d343fedcfd01dd123ab98edf66>

Extends the testing with a case where the input array consists of only one single element which also happens to be the target element. Increases the branch coverage to 100%.

#### Function `FlashSort.flashSort` (80% branch coverage):

<https://github.com/Xolvez/DD2480-JavaScript/commit/6f379952ce76bb83c4fdcca1d0d49e6d0baa2b9b>

Extends the testing with a case where the input array consists of multiple elements that are all of the same value. Increases the branch coverage to 90%.

<https://github.com/Xolvez/DD2480-JavaScript/commit/f5514c2c0ffb86beabff01ca01d6f9fe168d1777>

Extends the testing with a case where the input array consists of the positive and negative extreme values for integers in descending order. Increases the branch coverage to 100%.

#### Function `_shiftDown` of Graphs/PrimMST.js (from 0% to 92% branch coverage):

The following commit adds a test file for PrimMST because there was none, and we can check that with an empty test suite, we get 0% coverage:
<https://github.com/Xolvez/DD2480-JavaScript/commit/b4e86090d56aea2e4e3e62ef1b9afd5c5f1d9bf5>

This commit adds a first unit test calling the function PrimMST directly, and increases the branch coverage to 81.25%:
<https://github.com/Xolvez/DD2480-JavaScript/commit/1ec9ed0aa4154908d52c7cb968e229f9f805b56b>

This commit adds a first unit test specifically for the function _shiftDown. For that, the PriorityQueue class has to be exported to be able to call its methods directly from the test. This addition increases the branch coverage to 87.5%:
<https://github.com/Xolvez/DD2480-JavaScript/commit/de29721b2930735d5ccb8ee9968581a36ca38db3>

This commit adds a second unit test specifically for the function _shiftDown. It targets a PriorityQueue where we need to shift a node down to the right side of the tree instead of the left. This addition increases the branch coverage to 89.58%:
<https://github.com/Xolvez/DD2480-JavaScript/commit/4108f7837347ccefcb3092e3247285ec68604a07>

This commit adds a third unit test specifically for the function _shiftDown. It targets a PriorityQueue where we need to shift a node down to a left-child leaf which doesn't have a right-child "brother". This addition increases the branch coverage to 91.66%:
<https://github.com/Xolvez/DD2480-JavaScript/commit/b6211d19e53a5631451432b3b589ea8f24d14a47>

By adding those 4 unit tests, we increased branch coverage from 0% to 91.66% for the whole file PrimMST.js and most importantly, the last test helped find a bug in the method, which we corrected.

#### Function `RailwayTimeConversion.RailwayTimeConversion` (62.5% branch coverage):

Extends the testing with two cases which test the railway time conversion when hour is 12 at PM and AM. Increases the branch coverage to 87.5%.

#### Function `RgbHsvConversion.hsvToRgb` and `RgbHsvConversion.rgbToHsv` (90% branch coverage):

Extends the testing with cases where the function will throw exceptions. Increases the coverage to 100%.


## Self-assessment: Way of working

Current state according to the Essence standard: ...

Was the self-assessment unanimous? Any doubts about certain items?

How have you improved so far?

Where is potential for improvement?

## Overall experience

What are your main take-aways from this project? What did you learn?

Is there something special you want to mention here?
