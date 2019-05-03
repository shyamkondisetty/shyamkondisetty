
const json=require('../../objectOrientedPrograms/JSON/inventorymanagement.JSON');
const inventoryManagement=require('../../objectOrientedPrograms/utility/inventoryDataManagementutil')
var assert=require('assert');
describe("To check inventory management functions",()=>{

    it("raises to check the choice of user input", (callback) => { 
        let result=inventoryManagement.takechoice(1);
        assert.equal(result,json.Rice);
        let result=inventoryManagement.takechoice(2);
        assert.equal(result,json.Pulses);
        let result=inventoryManagement.takechoice(4);
        assert.equal(result,"invalid number");
        callback();

    })

    it("raises to return number of days in a month", (callback) => {   
        let result=inventoryManagement.inventory(NaN);
        assert.equal(result,"please enter numeric value");
        result=inventoryManagement.inventory(5);
        assert.equal(result,"invalid data");
        result=inventoryManagement.inventory(1);
        assert.equal(result.length>30,true);
        callback();

    })
})
