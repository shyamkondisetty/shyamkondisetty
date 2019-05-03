var readln=require('readline-sync');

/*FUNCTIONAL PROGRAMS*/


module.exports={ 

/*string repalce*/

replacestring(str2,str3){
var str1="hello username how are you";
//var str2=readln.question("enter the word to replace in above sentence: ");
//var str3=readln.question("enter the word to be replace with : ");

var str4=str1.replace(str2,str3);

return str4;
},


/*FLIPCOIN*/

flip(){
var noOfTimes=readln.question("enter the number of times the coin to be flip : ");
noOfTimes=parseInt(noOfTimes);
var hcount=0,tcount=0;
for(var i=0;i<noOfTimes;i++){
var res=Math.random();
if(res<0.5)
tcount++;
else
    hcount++;
}
var hperc=(hcount/noOfTimes)*100;
var tperc=(tcount/noOfTimes)*100;
console.log(tperc,hperc)
},


/*LEAPYEAR*/
leap(year){
    //var year=readln.question("enter the year that to check leapyear or not : ");
    year=parseInt(year);
    var leapYear;
    if(year%4==0){
      if(year%100==0){
        if(year%400==0){
        leapYear=true; 
        }  
        else{
        leapYear=false;
        } 
      }
      else{
        leapYear=true;
      }  
    }
    else{
    leapYear=false;
    } 

    return leapYear;
},
//POWER OF 2
power(){

var n=readln.question("enter the n value for how many poers you needed : ");
n=parseInt(n);
for(var i=0;i<=n;i++){
    console.log("2^"+i+" = "+Math.pow(2,i));
}
},

//HARMONIC

harmonic(n){
n=parseInt(n);
var h=0;
for(var i=1;i<=n;i++){
  h=h+1/i;  
}
return h;
},


//PRIMEFACTORS

isPrime(num){
    if(num<2){
        
    return true;
    }

    for(var i=2;i<=num/2;i++){
        if(num%i==0)
        return false;
    }
    return true;
},



primefactor(){
var givebNumber=readln.question("enter the value for prime factors to be needed : ");
givebNumber=parseInt(givebNumber);
for(var i=2;i<=givebNumber;i++){
    if(givebNumber%i==0){
    var prime=this.isPrime(i);
    if(prime)
    console.log(i);
   }
}
},

//GAMBLER

gambler(){

var noOfTimes=readln.question("enter the number of time to be participate in game : ");
noOfTimes=parseInt(noOfTimes);
var $bet=100,win=0,loss=0;
for(var i=0;i<noOfTimes;i++){
    var $stack=1000,$goal=2000;
    while(true){
        if(Math.random()<0.5)
        $stack=$stack+$bet;
        else
        $stack=$stack-$bet;
        
        if($stack==$goal){
            win++;
            console.log("you won");
            break;
        }
        else if($stack==0){
            loss++;
            console.log("you broke");
            break;
        }
        
    }
}
var winPerc=(win/noOfTimes)*100;
var lossPerc=(loss/noOfTimes)*100;
console.log(winPerc);
console.log(lossPerc);
},

coupon(){
    var n=readln.question("enter the number of coupons needed ?  : ");
    n=parseInt(n);
		var arr=[];
    var totalRanNum=0,min=0;
    var max=n-1;
		
		while(true) {
			var couponCount=0;	
			var res=Math.floor(Math.random() * (max - min +1)) + min;/*Math.random()*n;*/
            res=Math.floor(res);
			totalRanNum++;
			arr.push(res);
            var unique= [...new Set(arr)];
            if(unique.length===n){
              console.log(unique);
              break;  
            }
        }
return totalRanNum;
},

//2D Array
readarray(){
    var arr=[];
    var n=readln.question("enter the number of values to be needed");
    console.log("enter the values of array");
    for(var i=0;i<n;i++){
    var val=readln.question("");
    val=parseInt(val);
    arr.push(val);
    }
    return arr;
},

read2darray(){
    var rows=readln.question("enter number rows to be needed");
    var cols=readln.question("enter number of columns to be needed");
    var arr=new Array(3);
    for(var i=0;i<rows;i++){
        console.log("enter the values of row "+(i+1));
        var arr1=[];
        for(var j=0;j<cols;j++){
            var val=readln.question("");
            arr1.push(val);

        }
        arr.push(arr1);
    }
return arr;
},

displayarray(arr){
    for(var i=0;i<arr.length;i++){
        var str="";
        for(var j=0;j<arr[0].length;j++){
        str=str+arr[i][j]+" ";
        }
        console.log(str);

    }
},

//TRIPLETS
triplets(){
    var arr=this.readarray();
    var n=arr.length;
	var str=[],l=0;
		
		for(var i=0;i<n-2;i++) {
			for(var j=i+1;j<n-1;j++) {
				for(var k=j+1;k<n;k++) {
					if(arr[i]+arr[j]+arr[k]==0) 	
					str[l++]=arr[i]+" "+arr[j]+" "+arr[k];
				}
			}
		}
        let unique = [...new Set(str)];
    
    return unique;
},
//DISTANCE
distance(){
        var x1=readln.question("enter the x coordinate : ");
		var y1=readln.question("enter the y coordinate : ");
		
		x1=parseInt(x1);
		y1=parseInt(y1);
        var dist=Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2))
    return dist;
},


//STOPWATCH

currenttime(){
    var time=new Date();
    var currentseconds=time.getSeconds()+time.getMinutes()*60+time.getHours()*3600;
    return currentseconds;
},

elapsedtime(first,second){
return (second-first);
},

stopwatch(){
    var temp1=readln.question("enter any key to start the stop watch : ");
    var first=this.currenttime();
    var temp2=readln.question("enter any key to stop the stop watch : ");
    var second=this.currenttime();
    var elapsed=this.elapsedtime(first,second);
    return elapsedTime;

},

//QUADRATIC
quadratic(){
var a=readln.question("enter the coeffiecient a : ");
var b=readln.question("enter the coeffiecient b : ");
var c=readln.question("enter the coeffiecient c : ");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
var delta=b*b-4*a*c;

var root1=(-b+Math.sqrt(delta))/2*a;
var root2=(-b-Math.sqrt(delta))/2*a;
console.log("the roots of X are...");
console.log("root 1 = "+root1);
console.log("roots 2= "+root2);
},

//WINDCHILL
windchill(){

var t=readln.question("enter the temperature in farenheit");
t=parseInt(t);
var v=readln.question("enter the velocity of wind ");
v=parseInt(v);
var w=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);
return w;
},




//ALGORITHM PROGRAMS

//ANAGRAM
isAnagram(str1,str2){
    var arr1=new Array(...str1);
    arr1=arr1.sort();
    var arr2= new Array(...str2); 
    arr2=arr2.sort();
    if(arr1.length!=arr2.length)
      return false;
    else{
        for(var i=0;i<arr1.length;i++){
            if(arr1[i]!=arr2[i])
            return false;
        }
    }
    
    return true;
},
anagram(){
var str1=readln.question("enter the first string");
var str2=readln.question("enter the second string");
return this.isAnagram(str1,str2);
},

//PRIME NUMBERS BW 1000

isPrime(num){
    for(var i=2;i<=num/2;i++){
        if(num%i==0)
        return false;
    }
    return true;
},



prime(){

for(var i=2;i<=1000;i++){
    var res=this.isPrime(i);
    if(res==true)
    console.log(i);
}

},

//NUMBERS THAT ARE PRIME ANAGRAM AND PALINDROME

isPalindrome(str){
    var rev="";
    for(var i=0;i<str.length;i++){
        rev=str.charAt(i)+rev;
    }
    if(rev==str){
    return true;}
    else{
    return false;}
    
  },


primeanapalin(){
    var num=readln.question("enter number range 0 to number that are prime anagram and palindrome ");
    num=parseInt(num);
    var prime=[];
    var anagram=[];
    var palindrome=[];
    for(let i=2;i<num;i++){
        var res=this.isPrime(i);
        if(res==true){
        prime.push(i.toString());}
        }
        console.log(prime);
    
        for(let i=0;i<prime.length-1;i++){
            var count=0;
        for(let j=i+1;j<prime.length;j++){
            var res=this.isAnagram(prime[i],prime[j]);
            if(res==true){
            anagram.push(prime[j]);
            
            count++;
            }
        }
        if(count>0)
        anagram.push(prime[i]);
        }
       var uniqueAnagram=[...new Set(anagram)];
       console.log(uniqueAnagram);
       
       for(let i=0;i<uniqueAnagram.length;i++){
           var res=this.isPalindrome(uniqueAnagram[i]);
          if(res==true){
           palindrome.push(uniqueAnagram[i]);
           }
       }
       console.log(palindrome);
},
//BUBBLE SORT FOR NUMBERS
bubblesort(arr){
    
},



//BUBBLESORT FOR STRINGS

bubblesortstring(arr){
    var len=arr.length;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<len-1;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    len--;
    }
    return arr;
},



//INSERTION SORT FOR NUMBERS
insertionsort(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=i-1;j>=0;j--){
            var k=j-1;
            if((j==0&&arr[j]>arr[i])||
               k>=0&&((arr[k]<=arr[i])&&(arr[j]>=arr[i])))
               {
                    k=i;
                    var temp=arr[k];
                    while(k>j){
                    arr[k]=arr[--k];
                    }
                    arr[j]=temp;
               }
        }
    
    }
    return arr;
},


//INSERTIONSORT FOR STRINGS
insertionsortstring(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=i-1;j>=0;j--){
            var k=j-1;
            if((j==0&&arr[j]>arr[i])||
               k>=0&&((arr[k]<=arr[i])&&(arr[j]>=arr[i])))
               {
                    k=i;
                    var temp=arr[k];
                    while(k>j){
                    arr[k]=arr[--k];
                    }
                    arr[j]=temp;
               }
        }
    
    }
    return arr;
},



//BINARY SEARCH FOR NUMBERS
binarysearch(arr){
    arr=arr.sort();
    var X=readln.question("Enter the value to search \n ");
    X=parseInt(X);
    var first=0;
    var last=arr.length-1;
    var mid=Math.floor((first+last)/2);
    while(first<=last){
 
        var mid=Math.floor((first+last)/2);
        if(arr[mid]===X){
            return mid;
        }
        else if(arr[mid]>X){
            last=mid-1;
        }
        else if(arr[mid]<X){
            first=mid+1;
        }
       
    }
    if(last<=first)
        return -1;

},

//BINARY SEARCH FOR STRINGS
binarysearchstring(arr){
    arr=arr.sort();
    var X=readln.question("Enter the value to search \n ");
    X=parseInt(X);
    var first=0;
    var last=arr.length-1;
    var mid=Math.floor((first+last)/2);
    while(first<=last){
 
        var mid=Math.floor((first+last)/2);
        if(arr[mid]===X){
            return mid;
        }
        else if(arr[mid]>X){
            last=mid-1;
        }
        else if(arr[mid]<X){
            first=mid+1;
        }
       
    }
    if(last<=first)
        return -1;

},


//GUESS GAME
guessnumber(){
    const args = process.argv.slice(2)
    var n=args[0];
    n=parseInt(n);
    var N=Math.pow(2,n);
    var first=0,last=N;
    var guess=0;
    console.log("guess any number bw 0 to "+N);
    while(true){
        if((last-first)==1){
            guess=first;
            break;
        }
        var mid=Math.floor((first+last)/2);
        var res=readln.question("the guess number less than "+mid+" say true or false   : ");
        if(res=="true"){
            last=mid;
        }
        else if(res=="false"){
            first=mid;
        }

    }
    return guess;
},

//CREATE A FILE
createfile(){
    var fs=require('fs');
    var filename=readln.question("enter the file name\n");
    filename=filename+".txt"
    var content=readln.question("enter the content of file");
    content=content.toString();
    fs.writeFile('filename',content,(err,data)=>{
        if(err)
        console.log(err);
        else{
            console.log("file successfully created");
        }
    });
},
//VENDING MACHINE
vendingmachine(){
    var val=[1000,500,100,50,20,10,5,2,1];
    var count=[];
    var i=0;
    var value=readln.question("enter the amount");
    while(value>0){
    var notes=0;
    while(value>=val[i]){
    value=value-val[i];
    notes++;
    }
    i++;
    
    }
    var res="";
    
    for(var i=0;i<count.length;i++){
    if(count[i]!=0)
    res=res+count[i]+"*"+val[i]+" notes ";
    }

    return res;
},

//DAYOFWEEK
dayofweek(){
    var d=readln.question("enter the day\n");
    var m=readln.question("enter month\n");
    var y=readln.question("enter year\n");
    d=parseInt(d);
    m=parseInt(m);
    y=parseInt(y);
   var y0= y-Math.floor((14-m)/12);
   var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
   var m0=m+12*Math.floor((14-m)/12)-2;
   var d0=(d+x+Math.floor((31*m0)/12))%7;
return Math.ceil(d0);
},

//TEMPERATURE CONVERSION
tempconvert(){
    var temp=readln.question("enter the temperature\n");
    var type=readln.question("Temperature is in F or C\n");
if(type.toUpperCase()=="C"){
var faren=Math.floor((temp*9)/5)+32;
return faren+" F";
}
else if(type.toUpperCase()=="F"){
var celsius=(Math.floor(((temp-32)*5)/9));
return celsius+" C";
}
},

//MONTHLY PAYMENT
monthlypayment(){
var P=readln.question("enter the principle amount\n");
var Y=readln.question("enter the no of years\n");
var R=readln.question("enter the rate of intrest\n");
P=parseInt(P);
Y=parseInt(Y);
R=parseInt(R);
var n=12*Y;
var r=R/(12*100);
var deno=Math.pow((1+r),n);
var payment=(P*r)/(1-(1/deno));
return payment;
},


//BINARY
decToBin(n){
    var res="";
    for(var i=0;i<8;i++)
    {
        var t=n%2;
        res=t+res;
        n=n/2;
        n=Math.floor(n);
    }
    return res;
},

tobinary(){
    var num=readln.question('Enter the number');
    num=parseInt(num);
return this.decToBin(num);
},

//SWAPNIBBLES
swapNibbles(bin){
    var res="";
		for(var i=bin.length/2;i<bin.length;i++) {
			res=res+bin.charAt(i);
		}
		for(var i=0;i<bin.length/2;i++) {
			res=res+bin.charAt(i);
		}
	return res;
},

binToDec(bin) {
    var str=[128,64,32,16,8,4,2,1];
    var res=0;
    for(var i=0;i<bin.length;i++) {
        var ch=bin.charAt(i);
        if(ch=='1')
        res=res+(str[i]);
    }
    return res;
},

nibbles(){
var num=readln.question("enter the number");
num=parseInt(num);
var bin=this.decToBin(num);
var nib=this.swapNibbles(bin);
return this.binToDec(nib);

},

//squareroot using newtonian

sqrt(){
var c=readln.question("enter the value of to find squareroot");
var epsilon=1e-15;
var t=c;
while(Math.abs(t-Math.floor(c/t))>epsilon*t){
    t=Math.floor((Math.floor(c/t)+t)/2);
    }
console.log("the squareroot of "+c+" is : "+t);
},

//mergesort for strings

mergeSort(arr, l, r) 
{ 
    if (l < r) 
    { 
        // Same as (l+r)/2, but avoids overflow for 
        // large l and h 
        var m = l+(r-l)/2; 
  
        // Sort first and second halves 
        mergeSort(arr, l, m); 
        mergeSort(arr, m+1, r); 
  
        this.merge(arr, l, m, r); 
    } 
    return arr;
} ,

merge(arr, l, m, r) 
{ 
    var i, j, k; 
    var n1 = m - l + 1; 
    var n2 =  r - m; 
     var L=[], R=[]; 
  
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j]; 
  
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    while (i < n1 && j < n2) 
    { 
        if (L[i]<=R[j]) 
        { 
            arr[k].push(L[i]); 
            i++; 
        } 
        else if (L[i]===R[j]) {
            arr[k].push(L[i]); 
            i++; 
        }
        else
        { 
            arr[k].push(R[j]); 
            j++; 
        } 
        k++; 
    } 
  
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
  
   
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
} 
 



}

