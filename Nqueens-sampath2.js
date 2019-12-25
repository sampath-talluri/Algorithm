const perf = require('execution-time')();

var x = []
var count = 0
n = 8
unique = false
matrix = []

function place(k,i){
    for(var j = 1; j <= k-1; j++){
        if( ( x[j] == i ) || ( Math.abs( x[j]-i) == Math.abs(j-k) ) ){
            return false;
        }
    }
    return true;
}

let nqueens = (k,n) => {
 for(var i = 1; i <= n; ++i)
 {
  if(place(k,i))
  {
    x[k]=i;
    if(k == n){
        // write()
        // console.log(matrix, x.slice(1))
        if( !validate( matrix, x.slice(1) ) ){
          matrix.push(x.slice(1))
        }
      }
    else
      nqueens(k+1,n);+0
  }
 }
};

function write(){
  var counter = 0
  for( var temp_x of matrix ){
    console.log("----------------------")
    console.log("Solutions ",counter += 1)
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
}

function validate(matrix,x){
  var a1 = x
  var n = a1.length
  var a2 = []
  for( var t of a1 ){
    a2.push((n-t)+1)
  }

  for( var temp_x of matrix ){
    var t0_q = false
    var t1_q = false
    var t2_q = false
    var t3_q = false

    // for( var i=0 ; i < n; i++ ){
    //   if(temp_x[i] != a1[i]){
    //     break
    //   }
    //   t0_q = true
    // } 
    for( var i=0 ; i < n; i++ ){
      if(temp_x[i] != a1.reverse()[i]){
        break
      }
      t1_q = true
    }
    // for( var i=0 ; i < n; i++ ){
    //   if(temp_x[i] != a2[i]){
    //     break
    //   }
    //   t2_q = true
    // }
    // for( var i=0 ; i < n; i++ ){
    //   if(temp_x[i] != a2.reverse()[i]){
    //     break
    //   }
    //   t3_q = true
    // }
    // if (t0_q || t1_q || t2_q || t3_q){
    //   break
    // }
    if (t1_q ){
      break
    }
  }
  return t1_q//(t0_q || t1_q || t2_q || t3_q)
}

ns = [4,5,6,7,8]
for( var temp_n of ns ){
  x = []
  count = 0
  n = temp_n
  unique = false
  matrix = []
  q1 = n
  nqueens(1,q1)
  console.log("******************************************")
  console.log("Total Unique Solutions are for n = ",n)
  console.log(matrix.length)
  write()
}