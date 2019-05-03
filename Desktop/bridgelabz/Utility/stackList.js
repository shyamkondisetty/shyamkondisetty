/***********************************************************************************
 * @purpose : is to create our own stack                                           *
 * @description : it includes the functions like push,pop,peek e,t,c               *
 ***********************************************************************************/


module.exports=function myStack(){
   let utilityList=require('../Utility/unOrderedUtil');
   let list=new utilityList();

    this.push=function(data){
        list.add(data)
    }
    this.pop=function(){
        if(list.size()==0){
            console.log("stack is underflow");
        }
        else{
            let itemPopped=list.pop();
            return itemPopped
        }
    }
    this.peek=function(){
        if(list.size()==0){
            console.log("stack is empty");
        }
        else{
            return list.lastValue();
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
    this.printStack=function(){
        return list.printList();
    }



 }