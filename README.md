# FreeCodeCamp's APIs and Microservices Lessons

**TOC:**
- [FreeCodeCamp's APIs and Microservices Lessons](#freecodecamps-apis-and-microservices-lessons)
  - [Lessons learned](#lessons-learned)
  - [NPM Basics](#npm-basics)
  - [Node and Express Basics](#node-and-express-basics)
  - [MongoDB and Mongoose Basics](#mongodb-and-mongoose-basics)
***
## Lessons learned
- I imagined each lesson would build on top of the other in the same repo, instead I realized I was wrong *after finishing the first section*. **So I undertook a small project to clean things up and bring all lessons into one repository.**
  1. I made a new repository, I setup my remote `origin` to the remote branch I had already been pushing to.
  2. I created a subtree [^1], from the `main` branch of that `origin` remote.
  3. I then used `git push --force origin HEAD` to "rewrite" my commit history of `origin` (which had already been on GitHub), This forced a rewrite of my `origin` commit history with my local `main` branch history (where my `HEAD` was).


## NPM Basics
- I already knew the basics of Semantic Versioning, but I got a clearer understanding of the `MAJOR.MINOR.PATCH` meaning and how to control what updates your applications will allow with the `~` and `^` prefixes.


## Node and Express Basics

## MongoDB and Mongoose Basics



[^1]: https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202
