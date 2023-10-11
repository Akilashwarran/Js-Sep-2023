let  a = prompt("get value 1");
let b = prompt("Get value 2");
let c = prompt("get value 3");

if(a==b & a==c ){
    console.log("All 3 values are equal");
}
else if(a==b & a>c){
    console.log("Values 1&2 are equal and are greater than value 3");
}
else if(a==b & a<c){
    console.log("Values 1&2 are equal and value 3 is the reatest")
}
else if(b==c & b>a){
    console.log("Values 2&3 are equal and are greater than value 1");
}
else if(b==c & a>c){
    console.log("Values 2&3 are equal and value 1 is the reatest")
}
else if(a==c & b<a){
    console.log("Values 1&3 are equal and are greater than value 2");
}
else if(a==c & b>c){
    console.log("Values 1&3 are equal and value 2 is the reatest")
}
else if(a>b & a>c){
    console.log("Value 1 is the greatest");
}
else if(b>a & b>c){
    console.log("value 2 is the greatest");
}
else if(c>a & c>b){
    console.log("value 3 is the greatest")
}