// function myfunction1(){
//     var arr = ['d','e','f','a','i'];
//     var small =arr[0];
//     for(i = 1 ; i < arr.length; i++){
//         if(arr[i] < small){
//             console.log(arr[i]);
//                 // small = arr[i];
//             }
//     }
//     console.log(small);

   
// }
// myfunction1();
// if(isNaN(arr[i]))
// {
//     if(arr[i] < smallCHaracter){
//         smallCHaracter = arr[i]
//     }
// }
// }
// var tempArr = []
// 








var arr=['krishna','85785','ashok','65875','javid','95496'];
var int= [];
var strng = [];

  for(i=0;i<arr.length;i++){
        if(parseInt(arr[i])){
            int.push(arr[i]);
        }else{
            strng.push(arr[i]);
        }
    
 }
 // to print the interger
 console.log(int);
// to display the smallest integer
var Number=[];
 function myfunction3(){
    var Small = int[0];
    for(j=1 ;j < int.length  ;j++){
        if(int[j] < Small){
            Small=int[j];
        }
    }
    // console.log("Smalllest Number: "+Small);
    Number.push(Small);
    console.log(Number);
}
myfunction3();


// to print the strings
console.log(strng);

// to display the smaalest string
var lest =[];
function myfunction4(){
    var SMALL =strng[0];
   
    for(k=1;k < strng.length ; k++){
        if(strng[k] < SMALL){
            SMALL = strng[k];
        }
    }
    //  console.log("Smallest strng  is :"+ SMALL);
     lest.push(SMALL);
     console.log(lest);
     
}
myfunction4();





// function myfunction5(){
    // var empty=[];
    // empty.push(lest);
    // empty.push(Number);
    // console.log(empty);
    
// }
// myfunction5();
var total=Number.concat(lest);
    console.log(total);  
