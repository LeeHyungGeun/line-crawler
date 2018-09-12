# Introduce
This is a crawling library to search keyword in a specific domain. 
For example, if you want to know how many page contains `Front End` keyword in `https://career.linecorp.com/linecorp/career/list/`, you can use it like below.
``` javascript
// ./app.js
import crawler from './crawler'

crawler('https://career.linecorp.com/linecorp/career/list/', 'Front End')
.then((result) => console.log(result));
```

# How to see the demo
## Install & RUN
``` bash
> npm install
> npm run start
```
[NOTE]: please keep looking on console to check result

# Source Codes
- `./crawler.js`: main source code to crawl
- `./app.js`: a demo to use crawler library

# Why I want to show this app
1. This library shows how much I have knowledge of Networking, Web Compiler how works and Headless Request to crawling
2. I love developing a crawling library since it can be used `Recursive Function` (./crawler.js)
   Also, I am using a few of JavaScript skills in this library.
   - Recursive Function
    : Call the same function before end condition
   - First Class Citizen(Function returns a Function) & Encapsulation
    : Since JavaScript is a first class citizen can be return a function, it can be encapsulate private data 
   - Promise
    : JavaScript only has single thread and it works asynchronously so we need a way it works synchronously and Time scheduling so we use Promise, or Async/Await 
