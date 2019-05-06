/*************************************************************************************************
 *  @Purpose        : To print the cards received by 4 players using 2D array.          
 *  @file           : deckOfCardsutil.js
 *  @overview       : To initialize deck of cards having suit and Rank then shuffle the                           cards using random method
                      Random method and then distribute 9 Cards to 4 Players and Print the Cards the 
                      received by the 4 Players.
 *  @author         : SHYAM K
 *  @version        : v2.3.5
 *  @since          : 03-05-2019
 ***************************************************************************************************/
module.exports=function deckofCardsutil(){
    /***
     * @description:these are the arrays of holding cards and thier suits
     */
    var suit=["clubs","diamonds","hearts","spades"];
    var cards=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    /***
     * @description: To create the queue object it is impoerted from util pacakge
     */
    let queueListutil=require('../../Utility/queueList');
    /***
     * @description : To add the each object of all cards having its references of suite                      index and cards array index 
     *                 
     */
    this.totalCards2D=function(){

        var totalCards2D=[];
        for(let i=0;i<suit.length;i++){
            let array=[];
            for(let j=0;j<cards.length;j++){
                array.push({"card":j,"suit":i});
            }
            totalCards2D.push(array);
        }
        return totalCards2D;
    }
    /***
     * @param {input} totalCards2D
     * @description :it takes the all cards from totalCards2D and distribtes randomly
     * @returns : it returns the array of cards distributed
     */
    this.distributeCards=function(totalCards2D){
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
    /**
     * 
     * @param {*} array 
     * @description : it displays the cards that are randomly distributed
     */

    this.displayDistributedCards=function(arr){
        for(var i=0;i<arr.length;i++){
            var str="";
            for(var j=0;j<arr[0].length;j++){
            str=str+cards[arr[i][j].card]+""+suit[arr[i][j].suit]+" ";
            }
            console.log(str);
    
        }
    },

    /**
     * 
     * @param {*} array 
     * @discription : it sorts the distributed cards based on the rank
     * @reurns : it returns the two dimensional array of sorted array
     */
    this.sortByRank=function(arr){
        var len=arr.length;
        for(var i=0;i<arr.length;i++){
           arr[i]=this.sortByRankEachRow(arr[i]);
        }
    return arr;
    },

    /**
     * 
     * @param {*} array
     * @description :it sorts the each row in the two dimentional array 
     * @returns : it returns an array of each row
     */
    this.sortByRankEachRow=function(arr){
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

    /**
     * 
     * @param {*} finalCardsSort 
     * @description : it adds the each and every card to the queue based on rank
     * @returns :it returns  queue of cards of each person
     */
    this.addingPlayerCardsToList=function(finalCardsSort){
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
