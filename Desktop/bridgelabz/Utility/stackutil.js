
/***********************************************************************************
 * @purpose : is to create our own stack                                           *
 * @description : it includes the functions like push,pop,peek e,t,c               *
 ***********************************************************************************/


module.exports=function myStack(){
    let storage=[];

    this.push=function(data){
        if(storage.length==0){
        storage.push(data);
       
        }
        else{
            storage.push(data);
        }
    }
    this.pop=function(){
        if(storage.length==0){
            console.log("stack is underflow");
        }
        else{
            let itemPopped=storage.pop();
            return itemPopped
        }
    }
    this.peek=function(){
        if(storage.length==0){
            console.log("stack is empty");
        }
        else{
            return storage[storage.length-1];
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
    this.printStack=function(){
        console.log(storage);
    }



 }