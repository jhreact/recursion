// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// use:
// document.body : contains document content
// element.childNodes : collection of child nodes for given element
// element.classList : class attribute as a list of tokens
var getElementsByClassName = function(className){
  var results = [];
  var args = [].slice.call(arguments);
  var elem = args.length === 2 ? args[1] : window.document.body;
  if (elem.classList) {
    var cList = [].slice.call(elem.classList).toString();
    if (cList.indexOf(className) !== -1) {
      results.push(elem);
    }
  }
  var elemChildren = elem.childNodes;
  for (var i=0; i < elemChildren.length; i++) {
    var eChild = elemChildren[i];
    childMatches = getElementsByClassName(className, eChild);
    childMatches.forEach(function(val, idx, arr) {
      results.push(val);
    });
  };
  //console.log(results);
  return results;
};
