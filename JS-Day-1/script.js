// Types of function

    // 1.Regular function

    // function sample(a){
    
    // console.log(a,"sample");
    // }
    // sample(5)  



    // function sample(){
    //     return "sample";
    // }
    // console.log(sample());



    // 2.Arrow function  
    // It doesn't need return statement and it follows asynchronous function.   

    // const sample=()=>console.log("sample")
    // sample()



    // const sample=()=>"sample"
    // console.log(sample())



    // const sample=(a,b)=>{
    //     return a+b;
    // }
    // console.log(sample(5,10))



    // const sample=(a,b)=>a+b;
    // console.log(sample(5,10))



    // Asynchronous function: we can move to another task before the previous one finishes its execution.



    // 3.Callback function
    // In callback function if we pass a function as an argument inside another function
    callback=demo()
    
    function sample(callback){
        console.log("sample");
        callback();
    }
    function demo(){
        console.log("demo");
    }
    sample(demo);