var utility=require('../Utility/utility');
var assert=require('assert');
describe("to check year is lepyear or not",()=>{

    it("raises to check leapyear for 2221", (callback) => {   
        let result=utility.leap(2221);
        assert.equal(result,false);
        callback();

    })

    it("raises to check leapyear for 2000", (callback) => {   
        let result=utility.leap(2000);
        assert.equal(result,true);
        callback();

    })
})
