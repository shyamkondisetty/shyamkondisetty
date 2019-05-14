/***
 * @description: it gets the methods from regularExpressionsutil.js
 */
const regularExpressionsUtil=require('../../objectOrientedPrograms/utility/regularExpressionsutil')
const regularExpressionsutil=new regularExpressionsUtil()
var assert=require('assert');
/***
 * @description: it gets the functions from regularExpressions.js file
 */
describe("To check regular expressions  functions",()=>{
/**
 * @description :it tests the nameValidation method.
 */
    it("raises to check the namevalidation", (callback) => { 
        let result=regularExpressionsutil.nameValidation("shyam")
        assert.equal(result,true);
        result=regularExpressionsutil.nameValidation("6666")
        assert.equal(result,false);
        result=regularExpressionsutil.nameValidation("sh")
        assert.equal(result,false);
        callback();

    })
/**
 * @description :it tests the fullnameValidation method.
 */

    it("raises to check the fullnameValidation", (callback) => {   
        let result=regularExpressionsutil.fullnameValidation("Shyamkondisetty")
        assert.equal(result,true);
        result=regularExpressionsutil.fullnameValidation("shyam")
        assert.equal(result,false);
        result=regularExpressionsutil.fullnameValidation("66666")
        assert.equal(result,false);
        callback();

    })

/**
 * @description :it tests the mobilenumberValidation method.
 */

    it("raises to check the mobilenumberValidation", (callback) => {   
        let result=regularExpressionsutil.mobileNumberValidation("7382008456");
        assert.equal(result,true);
        result=regularExpressionsutil.mobileNumberValidation("abcdefgjgjhkl")
        assert.equal(result,false);
        result=regularExpressionsutil.mobileNumberValidation("7382008")
        assert.equal(result,false);
        callback();

    })
/**
 * @description :it tests the getDate method.
 */

    it("raises to check the getDate", (callback) => { 
        let date=new Date();
        date=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(); 
        let result=regularExpressionsutil.getDate();
        assert.equal(result,date);
        callback();

    })
})