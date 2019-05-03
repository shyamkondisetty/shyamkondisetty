const utility2=require('../../Utility/utility2')
utility2.dayofweek();
utility2.daysInMonth();
var assert=require('assert');
describe("fuctions to display calender",()=>{

    it("raises toreturn day of week", (callback) => { 
        let result=utility2.primesBelow1000();
        assert.equal(result.length,10);
        callback();

    })

})