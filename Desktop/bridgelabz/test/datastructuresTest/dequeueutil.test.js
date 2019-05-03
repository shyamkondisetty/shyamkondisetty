const dequeueutil=require('../../Utility/deQueueutil');
var assert=require('assert');
let dequeue=new dequeueutil();
describe("to check the queue datastructure",()=>{

    it("isEmpty-checks the queue is empty or not", (callback) => {
            let result=dequeue.isEmpty();
            assert.equal(result,true);
            dequeue.addFront(10);
            result=dequeue.isEmpty();
            assert.equal(result,false);
            result=dequeue.printQueue();
            assert.equal(result,"10 ");
            result=dequeue.size();
            assert.equal(result,1);
            callback();

    })
    

    it("addrear-method check by printList and size method", (callback) => {
            dequeue.addRear(20);
            dequeue.addRear(30);
            let result=dequeue.printQueue();
            assert.equal(result,"10 20 30 ");
            result=dequeue.size();
            assert.equal(result,3);
            callback();
    })

    it("addfront-method check by printList and size method", (callback) => {
        dequeue.addFront(25);
        let result=dequeue.printQueue();
        assert.equal(result,"25 10 20 30 ");
        result=dequeue.size();
        assert.equal(result,4);
        dequeue.addFront(15);
        result=dequeue.printQueue();
        assert.equal(result,"15 25 10 20 30 ");
        result=dequeue.size();
        assert.equal(result,5);
        callback();
    })

    it("removefront -method check by printList and size method", (callback) => {
        dequeue.removeFront();
        let result=dequeue.printQueue();
        assert.equal(result,"25 10 20 30 ");
        result=dequeue.size();
        assert.equal(result,4);
        dequeue.removeFront();
        result=dequeue.printQueue();
        assert.equal(result,"10 20 30 ");
        result=dequeue.size();
        assert.equal(result,3);
        callback();
        
    });

    it("removerear -method check by printList and size method", (callback) => {
        dequeue.removeRear();
        let result=dequeue.printQueue();
        assert.equal(result,"10 20 ");
        result=dequeue.size();
        assert.equal(result,2);
        dequeue.removeRear();
        result=dequeue.printQueue();
        assert.equal(result,"10 ");
        result=dequeue.size();
        assert.equal(result,1);
        dequeue.removeRear();
        result=dequeue.printQueue();
        assert.equal(result,"");
        result=dequeue.size();
        assert.equal(result,0);
        callback();
        
    });
});
