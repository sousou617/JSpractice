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

// function checkInput(x) {
// 	if (x == 5) {
// 		return "number";
// 	}
// 	if (x == 'hello') {
// 		return "string";
// 	}
// 	if (x == true) {
// 		return Boolean;
// 	}
// 	else {
// 		return("-1")
// 	}
// }

// console.log(checkInput(true))



// function checkInput(x) {
// 	var boolVal = true;
// 	var stringVal = 'hello';
// 	var numVal = 5;
// }



//  ----Question 4


// function simpleEvenAdding(num) {
// 	for (let i=2; i<=num; i=i+2) {
// 		console.log(i)
// 		// or return i += i;
// 	}
// }
// simpleEvenAdding(10)


//  ----Question 5

// function letterCapitalize(str) {
// 	var cap = [];
// 	var sep = str.split(" ");
// 	for (i=0; i<sep.length; i++) {
// 		cap.push(sep[i][0].toUpperCase()+sep[i].slice(1));
// 	}
// 	return cap.join(" ");
// }

// console.log(letterCapitalize("hello world"));

// console.log(letterCapitalize('you cannot find the answer online'));

// //or

// function letterCapitalize(str) {
// 	var strArray - str.split(" ")
// 	return strArray
// }

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


// try "hello".split, then .reverse(), then to join

// //  ---- Question 7

// function findDiff(arr)
// 	var arr =[1,2,4,6,20,3];
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

  // or return parseInt(num / 60)



//  ----Question 9


// function findStr() {
// 	var str = "hi";
// 	var long = "asdfhijklahisdfjhikl";
// 	var editStr = (long.slice(4,6))

// console.log(findStr);
// }

// function findStr( str, long) {

// 	let len = str.length;
// 	let longArr = [];
// 	//split the length = 2
// 	for (let i=0; i<long.length; i++) {
// 		console.log(long.slice(i,i+len))
// 	}
// }
//  findStr("h", "hello")









//  ----Question 10



// function selfDividingNumbers(left, right)
// for (var i=left; i<=right; i++) {
// 	var dec = i;
// 	var res=0;

// }




function selfDividingNumbers(left, right) {
    var selfDiv = [], result;
    
    for(left; left <= right +1; left++) {
        for(var i=0; i<left.toString().length; i++) {
        	//check if i is selfDiv number
            if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
                result = true;
            }
            else {
                result = false;
                break;
            }
        }
        if(result == true)
            selfDiv.push(left);
    }
    
    return selfDiv;
};
console.log(selfDividingNumbers(1, 22))







//  ----Question EC