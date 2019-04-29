/************************************************************************************
 * @purpose : is to maintaining the queue at banking cash counter                   *
 * @description : queue should be maintained that cash in atm is balanced for the   * 
 *                people in the queue                                               *
 ************************************************************************************/




var utilityQueue=require('../Utility/queueutil');
var readline=require('readline-sync');
var atmQueue=new utilityQueue();
var waitingQueue=new utilityQueue();
var queuesize=readline.question("enter the number of people in queue");
var cashAvailable=readline.question("enter the cash available in ATM");
queuesize=parseInt(queuesize);
cashAvailable=parseInt(cashAvailable);
let topOfWaitingAmount=[];
for(i=1;i<=queuesize;i++){
    atmQueue.enqueue("person"+i);
}
while(!atmQueue.isEmpty()){
    let person=atmQueue.dequeue();
    while(true){
        let choice=readline.question("welcome press 1 to withdraw or press 2 to deposit");
        choice=parseInt(choice);
        if(choice==1&&cashAvailable>=0){
            let amount=readline.question("enter the amount to withdraw");
            amount=parseInt(amount);
            if((cashAvailable-amount)>=0){
            cashAvailable=cashAvailable-amount;
            console.log(person+" withdraw cash successfully");
            }
            else{
                console.log("dear "+person+",cash is less you can wait in waiting queue");
                if(waitingQueue.isEmpty()){
                waitingQueue.enqueue({name:person,cash:amount});
                topOfWaitingAmount.push(amount);
                }
                else{
                    waitingQueue.enqueue({name:person,cash:amount});
                    topOfWaitingAmount.push(amount);
                }
            }
            break;
        }
        else if(choice==2){
            let amount=readline.question("enter the amount to deposit");
            amount=parseInt(amount);
            cashAvailable=cashAvailable+amount;
            console.log("dear "+person+",your deposit is successfull!!!collect receipt");



            if(topOfWaitingAmount.length>0&&cashAvailable>=topOfWaitingAmount[0]){
                let dequeueData=waitingQueue.dequeue();
                cashAvailable=cashAvailable-topOfWaitingAmount[0];
                topOfWaitingAmount.shift();
                console.log(dequeueData.name+" waiting in the waiting queue takes the amount ");
            }

            break;
        }
        else{
            console.log("you entered the wrong input plese enter correct input");
        }

    }

}

let unbalancedCount=0;
while(topOfWaitingAmount.length!=0){

    dequeueData=waitingQueue.dequeue();
    let result=topOfWaitingAmount[0]
    topOfWaitingAmount.shift()
    if(cashAvailable>=result){
        cashAvailable=cashAvailable-result;
        console.log(dequeueData.name+" waiting in the queue takes the amount");
    }
    else{
        unbalancedCount++;
    }

}

if(unbalancedCount>0){
    console.log("queue is not balanced");
}
else{
    console.log("queue is balanced");
}

