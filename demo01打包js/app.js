// es module
import sum from './sum';

// commonjs
const miuns = require('./minus')


console.log('sum(1,2) = ', sum(1, 2))
console.log('miuns(1,2) = ', miuns(1, 2))

require(['./multi'], function (multi) {
    console.log('multi(1,2)=', multi(1, 2))
})
require(['./multi2'], function (multi) {
    console.log('multi(1,2)=', multi(1, 2))
})