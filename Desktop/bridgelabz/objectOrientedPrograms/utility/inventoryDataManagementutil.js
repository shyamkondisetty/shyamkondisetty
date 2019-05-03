
module.exports={
/*
* function inventory () is used to get the json data from objects and returning as string
*/
inventory(choice) {
    var result = this.takechoice(choice);
    if (result != "invalid data" &&result != undefined) {
        var stringdata = "[";
        for (let i = 0; i < result.length; i++) {
            if (i > 0) {
                stringdata = stringdata + ","
            }
            
            stringdata = stringdata + "{ name: " + result[i].name + ", weight: " + result[i].weight + ", price: " + result[i].price +", totalprice: "+result[i].weight*result[i].price+ " }"
        }

        stringdata = stringdata + "]";
            /*
            * calculate total and returning as a particular object
            */
        if (choice == 1) {
            return "Rice: " + stringdata;
        }
        else if (choice == 2) {
            return "Pulses: " + stringdata;
        }
        else if (choice == 3) {
            return "Wheats: " + stringdata;
        }
    }
    else if (result == "invalid data") {
        return result;
    }
    else {
          /**
         * validating a number item
         */
        return "please enter numeric value";
    }
},

/*
* function takechoice() is used to ctake choice from the user
*/
takechoice(choice) {
    const fs = require('fs');//filesystem module to get files
    var data = fs.readFileSync('../objectOrientedPrograms/JSON/inventorymanagement.JSON');
/*
* function JSON.parse() is used to convert the string into a JavaScript Objects
*/
    var jsonData = JSON.parse(data);
    //validation
    if (!isNaN(choice)) {
        switch (choice) {
            case 1: return jsonData.Rice;
            case 2: return jsonData.Pulses;
            case 3: return jsonData.Wheats
            default: return "invalid data"

        }
    }
}
}