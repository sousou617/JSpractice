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

// function printIntRev(n) {
// 	for (i=n; i>=1; i--) {
// 	console.log(i);
// 	}
// }
// printIntRev(10);



//  ----Question 3

function checkInput(x) {
	if (x == 5) {
		return "number";
	}
	if (x == 'hello') {
		return "string";
	}
	if (x == true) {
		return Boolean;
	}
	else {
		return("-1")
	}
}

console.log(checkInput(true))


function checkInput(x) {
	var boolVal = true;
	var stringVal = 'hello';
	var numVal = 5;
}



//  ----Question 4


// function simpleEvenAdding(num) {
// 	for (i=2; i<=num; i=i+2) {
// 		console.log(i)
// 	}
// }
// simpleEvenAdding(10)


//  ----Question 5

// function letterCapitalize(str) {
// 	var c = [];
// 	var sep = str.split(" ");
// 	for (i=0; i<sep.length; i++) {
// 		c.push(sep[i][0].toUpperCase()+sep[i].slice(1));
// 	}
// 	return c.join(" ");
// }

// console.log(letterCapitalize("hello world"))

// console.log(letterCapitalize('you cannot find the answer online'))


// //  ----Question 6

// function simpleReverse(str) {
// 	 var final = "";
// 	 for (var i=str.length -1; i>=0;i--) {
// 	 	final += str[i];
// 	 }
// 	 return final;
// }
// 	console.log(simpleReverse("Hello"));
// 	console.log(simpleReverse("I Love Code"));


// //  ---- Question 7

// 	var arr =[1,2,4,6,20,3]
// 	var max = arr[0];
// 	for (var i=0; i<arr.length;i++) {
// 		if (arr[i]>= max){
// 			max = arr[i];
// 		}
// 		console.log(max);
// 	}



//  ----Question 8




// function timeConvert(num) {
// var minutes = num % 60;
// var hours = (num - minutes) / 60;

// return hours +':'+ minutes;
// }

// console.log(timeConvert(90)); 





//  ----Question 9













//  ----Question 10



// function selfDividingNumbers(left, right)
// for (var i=left; i<=right; i++) {
// 	var dec = i;
// 	var res=0;

// }




// var selfDividingNumbers = function(left, right) {
//     var selfDiv = [], result;
    
//     for(left; left < right +1; left++) {
//         for(var i=0; i<left.toString().length; i++) {
//             if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
//                 result = true;
//             }
//             else {
//                 result = false;
//                 break;
//             }
                
//         }
//         if(result == true)
//             selfDiv.push(left);
//     }
    
//     return selfDiv;
// };








//  ----Question EC