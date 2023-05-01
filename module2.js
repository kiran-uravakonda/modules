var rect=require('./module1.js')
function result(a,b)
{
    if(a<=0 || b<=0)
    {
        console.log("invalid values")
    }
    else
    {
        console.log(rect["perimiter"](a,b))
        console.log(rect["area"](a,b))
    }
}
result(0,1)
result(2,2)
result(-3,2)
result(0,0)


