var scanf = require('scanf');
var fs = require('fs');

async function string_edit_matrix(filename,I_D,C){
	return new Promise(function(resolve,reject){
		console.log(filename)
		var x_y = fs.readFileSync(filename).toString().split("\n");

		x = x_y[0]
		y = x_y[1]

		x = x.split("")
		y = y.split("")
		
		x = [null].concat(x)
		y = [null].concat(y)

		var x_len = x.length
		var y_len = y.length

		var matrix = []
		var matrix = []
		
		var row = []
		var column = []

		var i = 0;
		var j = 0;

		for( var x_tmp of x ){
			j = 0
			if( x_tmp === null ){
				matrix.push( [...Array(y_len).keys()] )
				i++;
				continue;
			}
			else{
				row = []
				for( var y_tmp of y){
					// row.push(i)
					if(y_tmp === null) { row.push(i) }
					else if ( x_tmp == y_tmp ) { row.push( matrix[i-1][j-1] ) }
					else if ( x_tmp != y_tmp ) { row.push(Math.min(row[j-1]+I_D,matrix[i-1][j]+I_D,matrix[i-1][j-1]+C)) }
					j++;
				}
			}
			i++;
		matrix.push(row)
		}
		console.log("String edit distance for Insert & Delete = " + String(I_D) + "and Change = " + String(C))
		console.log(matrix);
		console.log("Minimum string edit Distance")
		console.log(matrix[matrix.length-1][matrix[matrix.length-1].length-1]);





		var x_y = fs.readFileSync(filename).toString().split("\n");

		x = x_y[0]
		y = x_y[1]

		x = x.split("")
		y = y.split("")
		
		x = [null].concat(x)
		y = [null].concat(y)

		var x_len = x.length
		var y_len = y.length

		var matrix = []
		var matrix = []
		
		var row = []
		var column = []

		var i = 0;
		var j = 0;

		for( var x_tmp of x ){
			j = 0
			if( x_tmp === null ){
				matrix.push( [...Array(y_len).keys()] )
				i++;
				continue;
			}
			else{
				row = []
				for( var y_tmp of y){
					// row.push(i)
					if(y_tmp === null) { row.push(i) }
					else if ( x_tmp == y_tmp ) { row.push( matrix[i-1][j-1] ) }
					else if ( x_tmp != y_tmp ) { row.push( Math.min( row[j-1], matrix[i-1][j], matrix[i-1][j-1] ) + 1 ) }
					j++;
				}
			}
			i++;
		matrix.push(row)
		}
		console.log("Minimum string edit operations")
		console.log(matrix[matrix.length-1][matrix[matrix.length-1].length-1]);

		console.log("Decision Sequence")
		x_len--
		y_len--
		var tp = []

		while (x_len != 0 && y_len != 0 ){
			if( x[x_len] == y[y_len] ){
				x_len--;
				y_len--;
			}
			else if (matrix[x_len][y_len] == matrix[x_len-1][y_len-1]+1){
				tp.push("C")
				x_len--;
				y_len--;
			}
			else if (matrix[x_len][y_len] == matrix[x_len-1][y_len]+1){
				tp.push("I")
				x_len--;
			}
			else if (matrix[x_len][y_len] == matrix[x_len][y_len-1]+1){
				tp.push("D");
				y_len--;
			}
		}
		console.log(tp.reverse())
	});
}

console.log('Please enter Filename');
var filename = scanf('%s');
// var filename = "input/test1.txt"

console.log('Please value for Insert(I) and Delete(D)');
var I_D = 1
// var I_D = scanf('%d');
console.log('Please value for Insert(C)');
var C = 2
// var C = scanf('%d');


async function main(){
	await string_edit_matrix(filename,I_D,C);
}

main()