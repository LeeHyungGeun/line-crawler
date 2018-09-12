# Introduce
This is a crawling library to search keyword in a specific domain. 
For example, if you want to search how many LINE Corp career pages contains `Front End` keyword in `https://career.linecorp.com/linecorp/career/list/`, you can use it like below.
``` javascript
// ./app.js
import crawler from './crawler'

crawler('https://career.linecorp.com/linecorp/career/list/', 'Front End')
.then((result) => console.log(result));
```

# Demo
## Install & RUN
``` bash
> npm install
> npm run start
```
[NOTE]: Please keep looking on console to check result

# Source Codes
- `./crawler.js`: main source code to crawl
- `./app.js`: a demo to use crawler library

# Why I want to show this app
0. First of all, when I was working in LINE WORKS (NAVER CHINA), LINE WORKS had changed our brand name as `LINE WORKS` from `WORKS MOBILE`. In this time, I needed to change all text of `WORKS MOBILE` as new one in my services: Brand Page(line.worksmobile.com), HELP CENTER(help.worksmobile.com) and Notice (jp1-notice.worksmobile.com) so I developed this library to change. In addition, there had many cases to verify some texts are still in our serivces, and that case I also have used this library.
1. This library shows how much I have knowledge of Networking, Web Compiler how works and Headless Request to crawling
2. I love developing a crawling library since it can be used `Recursive Function` (./crawler.js)
   Also, I am using a few of JavaScript skills in this library.
   - Recursive Function
    : Call the same function before end condition
   - First Class Citizen(Function returns a Function) & Encapsulation
    : Since JavaScript is a first class citizen can be passed a function as a parameter and return a function, using it it can be encapsulated private variables and connect by closure
   - Promise
    : JavaScript only has single thread and it basically works asynchronously, but in some cases, for example: http request, we need to work synchronously so that time we can use Promise to time scheduling.


# In addition
This `crawler.js` library is also published on npm as `domain-crawler`
: https://www.npmjs.com/package/domain-crawler
