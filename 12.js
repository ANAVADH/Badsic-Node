const _ = require('lodash')

const Arr = [1,[2,[3,[4]]]]
const newArr = _.flattenDeep(Arr)
console.log(newArr);