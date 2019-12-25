total_nodes = 1
for ( var i = 0; i <= (n-1) ; i++ ) {
  temp = 1
  for ( var j = 0; j < (i+1) ; j++ ) {
    temp = temp * (n-j)
  }
  total_nodes += temp
}

console.log(e)