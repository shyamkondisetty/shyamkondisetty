const orderedListUtil=require('../../Utility/orderedutil');
var assert=require('assert');
let list=new orderedListUtil();
describe("to check the ordered list datastructure",()=>{

    it("add-method check by printList and size method", (callback) => {
            let result=list.isEmpty();
            assert.equal(result,true);
            list.add(10);
            result=list.isEmpty();
            assert.equal(result,false);
            result=list.printList();
            assert.equal(result,"10 ");
            result=list.size();
            assert.equal(result,1);
            callback();
    })
    
    it("add-method check by printList and size method", (callback) => {
            list.add(20);
            list.add(30);
            let result=list.printList();
            assert.equal(result,"10 20 30 ");
            list.add(25);
            result=list.printList();
            assert.equal(result,"10 20 25 30 ");
            result=list.size();
            assert.equal(result,4);
            callback();
    })

    it("remove -method check by printList and size method", (callback) => {
        list.remove(30);
        let result=list.printList();
        assert.equal(result,"10 20 25 ");
        result=list.size();
        assert.equal(result,3);
        list.remove(10);
        result=list.printList();
        assert.equal(result,"20 25 ");
        result=list.size();
        assert.equal(result,2);
        list.remove(20);
        result=list.printList();
        assert.equal(result,"25 ");
        result=list.size();
        assert.equal(result,1);
        list.remove(25);
        result=list.printList();
        assert.equal(result,"");
        result=list.size();
        assert.equal(result,0);
        callback();

    });
 
    it("search-method value is present or not", (callback) => { 
        list.add(10);
        list.add(20);
        list.add(30);
        let result=list.printList();
        assert.equal(result,"10 20 30 ");
        result=list.search(10);
        assert.equal(result,true);
        result=list.search(50);
        assert.equal(result,false);
        result=list.search(30);
        assert.equal(result,true);
        callback();
    });
 
    it("index-method to check give the index of element", (callback) => {
        let result=list.index(10);
        assert.equal(result,0);
        result=list.index(30);
        assert.equal(result,2);
        result=list.index(50);
        assert.equal(result,-1);
        callback();
    });

    it("pop-method deletes element at last position ", (callback) => {
            list.add(5);
            list.add(40);
            list.add(50);
            let result=list.printList();
            assert.equal(result,"5 10 20 30 40 50 ");
            result=list.pop();
            assert.equal(result,50);
            result=list.printList();
            assert.equal(result,"5 10 20 30 40 ");
            result=list.pop();
            assert.equal(result,40);
            result=list.printList();
            assert.equal(result,"5 10 20 30 ");
            callback();
    })
    
    it("popAtPsition-method deletes element at given position ", (callback) => {
            let result=list.printList();
            assert.equal(result,"5 10 20 30 ");
            result=list.popAtPosition(5);
            assert.equal(result,undefined);
            result=list.popAtPosition(1);
            assert.equal(result,10);
            result=list.printList();
            assert.equal(result,"5 20 30 ");
            result=list.popAtPosition(0);
            assert.equal(result,5);
            result=list.printList();
            assert.equal(result,"20 30 ");
            callback();
})
    
});
