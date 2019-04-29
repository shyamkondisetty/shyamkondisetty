/**************************************************************************************
 * @purpose : is to create our own unordered linked list                              *
 * @description : it includes the functions like add,delete,search an node in the     *
 *                    linked list and sores the data in ascending order               *
 **************************************************************************************/
module.exports=function orderedList(){
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