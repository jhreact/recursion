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
      var elemType = typeof obj[prop];
      if (elemType !== 'object') {
        result.push(stringifyJSON(obj[prop]));
      } else {
        // if (Array.isArray(obj)) {
        //   result.push(stringifyJSON(obj[prop]));
        // } else {
        //   result.push('"' + String(prop) + '": ' + stringifyJSON(obj[prop]));
        // }
        result.push(obj[prop]);
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
