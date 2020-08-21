const p = new Promise (function(resolve,reject){
    setTimeout(function(){
        // resolve({id:1,"name":"chayaphon"})
        reject(new Error('Error 404 Bad Request'));
    },2000);
});
console.log('Before Async Operation');
p.then(function(result){
    console.log('this is result:',result);
})
.catch(function(err){
    console.log(err.message);
});