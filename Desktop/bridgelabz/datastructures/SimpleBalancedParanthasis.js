/************************************************************************************
 * @purpose : it checks the expression is balanced or not                           *
 * @description :it uses the stack datastructure to check the expression is         * 
 *               balanced or not                                                    *
 ************************************************************************************/

var utilityStack=require('../Utility/stackutil');
var stack=new utilityStack();
var readline=require('readline-sync');
var input=readline.question("enter the expression to check it is balanced or not");
input=input+"";
for(let i=0;i<input.length;i++){
    
    let char=input.charAt(i);
    if(char=='('){
        stack.push(char);
    }
    else if(char==')'){
        stack.pop();
    }
}
if(stack.isEmpty()){
    console.log("expreseion is balanced");
}
else{
    console.log("expression is not balanced");
}