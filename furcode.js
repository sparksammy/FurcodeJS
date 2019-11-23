
function fureval(code) {
  if (code.split(' ').slice(0,1) == "owo") {
    var owoText = code.replace("owo ","")
    print(owoText);
  }
  if (code.split(' ').slice(0,1) == "uwu") {
    var uwuArgs = code.replace("uwu ","")
    var arg1 = uwuArgs.split(' ').slice(0,1)
    var arg2 = uwuArgs.split(' ').slice(1,2)
    var lastuwuoutput = uwuArgs.split(' ').slice(2,3)
    if (arg1 == arg2) {
      print(lastuwuoutput);
    }
  }
}
