var n1,n2,n3; 

n1=2; 
n2=1;
n3=3;

var countEven=0;
var countOdd=0;

if (n1 % 2 === 0){
    countEven ++;
}else{
    countOdd ++;
}

if (n2 % 2 === 0){
    countEven ++;
}else{
    countOdd ++;
}

if (n3 % 2 === 0){
    countEven ++;
}else{
    countOdd ++;
}

console.log("Có",countEven, "số chẵn.");
console.log("Có", countOdd, "số lẻ.");

/*
    Sơ đồ 3 khối: 
    1.Input: 
    Nhập 3 số tự nhiên

    2.Process: (pesudo code)
    
    if (number 1 % 2 === 0){
    countEven ++;
}
else{
    countOdd ++;}
     
    tương tự cho 2 số còn lại

    3.Output: 
    
    Bao nhiêu số chẵn, lẻ.
*/ 