const perf = require('execution-time')();

var x = []
var count = 0
n = 0
unique = false
nodes = 1

function place(k,i){
    var tp = 0
    for(var j = 1; j <= k-1; j++){
        tp = j
        if( ( x[j] == i ) || ( Math.abs( x[j]-i) == Math.abs(j-k) ) ){
            return false;
        }
    }
    return i;
}

let nqueens = (k,n) => {
 nodes += 1
 for(var i = 1; i <= n; ++i)
 {
  if(place(k,i))
  {
    x[k]=i;
    if(k == n){
    }
    else
      nqueens(k+1,n);+0
  }
 }
};

///////////////////Question 2.2/////////////////////
function main(){
  ns = [4,5,6,7,8,9,10]
  time_graph_data = []
  node_estimation_data = []

  for( var temp_n of ns ){
    x = []
    count = 0
    n = temp_n
    unique = false
    q1 = n
    perf.start();
    nqueens(1,n)
    const results = perf.stop();
    time_graph_data.push([n,results.time] );
    total_nodes = 1
    for ( var i = 0; i <= (n-1) ; i++ ) {
      temp = 1
      for ( var j = 0; j < (i+1) ; j++ ) {
        temp = temp * (n-j)
      }
      total_nodes += temp
    }
    node_estimation_data.push([nodes,total_nodes])
  }

  console.log(time_graph_data)
  console.log(node_estimation_data)
}
main()