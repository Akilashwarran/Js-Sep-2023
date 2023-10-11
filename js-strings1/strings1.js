let str = "The quick brown fox jumps over the lazy dog";
console.log(str)
let array = str.split(" ");
console.log(array);
// ---------------------------------------------------------

// let a = prompt("enter value");
// if(a.slice(-10)== "@gmail.com"){
//     if(a.length >=16){
//         let enc= a.slice(0,4);
//         console.log(enc+"...@gmail.com")
//     }
//     else{
//         let encx= a.slice(0,3);
//         console.log(encx+"...@gmail.com");
//     }
// }
// else{
//     console.log("not a mail id")
// }
// let a= prompt("Enter a value")
// a= a.trim();
// if(a.length==0)
// {
//     console.log("true")
// }
// else{
//     console.log("False")
// }

// ----------------------
{
function chk(input) {
    if (typeof input === 'string') {
      return 'String.';
    } else if (typeof input === 'number' && !isNaN(input)) {
      return 'Number.';
    } else {
      return 'Invalid';
    }
  }
  

  let a = prompt('Get value');
    let result = chk(a);
    console.log(result);
}
// ---------------
{
    let a = prompt("Enter a value")
let b = prompt("Enter a Startindex")
let c = prompt("Enter a Endindex")
let d= a.slice(b,c)
console.log(d)
} 
