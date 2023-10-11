// ---------------1 sum of digits in array----------------------
{
    let a =[1,2,'34','56',7,'100'];
let sum =0;
function add(x){
    for(i=0;i<x.length;i++){
        if(typeof x[i]=='number'){
            sum= sum+x[i]
        }
    }
    return sum
}
let result = add(a)
console.log(result)
}
// -------------2 find the 2nd largest number in array----------------
{
    let a = [25,30,10,5,15,20]
    let ans
    function big(x){
        for(i=0;i<x.length;i++){
            for(j=i+1;j<x.length;j++){
                if(x[i]>x[j]){
                    let temp = x[i]
                    x[i]=x[j]
                    x[j]=temp;
                }
            }
            console.log(x[i])
        }
        ans = x[x.length-2]
    }

    let result= big(a)
    console.log(ans +" is the second largest number in the given array ")
}
// ----------------------3 object to array----------------------------
{
    let a
}
// ----------------------------4-------------------------
{
   

}