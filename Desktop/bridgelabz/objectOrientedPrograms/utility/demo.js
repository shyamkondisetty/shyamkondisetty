function StockAccount(filename){

let JSONfile={mystocks:[]};
let mystockArray=JSONfile.mystocks;
console.log(mystockArray.length);

this.hi=function(){
    console.log(JSONfile.mystocks);
}
}
let st=new StockAccount("hi");
st.hi();