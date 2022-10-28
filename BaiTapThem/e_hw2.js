var month = 2;
var year= 2000;


console.log("2. Tháng/ năm bạn đã nhập là:", month,"-",year);

if(( (year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8: 
        case 10:
        case 12:
            console.log("Tháng", month, "có 31 ngày");
            break;
        case 2: 
            console.log("Tháng", month, "có 29 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Tháng", month, "có 30 ngày");
            break;
        default:
            console.log("Tháng", month, "KHÔNG HỢP LỆ");
    }
}
else{
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8: 
        case 10:
        case 12:
            console.log("Tháng", month, "có 31 ngày");
            break;
        case 2: 
            console.log("Tháng", month, "có 28 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Tháng", month, "có 30 ngày");
            break;
        default:
            console.log("Tháng", month, "KHÔNG HỢP LỆ");
    }
}


/*
    Sơ đồ 3 khối: 
    1.Input: 
     tháng, năm;


     2.Process: (pesudo code)

    Kiểm tra năm nhuận bằng công thức:
     (year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0); 
    +Tháng 2 có 29 ngày;
    +Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày;
    +Tháng 2, 4, 6, 9, 11 có 30 ngày
    Không phải năm nhuận: 
     +Tháng 2 có 28 ngày;
    +Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày;
    +Tháng 2, 4, 6, 9, 11 có 30 ngày

    3.Output: 
    Xuất ra số ngày trong tháng đó
*/