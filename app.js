import crawler from './crawler';
const seed = 'https://career.linecorp.com/linecorp/career/list';

crawler(seed, /Front End/i)
.then(({ crawled, report }) => {
    const visitedURLs = [...crawled.keys()].map((url) => url);
    const searchedURLs = [...report.keys()].map((url) => url);
    return {
        visitedURLCount: visitedURLs.length, // how many URLs crawled
        searchedURLCount: searchedURLs.length, // how many URLs contain `Front End` keyword
        searchedURLs // URLs contain `Front End` keyword
    };
})
.then((result) => console.log(result));