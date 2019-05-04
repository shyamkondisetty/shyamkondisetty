var suit=["clubs","diamonds","hearts","spades"];
var cards=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
let queueListutil=require('../../Utility/queueList');
module.exports={

    totalCards2D(){

        var totalCards2D=[];
        for(let i=0;i<suit.length;i++){
            let array=[];
            for(let j=0;j<cards.length;j++){
                array.push({"card":j,"suit":i});
            }
            totalCards2D.push(array);
        }
        return totalCards2D;
    },
    distributeCards(totalCards2D){
        let allPersonsReceived=[];
        for(let i=0;i<4;i++){
            let eachpersonreceived=[];
            for(let j=0;j<9;j++){
                while(true){
                    let i=Math.floor(Math.random()*totalCards2D.length);
                    let j=Math.floor(Math.random()*totalCards2D[0].length)
                    if(totalCards2D[i][j]!=null){
                        eachpersonreceived.push(totalCards2D[i][j]);
                        totalCards2D[i][j]=null
                        break;
                    }
                }
            }
            allPersonsReceived.push(eachpersonreceived);
        }
        return allPersonsReceived;
    },

    displayDistributedCards(arr){
        for(var i=0;i<arr.length;i++){
            var str="";
            for(var j=0;j<arr[0].length;j++){
            str=str+cards[arr[i][j].card]+""+suit[arr[i][j].suit]+" ";
            }
            console.log(str);
    
        }
    },
    sortByRank(arr){
        var len=arr.length;
        for(var i=0;i<arr.length;i++){
           arr[i]=this.sortByRankEachRow(arr[i]);
        }
    return arr;
    },
    sortByRankEachRow(arr){
        var len=arr.length;
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<len-1;j++){
                if(arr[j].suit>arr[j+1].suit){
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
                else if((arr[j].suit===arr[j+1].suit)&&(arr[j].card>arr[j+1].card)){
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        len--;
        }
    return arr;
    },
    addingPlayerCardsToList(finalCardsSort){
        let playersQueue=new queueListutil();
        for(i=0;i<finalCardsSort.length;i++){
            let eachPersonQueue=new queueListutil();
            for(j=0;j<finalCardsSort[i].length;j++){
                let eachcard=cards[finalCardsSort[i][j].card]+""+suit[finalCardsSort[i][j].suit];
                eachPersonQueue.enqueue(eachcard);
            }
            playersQueue.enqueue(eachPersonQueue);
    
        }
        return playersQueue;
    }
}