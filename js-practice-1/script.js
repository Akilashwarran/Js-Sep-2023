let arr = [1,2,"33",5,"45","160"];
for(var i = 0; i<arr.length; i++){
    if((typeof arr[i]==="number")&& (typeof arr[i+1]==="number")){
        
        console.log(arr[i])
        arr[i]=arr[i]+arr[i+1]
        console.log(arr[i])
    }
}