const utility2=require('../Utility/utility2')
utility2.dayofweek();
utility2.daysInMonth();
var assert=require('assert');
describe("fuctions to display calender",()=>{

    it("raises toreturn day of week", (callback) => { 
        let result=utility2.dayofweek(4,2019);
        assert.equal(result,1);
        result=utility2.dayofweek(5,2019);
        assert.equal(result,3);
        callback();

    })

    it("raises to return number of days in a month", (callback) => {   
        let result=utility2.daysInMonth(4,2019);
        assert.equal(result,30);
        result=utility2.daysInMonth(2,2000);
        assert.equal(result,29);
        callback();

    })
})
