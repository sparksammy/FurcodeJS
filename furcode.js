//credit to clarmond begin

function fureval(code) {
  if (code.includes("owo")) {
    var owoText = code.replace("owo ","");
    console.log(owoText)
  }
  if (code.includes("uwu")) {
    var uwuArgs = code.replace("uwu ","");
    var arg1 = uwuArgs.split(' ').slice(0,1)
    var arg2 = uwuArgs.split(' ').slice(1,2)
    var lastuwuoutput = uwuArgs.split(' ').slice(2,3)
    if (arg1 == arg2) {
      console.log(arg3)
    }
  }
}
