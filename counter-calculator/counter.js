let count =0;

document.getElementById("btn-1").onclick=function(){
 count--
 document.getElementById("counter").innerHTML= count
  if (count<0) {
    document.getElementById("counter").style.color="red";
}
else if(count==0){

    document.getElementById("counter").style.color="black";
}
 }


document.getElementById("btn-2").onclick=function(){
count=0
document.getElementById("counter").innerHTML=count

document.getElementById("counter").style.color="black";
}


document.getElementById("btn-3").onclick=function(){
count++
document.getElementById("counter").innerHTML=count

if (count>0) {
    document.getElementById("counter").style.color="Green";
}
 else if(count==0){
    document.getElementById("counter").style.color="black";
}
 }