var utility=require('../../Utility/utility');
var assert=require('assert');
describe("to check the word is repalced in the sentence",()=>{

    it("raises to replace username with the word shyam", (callback) => {   
        let result=utility.replacestring("username","shyam");
        assert.equal(result,"hello shyam how are you");
        callback();

    })

    it("raises to replace username with the word rockey", (callback) => {   
        let result=utility.replacestring("username","rockey");
        assert.equal(result,"hello rockey how are you");
        callback();

    })
})