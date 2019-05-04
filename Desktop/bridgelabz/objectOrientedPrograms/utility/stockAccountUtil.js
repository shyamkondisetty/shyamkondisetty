
let fs=require('fs');
var JSONdata="";
class StockAccount{

    constructor(filename){
        let JSONfile={};
        JSONfile=JSON.stringify(JSONfile)
        filename=filename+".JSON"
        JSONdata=fs.writeFile(filename, JSONfile, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
         
            console.log("JSON file has been saved.");
        });

    }
    


}
let st=new StockAccount("shyam");