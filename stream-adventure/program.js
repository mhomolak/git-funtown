// exercise 2
// var fs = require('fs');
// fs.createReadStream(process.argv[2]).pipe(process.stdout);


// exercise 3
// process.stdin.pipe(process.stdout);

// exercise 4

// var through = require('through2');
//
// var write = function(chunk, enc, imDone) {
//   this.push(chunk.toString().toUpperCase());
//   imDone();
// };
//
// var transformer = through(write);
//
// process.stdin
//     .pipe(transformer)
//     .pipe(process.stdout);

// exercise 5

// var through = require('through2');
// var split = require('split');
//
// var lineNum = 0;
// var stream = through(function (buf, _, next) {
//   var line = buf.toString();
//   this.push(lineNum % 2 === 0
//       ? line.toLowerCase() + '\n'
//       : line.toUpperCase() + '\n'
//     );
//     lineNum ++;
//     next();
// });
//
// process.stdin
//     .pipe(split())
//     .pipe(stream)
//     .pipe(process.stdout);

//exercise 6

var concat = require('concat-stream');

process.stdin.pipe(concat(function (source) {
  var cs = source.toString().split('').reverse().join('');
  console.log(cs);
}));
