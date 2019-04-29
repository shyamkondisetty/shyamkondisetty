/***********************************************************************************
 * @purpose : is to create our Queue using linked list                                              *
 * @description : it includes the functions like enqueue,dequeue,size e,t,c        *
 ***********************************************************************************/
module.exports=function Queue(){
    let storage=[];
    let utilityList=require('./unOrderedUtil');
    let list=new utilityList();
    this.enqueue=function(data){
        list.add(data);

    }
    this.dequeue=function(){
        if(list.size()==0){
            console.log("queue is empty");
         }
         else{
            let removedItem=list.popAtPosition(0);
            return removedItem;
         }
    }
    this.isEmpty=function(){
        if(list.size()==0){
            return true;
        }
        else{
            return false;
        }
    }
    this.size=function(){
        return list.size();
    }
    this.printQueue=function(){
        var totalQueue=list.printList();
        return totalQueue;
    }

}