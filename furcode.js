function fureval(code) {
  var cmd = code.split(' ').slice(0,1) 
  if (cmd == "owo") {
    var owoText = code.replace("owo ","");
    console.log(owoText)
  }
  if (cmd == "uwu") {
    var uwuArgs = code.replace("uwu ","");
    var arg1 = uwuArgs.split(" ").slice(0,1)
    var arg2 = uwuArgs.split(" ").slice(1,2)
    var lastuwuoutput = uwuArgs.split(" ").slice(2);
    if (arg1.toString() == arg2.toString()) {
      console.log(lastuwuoutput.toString())
    }
  }
}
