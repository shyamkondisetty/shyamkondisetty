let fs=require('fs');
class StockAccount{

    constructor(filename){
        let JSONfile={};
        JSONfile=JSON.stringify(JSONfile)
        filename=filename+".JSON"
        fs.writeFile(filename, JSONfile, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
         
            console.log("JSON file has been saved.");
        });

        let report=[];
        let sellData=[];
        let buyData=[];
        function valueOf(){
        }
        function buy(amount,symbol){
        }
        function sell(amount,symbol){
        }
        function save(){
        }
        function printReport(){
        }

    }



}