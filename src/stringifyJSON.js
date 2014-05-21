// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var objType = typeof obj;
  console.log(objType);
  console.log(obj);
  if (objType === 'number' || objType === 'boolean' || obj === null) {
    return String(obj);
  } else if (objType === 'string' ) {
    return String('"' + obj + '"');
  } else if (Array.isArray(obj)) {
    // Pass
  }
};
