let n = 10;

function counterprob() {
  i=0;
  return function () {
    console.log (n+i);
    i = i+1;
  }
  
};
result = counterprob();
result ();
result ();

