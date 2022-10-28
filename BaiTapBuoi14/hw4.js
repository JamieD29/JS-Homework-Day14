var edge_A = 3;
var edge_B = 4;
var edge_C = 5;

var checkPytago = Math.sqrt(edge_A * edge_A + edge_B * edge_B);

if(edge_A === edge_B  && edge_C !== edge_A && edge_C !== edge_B){
    console.log("Tam giác cân");
} else if (edge_A === edge_B && edge_B === edge_C ){
    console.log("Tam giác đều");
}  else if(edge_C === checkPytago){
    console.log("Tam giác vuông");
}
/*
    Sơ đồ 3 khối: 
    1.Input: 
    - Nhập vào 3 cạnh, trong đó: 
    a, b là cạnh bên.
    c là cạnh đáy. 

    2.Process: (pesudo code)

    cho làm toán Pytago checkPytago = Math.sqrt(a * a + b * b);

    if(a === b  && c !== a && c !== b){
    console.log("Tam giác cân");
} else if (a === b && b === c ){
    console.log("Tam giác đều");
}  else if(c === checkPytago){
    console.log("Tam giác vuông");
}

    3.Output: 
    Xuất ra loại tam giác:
    -Tam giác cân
    -Tam giác đều
    -Tan giác vuông
*/ 