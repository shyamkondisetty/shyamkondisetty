/***
 * @description: it gets the JSON Object from inventoryManagement.json file
 */
const json=require('../../objectOrientedPrograms/JSON/inventorymanagement.JSON');
/***
 * @description: it gets the functions from inventoryDataManagement.js file
 */
const inventoryManagement=require('../../objectOrientedPrograms/utility/inventoryDataManagementutil')
var assert=require('assert');

/**
 * @description :To test the inventory management methods
 */
describe("To check inventory management functions",()=>{
/**
 * @description :it tests the takechoice method.
 */
    it("raises to check the choice of user input", (callback) => { 
        let result=inventoryManagement.takechoice(1);
        assert.equal(result,json.Rice);
        result=inventoryManagement.takechoice(2);
        assert.equal(result,json.Pulses);
        result=inventoryManagement.takechoice(4);
        assert.equal(result,"invalid number");
        callback();

    })
/***
 * @description : it tests the inventory method
 */
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
