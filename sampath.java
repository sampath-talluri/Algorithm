var x = []
var count = 0

async function place(k,i){
    for(j = 1; j <= k-1; j++){
        if( (x[j]==i) || ( Math.abs(x[j]-i) == Math.abs(j-k) ) ){
            return false;
        }
    }
    return true;
}

async function nqueens(k,n){
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    count += 1
    for(i=1; i <= n; i++){
        console.log(await place(k,i))
        if( await place(k,i) ){
            x[k] = i;
            if(k == n){
                await write(x)
            }
            else{
                return nqueens(k+1,n);
            }
        }
    }
}

async function write(x){
    console.log(x)
}

async function main(){
    nqueens(1,4)
    console.log(count)
}

main();