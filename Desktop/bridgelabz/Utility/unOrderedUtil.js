/*********************************************************************************
 * @purpose : is to create our own unordered linked list                         *
 * @description : it includes the functions like add,delete,search an node in    *
 *                the linked list.                                               *
 *********************************************************************************/


module.exports=function unOrderedList(){
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
   // }

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
   // }
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
            let dataRequire=currentNode.data;
            currentNode==null;
            prev==currentNode;//head==null;
            head=prev;
            length--;
            return dataRequire;
        }
        else{
            while(currentNode.next!==null){
                prev=currentNode;
                currentNode=currentNode.next;
            }
            prev.next=null;
            currentNode=null;
            length--;
            return prev.data;
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

    //useful in stackList for peek
    this.lastValue=function(){
        currentNode=head;
        if(head==null){
            return null;
        }
        else{
            while(currentNode.next!=null){
                currentNode=currentNode.next;
            }
            return currentNode.data;
        }
    }

}