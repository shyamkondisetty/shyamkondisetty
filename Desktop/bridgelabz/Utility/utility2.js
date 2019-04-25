   /*********************************************************************************
    * @purpose : is to create our own unordered linked list                         *
    * @description : it includes the functions like add,delete,search an node in    *
    *                the linked list.                                               *
    *********************************************************************************/
   // var readline=require('readline-sync');
    function unOrderedList(){
        let head=null;
        let length=0;

        let Node=function(data){
            this.data=data;
            this .next=null;
        }

        this.printList=function(){
            let list="";
            let currentNode=head;
            while(currentNode!==null){
                list=list+currentNode.data+" "
                currentNode=currentNode.next;
            }
            return list;
        }

       this.add=function(data){
            let node=new Node(data);
            let currentNode=head;

            while(currentNode!==null){
                if(currentNode.data===data){
                    console.log("Element already present");
                    break;
                }else{
                currentNode=currentNode.next;
                }
            }

            if(currentNode===null){
                currentNode=head;
                if(head===null)
                head=node;
                else if(head.next===null)
                head.next=node;
                else{
                    while(currentNode.next!==null){
                        currentNode=currentNode.next;
                    }
                    currentNode.next=node;
                }
                length++;
            }
        }

        this.remove=function(data){
            currentNode=head;
            var prev=currentNode
            while(currentNode===null){
                if(head===null){
                    console.log("list is empty");
                    break;
                }
                else if(head.next===null){
                    head=currentNode.next;
                    length--;
                    break;
                }
                else if(currentNode.data===data){
                    length--;
                    prev.next=currentNode.next;
                    currentNode=null;
                    break;
                }
                else{
                    currentNode=currentNode.next;
                }
            }

            if(currentNode===null){
                console.log("element is not found");
            }

        }

        this.search=function(data){
            let countNode=0;
            currentNode=head;
            

                if(head===null){
                    console.log("list is empty");
                  //break;
                }
                else 
                while(currentNode!==null){
                    if(currentNode.data===data){
                        console.log("the element is found at index "+countNode);
                        break;
                    }
                    else{
                    countNode++;
                    currentNode=currentNode.next;
                    }
                }

            if(currentNode===null){
                console.log("element is not found");
            }
        }
        this.isEmpty=function(){
            if(length==0){
                return true;
            }
            else{
                return false;
            }
        }

        this.size=function(){
            return length;
        }
        this.append=function(data){
            let node=new Node(data);
            let currentNode=head;
            //if(head==null){
               // head=node;
            
            while(currentNode!==null){
                if(currentNode.data===data){
                    console.log("Element already present");
                    break;
                }else{
                currentNode=currentNode.next;
                }
            }

            if(currentNode===null){
                currentNode=head;
                if(head===null){
                head=node;
                }
                else if(head.next===null)
                head.next=node;
                else{
                    while(currentNode.next!==null){
                        currentNode=currentNode.next;
                    }
                    currentNode.next=node;
                }
                length++;
            }
        }
        this.index=function(data){
            let countNode=0;
            currentNode=head;
            if(head===null){
                return -1;
            }

            while(currentNode!==null){
                if(currentNode.data===data){
                    return countNode;
                }
                else{
                    currentNode=currentNode.next;
                    countNode++;
                }

            }
            if(currentNode===null){
               return -1;
            }
        }
        this.insert=function(position,data){
            let node=new Node(data);
            countNode=0;
            currentNode=head;
            prev=null;
            if(length===0&&position===0){
                currentNode=node;
                head=currentNode;
                length++;
            }
            else if(position===0){
                node.next=head;
                head=node;
                length++;

            }
            else{
                while(currentNode!==null){
                    if(currentNode.next===null&&length===position){
                        currentNode.next=node;
                        length++
                        break;
                    }
                    
                    else if(countNode===position){
                        prev.next=node;
                        node.next=currentNode;
                        length++;
                        break
                    }
                    else{
                        prev=currentNode;
                        currentNode=currentNode.next;
                        countNode++;
                    }
                }
                if(currentNode==null){
                    console.log("index is not found");
                }
            }
           
        }
        this.pop=function(){
            prev=null;
            currentNode=head;
            if(currentNode==null){
                console.log("the list is empty");
            }
            else if(currentNode.next==null){
                currentNode==null;
                prev==currentNode;//head==null;
                head=prev;
                length--;
            }
            else{
                while(currentNode.next!==null){
                    prev=currentNode;
                    currentNode=currentNode.next;
                }
                prev.next=null;
                currentNode=null;
                length--;
            }
        }
        this.popAtPosition=function(position){
            currentNode=head;
            countNode=0;
            if(length==0&&position==0){
                console.log("list is empty");
            }
            else if(position==0){
                head=currentNode.next;
                length--;
                currentNode=null;
            }
            else{
                while(currentNode!==null){
                    if(countNode==position){
                        prev.next=currentNode.next;
                        //currentNode=null;
                        length--;
                        break;
                    }
                    else{
                        prev=currentNode;
                        currentNode=currentNode.next;
                        countNode++;
                    }
                }
                if(currentNode==null){
                    console.log("position is not found");
                }
            }
        }
        
       
    }
   
    //var list=new unOrderedList();
    //list.add(20);
    //list.add(30);
    //list.append(11);
    //console.log(list.head);
    //list.add(30);
    //list.append(11);
    //list.append(20);
    //console.log(list.index(20));
    //console.log(list.index(30));
    //console.log(list.index(11));
    //list.insert(1,20);
    //list.insert(1,10);
    //list.pop();
    //list.pop();
    //list.pop();
    //list.popAtPosition(1);
    //list.popAtPosition(0)


    
    //console.log(list.search(11));
    //var res=list.printList();
    //console.log(res);
    //console.log(list.isEmpty());
    //console.log(list.size());






  /** ***********************************************************************************
   * @purpose : is to create our own unordered linked list                              *
   * @description : it includes the functions like add,delete,search an node in the     *
   *                    linked list and sores the data in ascending order               *
   **************************************************************************************/

function orderedList(){
    let head=null;
    let length=0;    
    let Node=function(data){
        this.data=data;
        this.next=null;
    }

    this.add=function(data){
        let node=new Node(data);
        prev=null;
        currentNode=head;
        if(head==null){
            head=node;
            length++;
        }
        else if(head.next==null){
            if(currentNode.data>=data){
                node.next=currentNode;
                head=node;
                length++;
            }
            else{
                currentNode.next=node;
                length++;
            }
        }
        else {
            while(currentNode!==null){
                if(head.data>=node.data){
                    node.next=head;
                    head=node;
                    length++
                    break;
                }
                else if(currentNode.data>=data){
                    prev.next=node;
                    node.next=currentNode;
                    length++;
                    break;
                }
                else{
                    prev=currentNode;
                    currentNode=currentNode.next;
                }

            }

            if(currentNode==null){
                prev.next=node;
                length++;
            }
            
        }
    }
    this.remove=function(data){
        currentNode=head;
        if(head.data==data){
            head=currentNode.next;
            currentNode=null;
            length--;
        }
        else if(head.next.data==data){
            prev=head;
            currentNode=currentNode.next;
            prev.next=currentNode.next;
            currentNode=null;
            length--;

        }
        else{
            while(currentNode!=null){
                if(currentNode.data==data){
                    prev.next=currentNode.next;
                    length--;
                    break;

                }
                else{
                    prev=currentNode;
                    currentNode=currentNode.next;
                }
            }
            if(currentNode==null){
                console.log("element is not found");
            }

        }
    }
    this.search=function(data){
        countNode=0;
        currentNode=head;
        if(head==null){
            return false;
        }
        else{
            while(currentNode!==null){
                if(currentNode.data==data){
                    return true;
                }
                else{
                    countNode++;
                    currentNode=currentNode.next;
                }
                
            }
            if(currentNode==null){
                return false;
               
            }
        }

    }
    this.isEmpty=function(){
        if(head==null){
            return true;
        }
        else {
            return false;
        }
    }
    this.size=function(){
        return length;
    }
    this.index=function(data){
        countNode=0;
        currentNode=head;
        if(head==null){
            console.log("list is empty");
            return -1;
        }
        else{
            while(currentNode!==null){
                if(currentNode.data==data){
                  return countNode;
                }
                else{
                    countNode++
                    currentNode=currentNode.next;
                }
            }
            if(currentNode!==null){
                return -1;
            }
        }
    }
    this.pop=function(){
        currentNode=head;
        if(head==null){
            console.log("list is empty");
        }
        else if(head.next==null){
            head=null;
            length--;
            return currentNode.data;
        }
        else{
            while(currentNode.next!==null){
                prev=currentNode;
                currentNode=currentNode.next;
            }
            if(currentNode.next==null){
                prev.next=currentNode.next;
                length--;
                return currentNode.data;
            }
        }
    }
    this.popAtPosition=function(position){
        countNode=0;
        prev=null;
        currentNode=head;
        if(head==null){
            //console.log("list is empty");
            return -1;
        }
        else if(countNode==0&&position==0){
            head=currentNode.next;
            length--;
            return currentNode.data;
        }
        else if(head.next==null&&position==0){
            head=null;
            length--;
            return head.data;
        }
        else {
            while(currentNode!==null){
                if(countNode==position){
                    prev.next=currentNode.next;
                    length--;
                    return currentNode.data;
                }
                else{
                    prev=currentNode;
                    currentNode=currentNode.next;
                    countNode++;
                    //console.log(countNode);
                }
            }
            if(currentNode==null){
                return -1;
            }
        }
    }
    this.printList=function(){
        var list="";
        currentNode=head;
        while(currentNode!==null){
            list=list+currentNode.data+" ";
            currentNode=currentNode.next;
        }
        return list;
    }
    
    
}

/*var list=new orderedList();
list.add(20);
list.add(30);
list.add(20);
list.add(10);
list.add(15);
list.add(40);
list.remove(10);
list.remove(20);
list.remove(40);
console.log(list.popAtPosition(0));
console.log(list.popAtPosition(0));
console.log(list.popAtPosition(0));
console.log(list.popAtPosition(0));
//console.log(list.pop())
//console.log(list.index(30));
console.log(list.printList());
console.log(list.size());*/










/** ********************************************************************************
 * @purpose : is to create our own stack                                           *
 * @description : it includes the functions like push,pop,peek e,t,c               *
 ***********************************************************************************/


 function stack(){
    let storage=[];

    this.push=function(data){
        if(storage.length==0){
        storage.push(data);
       
        }
        else{
            storage.push(data);
            top++;
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


 /** *******************************************************************************
 * @purpose : is to create our Queue                                               *
 * @description : it includes the functions like enqueue,dequeue,size e,t,c        *
 ***********************************************************************************/
function Queue(){
   // let front=0;
    //let rear=0;
    let storage=[];
    this.enqueue=function(data){
        storage.push(data);
    }
    this.dequeue=function(){
        let removedItem=storage.shift();
        return removedItem;
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
/*var que=new Queue();
que.enqueue(30);
que.enqueue(29);
que.enqueue(29);
que.dequeue();
var list=que.printQueue();
console.log(list);*/