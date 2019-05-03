var utility=require('../Utility/utility');
var assert=require('assert');
describe("to find the nth harmonic number",()=>{

    it("raises to find 5th harmionic number", (callback) => { 
        let value=1;
        for(let i=2;i<=5;i++){
            value=value+1/i
        } 
        let result=utility.harmonic(5);
        assert.equal(result,value);
        callback();

    })

    it("raises to find 3rd harminic number", (callback) => { 
        let value=1;
        for(let i=2;i<=3;i++){
            value=value+1/i
        }   
        let result=utility.harmonic(3);
        assert.equal(result,value);
        callback();

    })
})
