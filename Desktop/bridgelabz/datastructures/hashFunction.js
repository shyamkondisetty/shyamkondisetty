/************************************************************************************
 * @purpose : writing a hashing function to store values by modulus of 11           *
 * @description : it stores the values as by reducing the its value by hashing and  *
 *                and singly linked list                                            *
 ************************************************************************************/


var orderedList=require('../Utility/orderedutil');
var readline=require('readline-sync');
var array=[];
for(let i=0;i<11;i++){
    array.push(null);
}
console.log(array);

var fs = require('fs');
var numberList = fs.readFileSync('numberList.txt').toString().split(" ");
for(i=0;i<numberList.length;i++){
    numberList[i]=parseInt(numberList[i]);
}

for(let i=0;i<numberList.length;i++){
    addValueToArray(numberList[i]);
}



var data=readline.question("enter the value to search");
data=parseInt(data);

function addValueToArray(data){
    let hash=data%11;
    if(array[hash]==null){
     let list=new orderedList();
     list.add(data);
        array[hash]=list;
    }
    else{
    function switchresult(hash){
        switch(hash){
            case 0:return array[0];
            case 1:return array[1];
            case 2:return array[2];
            case 3:return array[3];
            case 4:return array[4];
            case 5:return array[5];
            case 6:return array[6];
            case 7:return array[7];
            case 8:return array[8];
            case 9:return array[9];
            case 10:return array[10];

        }
    }
    let list=switchresult(hash);
        list.add(data);
    }
}



function hashFunction(data){
    hash=data%11;
 let list=array[hash];

 if(list==null){
    this.addValueToArray(data);
 }
 else{
    let result=list.search(data);
    if(result){
        list.remove(data);
        console.log("element is found and deleted");
        var str =list.printList();
        console.log(str);
    }
    else{
        list.add(data);
        console.log("element is not found and added as a new element");
    }
 }
}

hashFunction(data);