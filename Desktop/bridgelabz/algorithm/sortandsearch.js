
var utility=require('../Utility/utility');

var arrnum=[5,4,3,2,1]//utility.readarray();
var arrstr=["Z","Y","X"]//utility.readarray();


//bubblesort for numbers
var first1=utility.currenttime();
var arr1=utility.bubblesort(arrnum);
console.log(arr1);
var second1=utility.currenttime();
var elapsed1=utility.elapsedtime(first1,second1);
console.log(elapsed1);


//bubblesort for strings
var first2=utility.currenttime();
var arr2=utility.bubblesortstring(arrstr);
console.log(arr2);
var second2=utility.currenttime();
var elapsed2=utility.elapsedtime(first2,second2);
console.log(elapsed2);


//insertion sort for numbers
var first3=utility.currenttime();
var arr3=utility.insertionsort(arrnum);
console.log(arr3);
var second3=utility.currenttime();
var elapsed3=utility.elapsedtime(first3,second3);
console.log(elapsed3);


//insertion sort for strings
var first4=utility.currenttime();
var arr4=utility.insertionsortstring(arrstr);
console.log(arr4);
var second4=utility.currenttime();
var elapsed4=utility.elapsedtime(first3,second3);
console.log(elapsed4);



//binary search for numbers
var first5=utility.currenttime();
var res=utility.binarysearch(arrnum);
if(res==-1)
console.log("element is not found");
else
console.log("element is found at : "+res);
var second5=utility.currenttime();
var elapsed5=utility.elapsedtime(first5,second5);
console.log(elapsed5);


//binarysearch for strings
var first6=utility.currenttime();
var res=utility.binarysearchstring(arrstr)
if(res!==-1)
console.log("element is not found");
else
console.log("element is found at : "+res);
var second6=utility.currenttime();
var elapsed6=utility.elapsedtime(first6,second6);
console.log(elapsed6);
