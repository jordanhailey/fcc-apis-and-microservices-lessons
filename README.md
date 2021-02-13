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
  2. I created a subtree [^1] , from the `main` branch of that `origin` remote.
  3. I then used `git push --force origin HEAD` to "rewrite" my commit history of `origin` (which had already been on GitHub), This forced a rewrite of my `origin` commit history with my local `main` branch history (where my `HEAD` was).


## NPM Basics
> [src](https://www.freecodecamp.org/learn/apis-and-microservices#managing-packages-with-npm)
>
> [see directory](./npm-basics)

- I already knew the basics of Semantic Versioning, but I got a clearer understanding of the `MAJOR.MINOR.PATCH` meaning and how to control what updates your applications will allow with the `~` and `^` prefixes.


## Node and Express Basics
> [src](https://www.freecodecamp.org/learn/apis-and-microservices#basic-node-and-express)
>
> [see directory](./node-express-basics)

- I learned about the global variable in Node `__dirname`  which gives the absolute path of the directory that contains the currently executing file (I used to think `./` was just as reliable but I was mistaken [^2]).
- I have a better understanding of how to use express to handle routing and serve content.
	- I learned that when watching for any request method with a path that has a colon `:` character prefixed (e.g. `/:somepath/foo`) that path becomes a variable tied to the request object (i.e. `req.params.somepath`)
	- I learned the basics about how to build and chain middleware functions, and how to pass information along in the request object until a final response call is made.


## MongoDB and Mongoose Basics
> [src](https://www.freecodecamp.org/learn/apis-and-microservices#mongodb-and-mongoose)
>
> [see directory](./mongo-mongoose)


[^1]: https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202
[^2]: https://www.geeksforgeeks.org/difference-between-__dirname-and-in-node-js/
