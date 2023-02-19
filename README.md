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

## Refactoring

Plan for refactoring complex code:

Estimated impact of refactoring (lower CC, but other drawbacks?).

Carried out refactoring (optional, P+):

git diff ...

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
