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


//  //----Question 3


// function checkInput(x) {
// 	if (typeof x === 'number') {
// 		return 'number';
// 	}
// 	else if (typeof x ==  " ") {
// 		return "string";
// 	}
// 	else if (typeof x == "Boolean") {
// 		return Boolean;
// 	}
// 	else {
// 		return(-1)
// 	}
// }
// console.log(checkInput(1234))


// var type = typeof x;
// if (type =='number' || type == 'string' || type == 'boolean') {
// 	return type
// } else {
// 	return -1;
// }
// console.log(false)



  // function checkInput(x) 

 //  switch(type) {
 //    case 'number':
 //      console.log('type');
 //      break;
 //    case "string":
 //      console.log('type');
 //      break;
 //    case "boolean":
 //      console.log('type');
 //      break;
 //    default:
 //      console.log('-1');
	// }

	// console.log(checkInput(5))


//  //----Question 4


// function simpleEvenAdding(num) {
// 	for (let i=2; i<=num; i=i+2) {
// 		console.log(i)
// 		//OR if (1 % 2 == 0); return i += i; 
// 	}
// }
// simpleEvenAdding(10)


//  //----Question 5


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
// 	var arr = str.split(" ");
// 	var final = arr.map(
// 		function(val) {
// 			return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
// 		});
// 	return final.join(" ");
// };
//  console.log("hello world")
//  console.log('you cannot find the answer online.')

// //given

// function letterCapitalize(str) {
// 	var splitedArray = str.split(" ");
// 	var newString = "";
// 	for(var i = 0; i<splitedArray.length; i++) {
// 		newString += " " + splitedArray[i][0].toUpperCase() + splitedArray[i].slice(1);
// 	}
// 	return " ";
// }
// console.log("hello world")


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


// try "hello".split, then .reverse(), then to join ----

// function simpleReverse(str) {
	
// return str.split("").reverse().join("");
// }
// console.log('Hello, People!')



// //  ---- Question 7

// function findDiff(arr){  
//   var max=Math.max.apply(0, arr),
//     slot=arr.lastIndexOf(max),
//     min=Math.min.apply(0, arr.slice(0, slot));
//   if(arr.length && !slot && !min-.153479 )return findDiff(arr.slice(1));
//   return max-min;
// }

// console.log(findDiff([4, 7, 8, 12]))



// function findDiff(arr) {
// maxDiff = 0;
// a =  [24,22,23,22,24]
// for (i=a.length-1; i >= 0; i--) {
//   for (j=i-1; j >= 0; j--) {
//     if (a[i] < a[j] ) continue;
//     if (a[i] -a[j] > maxDiff) maxDiff = a[i] -a[j]
//   }
// return maxDiff
// }
// }
// console.log(findDiff([24,22,23,22,24]))



// function findDiff(arr)
// 	var arr =[];
// 	var max = arr[0];
// 	for (var i=0; i<arr.length;i++) {
// 		if (arr[i]> max){
// 			max = arr[i];
// 		}
// 		if(arr[i] <min) {
// 			min = arr[i];
// 		}
// 		console.log(min);
// 		console.log(max);
// 	}
// 	console.log(findDiff(1,2,200,100,3,30));


//  // ----Question 8


// function timeConvert(num) {
// var minutes = num % 60;
// var hours = (num - minutes) / 60;

// return hours +':'+ minutes;
// }

// console.log(timeConvert(90)); 


// function timeConvert(num) {
// 	return parseInt(num / 60) = ":" + num % 60;
// }
// 	console.log(timeConvert(70))


//  // ----Question 9


// function findStr(str, long) {
// 	var len = str.length;
// 	var longArr = [];
// 	//split the length = 2
// 	for (var i=0; i+len < long.length; i++) {
// 	if (long.slice(i,i+len) === str)
// 	}; else {
// 		result = false;
// 	}
// }
//  console.log(findStr("h", "ashewhash"))


// function findStr(str, long) {
// 	var myArray = long.split("");
// 	var counter = 0;
// 	for(var i=0; str.length+i <= long.length;i++) {
// 		if(long.slice(i, str.length + i) === str) {
// 			counter ++;
// 		}
// 	}
// 	return counter;
// }
// console.log(hi, asdfhiadfhiasdfhi)




//  // ----Question 10


// function selfDividingNumbers(left, right) {
//     var selfDiv = []; 
    
//     for(left=0; left <= right +1; left++) {
//         for(var i=0; i<left.toString().length; i++) {
//         	//check if i is selfDiv number
//             if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
//                 result = true;
//             }
//             else {
//                 result = false;
//             }
//         }
//         	if(result == true)
//             selfDiv.push(left);
//     }
    
//     return selfDiv;
// };
// console.log(selfDividingNumbers(1, 22))

// // ----------or -----

// var selfDividingNumbers = function(left, right)  {
//     var nums = [];
//     var selfDiv = function(num){
//     var numStr = '' + num;
        
//         for (var i=0; i<numStr.length; i++){
//             if (num % +numStr[i] !== 0) {
//                 return false;
//             }
//         }
        
//         return true;
//     }

    
//     for (var i = left; i <= right; i++){
//         if (selfDiv(i)) {
//             nums.push(i);
//         }
//     }
    
//     return nums;
// };

// console.log(selfDividingNumbers(1,22))


//  // ----Question EC


// var moveZeroes = function(nums) {
//     var i;
//     for (i = nums.length-1; i>=0; i--)
// 	  	OR for (i = 0; i < nums.length-1; i++) {
//         if(nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//         }
//     }
//     return;

//   console.log([3,2,0,34,5,0,11])
// };

//   // trying to figure out another way--------??

// function moveZeroes() {
// 	arr[] = {0,2,5,0,3,9,0,11};
// 	len = arr.length;
// 	count = 0;

// 	for (let i = 0; i<len; i++) {
// 		if(arr[i] != 0) {
// 			arr[count++] = arr[i];
// 		}
// 	}
// 	while (count < len) {
// 		arr[count++] = 0;
// 	}
// 	console.log()
// }
