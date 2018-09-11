import request from 'request';
import cheerio from 'cheerio';
import { URL } from 'url';
import colors from 'colors';

// 1. validation: http, https, same origin
// 2. check visited
// 3. request
// 4. get body 
// 5. add href
// 6. verify all visited

function crawler(seed, keyword) {
    return new Promise((resolve) => {
        const crawled = new Map();
        const report = new Map();
        function _crawler(url) {
            // 2. check has visited
            if (crawled.get(url) !== undefined) {
                return false;
            }

            // 3. note started crawling an url
            crawled.set(url, false);
            
            // 4. request
            return request(url, (error, response, body = '') => {
                if (keyword && convertRegexp(keyword).test(body)) {
                    report.set(url, true);
                    console.log(url.yellow);
                }

                // 5. get a tags in a crawled body
                const $ = cheerio.load(body);
                const $body = $('body');
                const $a = $body.find('a');
                
                // 6. recursive call new hrefs
                $a && $a.length && $a.map(async (index, element) => {
                    const url = validationUrl($(element).attr('href'), seed);
                    return url && _crawler(url);
                });

                // 7. note finished crawling an url
                crawled.set(url, true);
                console.log(url.green);

                // 8. verify all visited
                if (isVisitedAll(crawled)) {
                    console.log('Finished'.blue);
                    resolve({
                        crawled,
                        report
                    });
                }
            });
        }
        
        // 1. start crawler
        return _crawler(seed);
    });
}

// validate http and https protocol, and same origin
function validationUrl(url, seed) {
    const { href, origin, protocol } = new URL(url, seed);
    if ((protocol === 'http:' || protocol === 'https:') && new URL(seed).origin === origin) {
        return href;
    } else {
        return false;
    }
}

// validate whether there is any false in a Map, or not.
function isVisitedAll(map) {
    return [...map.values()].filter(i => i === false).length < 1;
}

// convert str to RegExp, if RegExp, return it
function convertRegexp(str) {
    return (str instanceof RegExp) ? str : new RegExp(str);
}

export default crawler;