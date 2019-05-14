
        var Stock=require('/home/admin6/Desktop/bridgelabz/test/objectOrientedTest/report');
        var StockReeport=new Stock();

        var assert=require('assert');
        
        /**
         * @description :To test the inventory management methods
         */
        describe("To check stockReport functions",()=>{
            
        
        /***
         * @description : it tests the number validation method
         */
            it("raises to check the number validation", (callback) => {   
                let result=StockReeport.numberValidation("hi");
                assert.equal(result,false);
                result=StockReeport.numberValidation(7);
                assert.equal(result,true);
                StockReeport.numberValidation("shyam")
                assert.equal(result,true);
                callback();
        
            })
        
        
           it("raises to check the both choice and buystocks validation", (callback) => {   
                let result=StockReeport.choiceAndBuyStocksValidation(1,5);
                assert.equal(result,true);
                result=StockReeport.choiceAndBuyStocksValidation("hi",5);
                assert.equal(result,"enter numeric values for choice");
                StockReeport.choiceAndBuyStocksValidation("1","shyam")
                assert.equal(result,"enter numeric values for choice");
                callback();
        
            })
        });
        
        
        
        
        
        
        
        
       