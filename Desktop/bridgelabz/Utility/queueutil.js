/***********************************************************************************
 * @purpose : is to create our Queue                                               *
 * @description : it includes the functions like enqueue,dequeue,size e,t,c        *
 ***********************************************************************************/
module.exports=function Queue(){
    let storage=[];
    this.enqueue=function(data){
        storage.push(data);

    }
    this.dequeue=function(){
        if(storage.length==0){
            console.log("queue is empty");
         }
         else{
            let removedItem=storage.shift();
            return removedItem;
         }
    }
    this.isEmpty=function(){
        if(storage.length==0){
            return true;
        }
        else{
            return false;
        }
    }
    this.size=function(){
        return storage.length;
    }
    this.printQueue=function(){
        var totalQueue="";
        for(var i=0;i<storage.length;i++){
            totalQueue=totalQueue+storage[i]+" ";
        }
        return totalQueue;
    }

}