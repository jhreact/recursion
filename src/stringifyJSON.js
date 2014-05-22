// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var objType = typeof obj;
  if (objType === 'number' || objType === 'boolean' || obj === null) {
    return String(obj);
  } else if (objType === 'string' ) {
    return String('"' + obj + '"');
  } else if (objType === 'object') {
    var result = [];
    for (var prop in obj) {
      if (Array.isArray(obj)) {
        result.push(stringifyJSON(obj[prop]));
      } else {
        var hashStr = stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
        // console.log(hashStr);
        result.push(hashStr);
      }
    }
    var resConverted;
    if (result) {
      resConverted = result.join(',');
    }
    console.log(resConverted);
    if (Array.isArray(obj)) {
      return '[' + resConverted + ']';
    } else {
      return '{' + resConverted + '}';
    }
    // Pass
    // console.log(objType);
    // console.log(obj);
  }
};
