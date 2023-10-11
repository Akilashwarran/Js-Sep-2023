var div1=document.createElement('div')
div1.className='container';
var div2=document.createElement('div')
div2.className='banner';
var div3=document.createElement('div')
div3.className='box';
var btn1=document.createElement('button')
btn1.textContent='previous'
var btn2=document.createElement('button')
btn2.textContent='reset'
var btn3=document.createElement('button')
btn3.textContent='next'
var image=document.createElement('img')
div2.append(image)
div3.append(btn1,btn2,btn3);
div1.append(div2,div3);
document.body.append(div1)
var i=-1
var clr=['1.jpeg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
div2.style.backgroundImage= "url(Wallpaper.jpg)";
div2.style.backgroundSize='Cover'
function nxt(){
    
    if(i==clr.length-1){
        // div2.style.backgroundImage= "url(Wallpaper.jpg)"
        i=0;
        console.log(clr[i])
        div2.style.backgroundImage= "url("+clr[i]+")";
    }
    else{

        i++; 
        console.log(clr[i])
        div2.style.backgroundImage= "url("+clr[i]+")";
    }
   

}
function prev(){
    if(i==0 || i==-1){
        // div2.style.backgroundImage="url(Wallpaper.jpg)"
        i=5;
        console.log(clr[i])
        div2.style.backgroundImage= "url("+clr[i]+")"
    }
    else{
        i--; 
        console.log(clr[i])
        div2.style.backgroundImage= "url("+clr[i]+")"
    }
    
    
    
}
function res(){
    div2.style.backgroundImage="url(Wallpaper.jpg)"
    i=-1;
}
btn1.addEventListener('click',prev)
btn3.addEventListener('click',nxt)
btn2.addEventListener('click',res)