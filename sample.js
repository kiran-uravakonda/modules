function first(msg,callback)
{
    callback();
        console.log(msg);
        // callback();
    
}

function second()
{
    console.log("second number")
}
first("first number",second)