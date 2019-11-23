var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};


function fureval(code) {
  var cmd = code.split(' ').slice(0,1) 
  if (cmd == "owo") {
    var owoText = code.replace("owo ","");
    console.log(owoText)
  }
  if (cmd == "uwu") {
    var uwuArgs = code.replace("uwu ","");
    var arg1 = uwuArgs.split(' ').slice(0,1)
    var arg2 = var arg2 = uwuArgs.split(' ').slice(1,2)
    var lastuwuoutput = uwuArgs.split(' ').slice(2);
    if (arraysMatch(arg1,arg2)) {
      print(lastuwuoutput)
    }
  }
}
