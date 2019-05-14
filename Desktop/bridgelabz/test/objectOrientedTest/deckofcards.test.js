/***
 * @description: it gets the methods from regularExpressionsutil.js
 */
const deckofcardsutil=require('../../objectOrientedPrograms/utility/deckOfCardsutil')
let deckOfCards=new deckofcardsutil();
var assert=require('assert');
/***
 * @description: it gets the functions from regularExpressions.js file
*/
describe("To check deckof cards functions",()=>{
    /**
     * @description :it tests the nameValidation method.
     */
        it("raises to check the total2dcards method", (callback) => { 
            let result=deckOfCards.totalCards2D();
            assert.equal(result[0].length===13,true);
            assert.equal(result.length===4,true);
            assert.equal(result[3][12].card===12,true);
            assert.equal(result[3][12].suit===3,true);
            assert.equal(typeof (result[3][12]),"object");
            callback();
    
        })

        it("raises to check the random method upto 13", (callback) => { 
            let result=Math.floor(Math.random()*13);
            assert.equal(result<13,true);
            result=Math.floor(Math.random()*13);
            assert.equal(result<13,true);
            result=Math.floor(Math.random()*13);
            assert.equal(result<13,true);
            result=Math.floor(Math.random()*13);
            assert.equal(result<13,true);
            callback();
    
        })
    })
13