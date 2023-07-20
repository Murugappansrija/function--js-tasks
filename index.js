///Print odd numbers in an array


///Anonymous Function

let oddNum = function(num){
    for (let i = 0;i<num.length; i++){
        if(num[i]%2!=0){
            console.log(num[i])
            }
    }  
       
}
var arr1 = [1,2,3,4,5,6,7,8,9,10]
oddNum(arr1);


///IIFE-function

(function(num) {
    for (let i = 0;i< num.length; i++){
        if(num[i]%2!=0){
            console.log(num[i])
        }
    }
   
})([1,2,3,4,5,6,7,8,9,10]);

/// Arrow function

let oddNumArrow = (num) => {
    for (let i = 0;i< num.length; i++){
        if(num[i]%2!=0){
            console.log(num[i])
        }
    }
  
}
var arr2 = [1,2,3,4,5,6,7,8,9,10]
oddNumArrow(arr2);

//Palindrome 

///Anonymous Function

function isPalindrom(str){
    return str === str.split("").reverse().join("");
 }
 
 let getPalindrom = function(arr){
     let palindrom =[];
     for(var i=0;i<arr.length;i++){
         if(isPalindrom(arr[i])){
             palindrom.push(arr[i]);
         }
     }
     return palindrom;
 }
 let strArr = ["npm", "non", "121","hello","civic","madam"]
 let result = getPalindrom(strArr);
 console.log(result);

 //Arrow function

 let isPalindrom1= (str)=>{
    return str === str.split("").reverse().join("");
 }
 
 let getPalindrom1 = (arr)=>{
     let palindrom1 =[];
     for(var i=0;i<arr.length;i++){
         if(isPalindrom1(arr[i])){
             palindrom1.push(arr[i]);
         }
     }
     return palindrom1;
 }
 let strArr1 = ["npm", "non", "121","hello","civic","madam"]
 let result1 = getPalindrom1(strArr1);
 console.log(result1);

 //IIFE
 (function(palind){
    var result="";
    var ans="";
    for(i=0;i<palind.length;i++)
    {
        result+=palind[i];
        var count=0
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===result.length)
        {
            ans+=result+" "
        }
        result="";
    }
    console.log(ans);
 
}) (["mam", 121 , "south", "adda", "mom", 567765, "madam"]);



 ////prime number

//Anonymous Function
 function getPrime(num) {
    let primes = [];
    for (let i = 2; i <= num; i++ ){
        let isPrime =true;
        for(let j= 2 ; j < i ; j++){
            if(i%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
          primes.push(i)
        }
    }
 console.log(primes);
}
let n = 15
getPrime(n);

//// arrow function

let getPrime2 = (num) =>{
    let primes = [];
    for (let i = 2; i <=num; i++ ){
        let isPrime =true;
        for(let j= 2 ; j < i ; j++){
            if(i%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
          primes.push(i)
        }
    }
 console.log(primes);
}

getPrime2(25);

///IIFE 


(function(num){
    let primes = [];
    for (let i = 2; i <=num; i++ ){
        let isPrime =true;
        for(let j= 2 ; j < i ; j++){
            if(i%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
          primes.push(i)
        }
    }
 console.log(primes);
})(120);


///Remove Duplicates


///Anonymous Function

function findDuplicate(strArr) {
    let checkStr = [...new Set(strArr)];
    console.log(checkStr);
}
let arr = ['B', 'A', 'C', 'C', 'B','E','F','E'];
findDuplicate(arr);

//IIFE - Function 

(function(strArr){
    let checkStr = [...new Set(strArr)];
    console.log(checkStr);
})([1,2,3,4,51,2,3,4])

//arrow function

let findDuplicate2= (strArr2)=> {
    let checkStr2 = [...new Set(strArr2)];
    console.log(checkStr2);
}
let arr2 = ['B', 'A', 'C', 'C', 'B','L','A','E'];
findDuplicate2(arr2);


///sum of the value

///Anonymous Function

let sum1 =function(numArr1) {
    for(var i =0 ; i<numArr1.length; i++){
        result8 += numArr1[i];
    }
    console.log("sum of arry value : "+ result8);
}
let result8= 0;
let arr1 =[1,2,3,5,6]
sum1(arr1);

///IIFE  function

(function(numArr) {
    let result = 0
    for(var i =0 ; i<numArr.length; i++){

        result += numArr[i];
    }
    console.log("sum of odd: "+ result);
})([1,3,5]);

//Arrow function

let sum2 = (numArr2) =>{
    for(var i =0 ; i<numArr2.length; i++){
        res += numArr2[i];
    }
    console.log("sum of given no: "+ res);
}
let res = 0;
let arr2 = [3,65,100,1000,50,7]
sum2(arr2)

//to capitalize 

//Anonymous Function 

let titleCap = function(string) {
    let s = string.split(" ");
    let result = [];
    for(var i=0;i<s.length;i++){
        let word = s[i];
        result.push( word[0].toUpperCase()+ word.slice(1,word.length))
    }
   console.log(result.join(" "));
   
}
titleCap("srija murugappan");

//IIFE
(function (string){
    let s = string.split(" ");
    let result = [];
    for(var i=0;i<s.length;i++){
        let word = s[i];
        result.push( word[0].toUpperCase()+ word.slice(1,word.length))
    }
   console.log(result.join(" "));
   
})("nagaraj manjule is one of my fav director");


//Arrow Function

let str =(string) => {
    let s = string.split(" ");
    let result = [];
    for(var i=0;i<s.length;i++){
        let word = s[i];
        result.push( word[0].toUpperCase()+ word.slice(1,word.length))
    }
   console.log(result.join(" "));
}

str("all is well!...")


//rotate k times

// Anonymous Function 
let rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5,6,7,8,9],2))

//IIFT
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5,6,7,8,9],4);

///Arrow function
let rotates=(a,k)=>{
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotates([1,2,3,4,5,6,7,8,9],1))
