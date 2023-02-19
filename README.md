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
