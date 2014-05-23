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
  // your code here
  //
  // if match, push on results
  // if childNodes
  //    foreach cn getElementsByClassName
  var results = [];
  var args = [].slice.call(arguments);
  var elem = args.length === 2 ? [args[1]] : window.document.body;
  var cList = [].slice.call(elem.classList).toString();
  console.log(cList);
  if (cList.indexOf(className) !== -1) {
    results.push(elem);
  }
  // var elemChildren = [].slice.call(elem.childNodes);
  var elemChildren = elem.childNodes;

  for (var i=0; i < elemChildren.length; i++) {
    eChild = elemChildren[i];
    // console.log("The fracking elem");

    // if (elemChildren) {
    //   elemChildren.forEach(function() {
    //     getElementsByClassName(className);
    //   });
    // }
  };
  console.log(results);
  return results;
};
