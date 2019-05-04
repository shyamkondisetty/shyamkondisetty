const fs = require('fs');
var readline = require('readline-sync');
var data = fs.readFileSync('../objectOrientedPrograms/JSON/inventorymanagement.JSON');
var jsonData = JSON.parse(data);
console.log("INVENTORY MANAGEMENT");
console.log("eneter the choice return the data");
console.log("1 Rice ||2 Pulses||3 Wheats");
var choice = readline.question("");
choice = parseInt(choice);
function takechoice(choice) {
    if (!isNaN(choice)) {
        switch (choice) {
            case 1: return jsonData.Rice;
            case 2: return jsonData.Pulses;
            case 3: return jsonData.Wheats
            default: return "invalid data"

        }
    }
}

function inventory(choice) {

    var result = takechoice(choice);
    if (result != "invalid data" &&result != undefined) {
        var stringdata = "[";
        for (let i = 0; i < result.length; i++) {
            if (i > 0) {
                stringdata = stringdata + ","
            }
            stringdata = stringdata + "{ name: " + result[i].name + ", weight: " + result[i].weight + ", price: " + result[i].price + " }"
        }

        stringdata = stringdata + "]";

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
        return "please enter numeric value";
    }
}

console.log(inventory(choice));


