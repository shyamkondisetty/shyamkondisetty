const queueutil=require('../../Utility/queueutil');
var assert=require('assert');
let queue=new queueutil();
describe("to check the queue datastructure",()=>{

    it("isEmpty-checks the queue is empty or not", (callback) => {
            let result=queue.isEmpty();
            assert.equal(result,true);
            queue.enqueue(10);
            result=queue.isEmpty();
            assert.equal(result,false);
            result=queue.printQueue();
            assert.equal(result,"10 ");
            result=queue.size();
            assert.equal(result,1);
            callback();

    })
    

    it("enqueue-method check by printList and size method", (callback) => {
            queue.enqueue(20);
            queue.enqueue(30);
            let result=queue.printQueue();
            assert.equal(result,"10 20 30 ");
            queue.enqueue(25);
            result=queue.printQueue();
            assert.equal(result,"10 20 30 25 ");
            result=queue.size();
            assert.equal(result,4);
            callback();
    })
    

    it("dequeue -method check by printList and size method", (callback) => {
        queue.dequeue();
        let result=queue.printQueue();
        assert.equal(result,"20 30 25 ");
        result=queue.size();
        assert.equal(result,3);
        queue.dequeue();
        result=queue.printQueue();
        assert.equal(result,"30 25 ");
        result=queue.size();
        assert.equal(result,2);
        queue.dequeue();
        result=queue.printQueue();
        assert.equal(result,"25 ");
        result=queue.size();
        assert.equal(result,1);
        queue.dequeue();
        result=queue.printQueue();
        assert.equal(result,"");
        result=queue.size();
        assert.equal(result,0);
        callback();
    });
});
