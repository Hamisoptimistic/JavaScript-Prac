// func expression

let add = function () {
  console.log (2+3);
}
add ();


/// Callback Function

function runTwice (fun) {
  fun();
  console.log(fun);
}


runTwice (add);