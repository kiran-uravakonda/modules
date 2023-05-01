module.exports=(x,y,callback)=>{
    if(x<=0 || y<=0)
    {
        
        callback("invalid credentials",null)
    }
    else
    {
    
        callback(null,{
            perimiter:()=>(2*(x*y)),
            area:()=>(x*y)
        })
    }
}
