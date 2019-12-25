const perf = require('execution-time')();

var x = []
var count = 0
n = 0
unique = false

function place(k,i){
    var tp = 0
    for(var j = 1; j <= k-1; j++){
        tp = j
        if( ( x[j] == i ) || ( Math.abs( x[j]-i) == Math.abs(j-k) ) ){
            return false;
        }
    }
    console.log("Next position of queen ",tp+1,i)
    return i;
}

let nqueens = (k,n) => {
 for(var i = 1; i <= n; ++i)
 {
  if(place(k,i))
  {
    x[k]=i;
    if(k == n)
      write();
    else
      nqueens(k+1,n);+0
  }
 }
};

function write(){
    console.log("----------------------")
    var i = 0;
    for( var x_tmp of x ){
        var line = ""
        if(i != 0){
            for( j = 1 ; j <= n ; ++j){
              if( x[i] == j ){
                line += "Q";
              }
              else{
                line += "."
              }
            }
            console.log(line)
        }
        i += 1
    }
    console.log("\n")
}

////////////////////Question 1////////////////////
q1 = 4
n = q1

///////////////////Question 2.1/////////////////////
// q21 = [4,5,6,7]

// for( var t of q21 ){
//     n = t
//     perf.start();
//     nqueens(1,n)
//     const results = perf.stop();
//     console.log(results.time);
// }

// ///////////////////Question 2.2/////////////////////
// q22 = [4,5,6,7,8,9,10]
console.log("Predicted positions are given below For n = ",n)
nqueens(1,q1)