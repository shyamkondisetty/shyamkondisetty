const userservice=require('../services/user.services');
exports.registerCtrl=(req,res)=>{
    let responseResult={}
    userservice.registerService(req.body,(err,result)=>{
        if(err=="exists"){
            responseResult.err="email is already exits";
            responseResult.data=result;
            responseResult.status=false;
            res.status(500).send(responseResult);
        }
        else if(err){
            responseResult.err=err;
            responseResult.status=false;
            res.status(500).send(responseResult)
        }
        else{
            responseResult.data=result;
            responseResult.status=true;
            res.status(200).send(responseResult);
        }
    })


}
exports.loginCtrl=(req,res)=>{
    let responseResult={}
    userservice.loginService(req.body,(err,result)=>{
        if(err=="Not Exists"){
            responseResult.err="email is not registered";
            responseResult.status=false;
            res.status(500).send(responseResult);
        }
        else if(err){
            responseResult.err=err;
            responseResult.status=false;
            res.status(500).send(responseResult);
        }
        else{
            responseResult.data=result;
            responseResult.status=true;
            res.status(200).send(responseResult)
        }
    })
}

exports.resetCtrl=(req,res)=>{
    let responseResult={}
    userservice.resetService(req.body,(err,result)=>{
        if(err=="Not Exists"){
            responseResult.err="email is not registered";
            responseResult.status=false;
            res.status(500).send(responseResult);
        }
        else if(err){
            responseResult.err=err;
            responseResult.status=false;
            res.status(500).send(responseResult)
        }
        else{
            responseResult.data=result;
            responseResult.status=true;
            res.status(200).send(responseResult);
        }
    })
}

exports.forgetCtrl=(req,res)=>{
    let responseResult={}
    userservice.forgetService(req.body,(err,result)=>{
        if(err=="Not Exists"){
            responseResult.err="email is not registered";
            responseResult.status=false;
            res.status(500).send(responseResult);
        }
        else if(err){
            responseResult.err=err;
            responseResult.status=false;
            res.status(500).send(responseResult)
        }
        else{
            responseResult.data=result;
            responseResult.status=true;
            res.status(200).send(responseResult);
        }
    })
}