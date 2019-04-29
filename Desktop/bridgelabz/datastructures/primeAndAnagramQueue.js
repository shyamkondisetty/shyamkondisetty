
/************************************************************************************
 * @purpose : is to find the prime numbers and anagrams below 1000 and store in     *
 *            2d array using queue                                                  *
 * @description : it returns the prime numbersand anagrams below 1000 as per the    *
 *                range of 100 using queue                                          *
 ************************************************************************************/

var utility=require('../Utility/utility');
var utility2=require('../Utility/utility2');

var primes=utility2.primesBelow1000();
let primes1D=utility2.twoDtoOneD(primes);

var anagrams=[];
for(let i=0;i<primes1D.length-1;i++){
    let count=0;
    let array=[];
    if(primes1D[i]!=0){
        for(let j=i+1;j<primes1D.length;j++){
            let str1=primes1D[i]+"";
            let str2=primes1D[j]+"";
            var result=utility.isAnagram(str1,str2);
            if(result){
                array.push(primes1D[j]);
                primes1D[j]=0;
                count++;
            }
        }
        if(count>0){
            array.push(primes1D[i]);
            array=array.sort();
            anagrams.push(array);
        }
    }
}



let anagrams1D=utility2.twoDtoOneD(anagrams);
let utilityQueue=require('../Utility/queueList')
let queue=new utilityQueue();
for(let i=0;i<anagrams1D.length;i++){
queue.enqueue(anagrams1D[i])
}

let queueprint=queue.printQueue();
console.log(queueprint);