# PC shop 

## Description 
### Currently Scope: 
Currently my application has a CRUD of pc-parts and unit tests for each controller and service. 

### Why the techs
I used nestjs with typeORM and mysql because it's a framework and db that've been work with for almost a year now and fell confortable using it on side projects, specially doing the ones where the main focus isn't the functionalities, but other parts, such as tests and ci/cd, which is the case for this one.



### The challenges 
The bigger challenges inside this project were first to understanding the logic and 
use of jest by nestjs and how to implement it for testing my application and its scope. Second were the ci/cd part, doing test in nodejs with github actions wasn't 
that hard but the delivery part was quite the opposite, it was very challenging searching how to deploy using github actions, specially because I didn't find the 
documentation very clear and ended up searching for specifics suchs as how to deploy to heroku using github actions, and that's how I learned a bit about deploying with github actions using the heroku:container commands.

---
## How to install and run 
### Using npm 
1. Clone this repository 
2. Go to the project file
3. Run `npm i`
4. Run `npm start`
---
### Using docker 
1. Clone this repository 