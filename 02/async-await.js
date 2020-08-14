const myAsyncFunc = async()=>{
    try{
    const result = await Promise.resolve('Async Function');
    console.log(resut);
    }catch(error){
        console.log(error.message);
    }
}
myAsyncFunc;