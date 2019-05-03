
/************************************************************************************
 * @purpose : is to create our deQueue                                              *
 * @description : it includes the functions like addrear,addfront,size e,t,c        *
 *********************************************************************************$**/
module.exports=function Dequeue(){
    let storage=[];
   this.addFront=function(data){
       storage.unshift(data);
   }
   this.addRear=function(data){
       storage.push(data);
   }
   this.removeFront=function(){
       if(storage.length==0){
          console.log("queue is empty");
       }
       else{
       let removedItem=storage.shift();
      // console.log(removedItem);
       return removedItem;
       }
   }
   this.removeRear=function(){
    if(storage.length==0){
        console.log("queue is empty");
     }
     else{
       let removedItem=storage.pop();
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