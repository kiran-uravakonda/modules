var rect=require('./callback1.js')
function result(a,b){
    rect(a,b,(err,value)=>{
        if(err)
        {
            console.log("error " +err)
        }
        else
        {
            console.log(value["perimiter"]())
            console.log(value["area"]())
        }
    })
}

result(2,2)