
let a = parseInt(prompt("get value 1"));
let b = parseInt(prompt("get value 2"));
let c = parseInt(prompt("get value 3"));
if( a && b && c){
     if((a<=c && c<=b) || (a>=c && c>=b)){
        alert("value 3 is in range")
    }
    else{
        alert("value 3 not in range")
    }
}
else{
    alert("Invalid")
}