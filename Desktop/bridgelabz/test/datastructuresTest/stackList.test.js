const stackList=require('../../Utility/stackList');
var assert=require('assert');
let stack=new stackList();
describe("to check the stack datastructure created by using linkedlist",()=>{

    it("isEmpty-method to check empty queue", (callback) => {
            let result=stack.isEmpty();
            assert.equal(result,true);
            stack.push(10);
            result=stack.isEmpty();
            assert.equal(result,false);
            result=stack.printStack();
            assert.equal(result,"10 ");
            result=stack.size();
            assert.equal(result,1);
            callback();
    
     })
    
    it("push-method check by printList and size method", (callback) => {
            stack.push(20);
            stack.push(30);
            let result=stack.printStack();
            assert.equal(result,"10 20 30 ");
            stack.push(25);;
            result=stack.printStack();
            assert.equal(result,"10 20 30 25 ");
            result=stack.size();
            assert.equal(result,4);
            callback();
    })
    

    it("peek -method to check top element of stack", (callback) => {
        let result=stack.peek();
        assert.equal(result,25);
        callback();
    });


    it("pop -method check by printList and size method", (callback) => {
        stack.pop();
        let result=stack.printStack();
        assert.equal(result,"10 20 30 ");
        result=stack.size();
        assert.equal(result,3);
        stack.pop();
        result=stack.printStack();
        assert.equal(result,"10 20 ");
        result=stack.size();
        assert.equal(result,2);
        stack.pop();
        result=stack.printStack();
        assert.equal(result,"10 ");
        result=stack.size();
        assert.equal(result,1);
        stack.pop();
        result=stack.printStack();
        assert.equal(result,"");
        result=stack.size();
        assert.equal(result,0);
        callback();
    });
});
