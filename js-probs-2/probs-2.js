// 1 -----------------
let age = convertAge(65);
console.log(age);

function convertAge(x){
    return x*365;
}

// 2 ----------------
let sum = condition(22,15);
console.log(sum);

function condition(x,y){
   return x+y<100?true:false;
   
}

// 3 ---------------
let sec = convertsec(2);
console.log(sec);

function convertsec(x){
    return x*60*60;
}

// 4 ---------------------
let s = angles(4);
console.log(s);

function angles(x){
    return ((x-2)*180);
}

// 5 ----------------
let text = func("is better than nothing");
console.log(text);

function func(x){
    return "something"+" "+x;
}

// 6 ----------------
let calc = calculate(5);
console.log(calc);

function calculate(x){
    return 0>=x?true:false;
}

// 7 --------------------------
let logic = and(1,0)
console.log(logic);

function and(x,y){
    return x&&y;
}

// 8 ---------------------------
let legs = count(2,3,5);
console.log(legs);

function count(x,y,z){
    return ((x*2)+(y*4)+(z*4));
}

// 9 -----------------------
let values = chkEquality(1,"1");
console.log(values);

function chkEquality(x,y){
    return x===y;
}

// 10 -----------------------
let fix = isseven(7);
console.log(fix);

function isseven(x){
    return x===7;
}
