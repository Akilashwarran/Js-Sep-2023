var div1 = document.createElement('div');
div1.className='container';
var div2 = document.createElement('div');
div2.className='box';
btn1= document.createElement('button');
btn2= document.createElement('button');
btn3=document.createElement('button')
btn1.textContent='change bg';
btn2.textContent='Hexa code';
btn3.textContent='Count = 0'
btn1.className='btn-1';
btn2.className='btn-2';
div2.append(btn1)
div2.append(btn2)
div2.append(btn3)
div1.append(div2)
document.body.append(div1)
var i =0;
var count=1;
var clr = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
// function change(){
//     document.body.style.backgroundColor= clr[i];
//     // var hex = clr[i]
//     btn2.innerHTML= clr[i]
//     if(i==clr.length-1){
//         i=0;
//     }
//     else{
//         i++; 
//     }
// }
function change(){
    document.body.style.backgroundColor= clr[i];
    // var hex = clr[i]
    btn2.innerHTML= clr[i]
    btn3.innerHTML= 'count = '+count;
    if(i==clr.length-1){
        i=0;
        count=1;
    }
    else{
        i++;
        count=count+1
    }
}
btn1.addEventListener('click', change);
