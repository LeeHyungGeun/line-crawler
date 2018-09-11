import crawler from './crawler';
import colors from 'colors';
const seed = 'https://career.linecorp.com/linecorp/career/list';

crawler(seed, /Front end/i)
.then((result) => {
    console.log(result);
});