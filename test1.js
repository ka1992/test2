function add(a, b){
 return a + b;
}

add(10, 20);



function add(a, b, callback){

 var result = a + b;
 
 callback(result);
}

// usage for callback function

add(10, 20, function(){
console.log(' result : ' + result);
})