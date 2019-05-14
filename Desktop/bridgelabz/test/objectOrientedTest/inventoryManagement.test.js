/***
 * @description: it gets the JSON Object from inventoryManagement.json file
 */
//const json=require('../../objectOrientedPrograms/JSON/inventorymanagement.JSON');
/***
 * @description: it gets the functions from inventoryDataManagement.js file
 */
const inventorymanagement=require('../../objectOrientedPrograms/utility/inventoryDataManagementutil')
const inventoryManagement=new inventorymanagement()

var assert=require('assert');

/**
 * @description :To test the inventory management methods
 */
describe("To check inventory management functions",()=>{

/***
 * @description : it tests the inventory method
 */
    it("raises to check inventory method", (callback) => {  
        let result=inventoryManagement.inventory("5");;
        assert.equal(result,"invalid data");
        result=inventoryManagement.inventory("NaN");
        assert.equal(result,"please enter numeric value");
        callback();

    })
})
