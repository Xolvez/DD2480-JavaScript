# DD2480-JavaScript - Assignment 3

## Project

Name:

URL:

One or two sentences describing it

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

### Function SimpsonIntegration.integralEvaluation

For the function integralEvaluation in Maths/SimpsonIntegration.js, lizard calculated its cyclomatic complexity as 15. When analysing the function by hand, I constructed a control flow graph with 37 edges and 24 nodes. Using the formula E - N + 2, the by-hand cyclomatic complexity was also calculated as 15. It seems lizard does account for exceptions, as while constructing my control flow diagram, I drew edges from where the exceptions were thrown to the return node at the bottom. If these are not counted, the cyclomatic complexity is significantly lower.

The purpose of the function is to approximate the value of a definite integral, using Simpsons 1/3 rule. This function was one of the ones with the highest cyclomatic complexity in the repository, but its number of lines of code (26) is not particularly large. A large part of the cyclomatic complexity seems to be comming from the quite extensive input validation.

The documentation of the function is quite thorough. There is a comment above the function, explaining what the function does, as well as the requirements of the different parameters. There are also comments inside the function, explaning what different parts are supposed to do. When the function throws an error, it is clearly specified by the error message what went wrong. There is extensive error checking for the input, however, I noticed that there is no check to make sure that the passed variable "func" is indeed a function. If it is not, an error will be thrown when the "func"-variable is attemped to be invoked.

#### Function `FlashSort.flashSort` (58 NLOC, 15 CCN):

The purpose of this function is to efficiently sort an array of numerical values. Input is an array consisting of `n` number of elements. Output is an array consisting of the same `n` number of elements sorted in ascending order.

This function is more complex than it needs to be. It uses `if` statements to determine the `min` value and `max` index of the input array when a conditional operator could have been used instead. Further it uses one `for` loop to set all buckets to zero when that could have been achieved with `Array.fill` instead. It also uses insertion sort as the final step but reimplements it rather than calling the existing implementation.

CCN  =  E - N + 2  =  41 - 30 + 2  =  13

## Refactoring

Plan for refactoring complex code:

Estimated impact of refactoring (lower CC, but other drawbacks?).

Carried out refactoring (optional, P+):

git diff ...

#### Function `BinaryToHex.hexLookup` (24 NLOC, 18 CCN):

This function can be refactored by computing an index value instead of using a `switch-case` statement. The index value can be computed by subtracting the ASCII-value of `'0'` from the ASCII-value of each character in the binary string and then shift the bit into the corresponding position. That index value can then be used to return the corresponding character from an array containing all of the hexadecimal digits.

### Function `SimpsonIntegration.integralEvaluation`:

As mentioned earlier, a large part of the complexity of this function comes from checking for invalid input. By creating and calling another function, `validateInput`, which handles all input validation and error throwing, the cyclomatic complexity can be reduced significantly. In fact, making this simple adjustment almost cuts the cyclomatic complexity in half, reducing it from 15 down to just 8.

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

## Coverage improvement

Show the comments that describe the requirements for the coverage.

Report of old coverage: [link]

Report of new coverage: [link]

Test cases added:

git diff ...

Number of test cases added: two per team member (P) or at least four (P+).

## Self-assessment: Way of working

Current state according to the Essence standard: ...

Was the self-assessment unanimous? Any doubts about certain items?

How have you improved so far?

Where is potential for improvement?

## Overall experience

What are your main take-aways from this project? What did you learn?

Is there something special you want to mention here?
