
const path = require('path')
console.log(path.sep);
const newtxt = path.join('/content' , 'subfolder', 'test.txt');
console.log(newtxt);
const base = path.basename(newtxt)

console.log(base);
 const Absolute = path.relative(__dirname, '/content' , 'subfolder', 'test.txt' );
console.log(Absolute);

