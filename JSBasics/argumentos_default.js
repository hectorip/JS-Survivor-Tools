// Argumentos default
// 
function make_call(url, timeout, callback){
    timeout = timeout || 2000;
    callback = callback || function(){};

    console.log("Estoy llamando a la url: " + url);
    console.log("con timeout " + timeout);
    console.log("y el callback devuelve: " + callback());
}


function make_call_six(url, timeout=2000, callback=function(){}){
    console.log("Estoy llamando a la url: " + url);
    console.log("con timeout " + timeout);
    console.log("y el callback devuelve: " + callback());
}

// make_call_six("/hello", 5000, function(){ return "holi"});
make_call_six("/hello", 0);
// Shortcircuit logical operators

// console.log(5 == 5);
// console.log(5 <= 5);
// console.log(5 >= 5);
// console.log(5 != 5);

// console.log(0 || (()=> console.log("corri"))());
// console.log(1 && "Sicierto");
