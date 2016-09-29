

// const logMsg = (msg: string): void => {
//     console.log(msg)
//     // return msg
// }

import {logMsg, aNumber, shape} from './logMsg'

logMsg('xyz');


// const circle = require('./circle.js');
import * as circle from './circle'
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

// var _ = require('lodash')

import * as _ from 'lodash';
const result = _.without([1,2,1,1],1)
console.log(`the result is ${result}`);



