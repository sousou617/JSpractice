// //  ----Question 1
// function printInt(n) {
//   var total = 0;
//     for(var i=1;i<=n; i++){
//       total = total + i;
//     }
//     return total;
// }
// console.log(printInt(10))



// function printInt(n) {
// 	for (var x=1; x<=n; x++) {
// 		console.log(x);
// 	}
// }
//  console.log(printInt(10))



// function printInt(n){
//  var i = n;

//  while(i<=n){
//  	console.log(i);
//  	i++;
//  }
// }
// printInt(10)

// // ----Questions 2

// let i;  
// for (i = 10; i >= 1; i--) {
//     console.log(i);
// }


//  ----Question 5

function letterCapitalize(str) {
	var c = [];
	var sep = str.split(" ");
	for (i=0; i<sep.length; i++) {
		c.push(sep[i][0].toUpperCase()+sep[i].slice(1));
	}
	return c.join(" ");
}

console.log(letterCapitalize("hello world"))

console.log(letterCapitalize('you cannot find the answer online'))


//  ----Question 6

function simpleReverse(str) {
	 var final = "";
	 for (var i=str.length -1; i>=0;i--) {
	 	final += str[i];
	 }
	 return final;
}
	console.log(simpleReverse("Hello"));
	console.log(simpleReverse("I Love Code"));


//  ---- Question 7

	var arr =[1,2,4,6,20,3]
	var max = arr[0];
	for (var i=0; i<arr.length;i++) {
		if (arr[i]>= max){
			max = arr[i];
		}
		console.log(max);
	}
a