var day = 28;
var month = 2;
var year = 2000; 
var nextDay, previousDay;
var month30 ;
var month31 ;
var previousYear;
var nextYear;

console.log("1. Ngày/ tháng/ năm - mà bạn nhập là: ", day,"/",month,"/",year);

if (( (year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    // Nếu là ngày cuối tháng 2
    if(day === 29 && month === 2){
        day = 1;
        month++;
        console.log("Ngày tiếp theo là ",day ,"/" , month ,"/", year);
        console.log("Ngày trước đó theo là ",day = 28 ,"/" , month = 2 ,"/",year);
    }
    // Kiểm tra ngày đầu tháng 3
    else
    if(day === 1 && month === 3){
        nextDay= day + 1;
        console.log("Ngày tiếp theo là ", nextDay ,"/" , month ,"/", year);
        console.log("Ngày trước đó theo là ",day = 29 ,"/" , month = 2 ,"/",year);
    }
    else
    //Kiểm tra ngày đầu tháng 1 
    if(day === 1 && month === 1){
        nextDay= day + 1;
        previousDay = 31;
        previousYear = year - 1;
        month31 = 12;
        console.log("Ngày tiếp theo là ", nextDay ,"/" , month ,"/", year);
        console.log("Ngày trước đó theo là ", previousDay ,"/" , month31 ,"/",previousYear);
    }
    else
    // Kiểm tra ngày đầu tháng có tháng trước là 30 ngày
    if(day === 1 && (month === 5 || month === 7 || month === 10 || month === 12 )){
        nextDay = day + 1;
        previousDay = 30;
        month30 = month - 1;
        console.log("Ngày trước đó là ", previousDay,"/", month30,"/",year);
        console.log("Ngày tiếp theo đó là ", nextDay,"/", month,"/",year);
    }else
     // Kiểm tra ngày đầu tháng có tháng trước là 31 ngày
    if(day === 1 && (month === 2 || month === 4 || month === 6 || month === 8 || month == 9 || month == 11 )){
        nextDay = day + 1;
        previousDay = 31;
        month31 = month - 1;
        console.log("Ngày trước đó là ", previousDay,"/", month31,"/",year);
        console.log("Ngày tiếp theo đó là ", nextDay,"/", month,"/",year);
    }
    else
    //Kiểm tra ngày cuối năm 
    if(day === 31 && month === 12){
        nextDay = 1;
        previousDay = day - 1;
        month31 = 1;
        nextYear = year + 1; 
        console.log("Ngày trước đó là ", previousDay,"/", month,"/", year);
        console.log("Ngày tiếp theo đó là ", nextDay,"/", month31,"/", nextYear);
    }else
    //Kiểm tra ngày cuối của các tháng có 31 ngày
    if(day === 31 &&( month === 1 || month === 3 ||month === 5 || month === 7 || month === 8 || month === 10 )){
        nextDay = 1;
        previousDay = day - 1;
        month30 = month + 1;
        console.log("Ngày trước đó là ", previousDay,"/", month,"/", year);
        console.log("Ngày tiếp theo đó là ", nextDay,"/", month30,"/", year);
    }else
    //Kiểm tra ngày cuối của các tháng có 30 ngày
    if(day === 30 &&( month === 4 || month === 6 ||month === 9 || month === 11 )){
        nextDay = 1;
        previousDay = day - 1;
        month31 = month + 1;
        console.log("Ngày trước đó là ", previousDay,"/", month,"/", year);
        console.log("Ngày tiếp theo đó là ", nextDay,"/", month31,"/", year);
    }
    


    else{

        nextDay = day + 1;
        previousDay = day - 1;
        console.log("Ngày trước đó là ", previousDay,"/", month,"/",year);
        console.log("Ngày tiếp theo đó là ", nextDay,"/", month,"/",year);
    
    }
}
// Trường hợp không phải năm nhuận
else{
        // Nếu là ngày cuối tháng 2
        if(day === 28 && month === 2){
            day = 1;
            month++;
            console.log("Ngày tiếp theo là ",day ,"/" , month ,"/", year);
            console.log("Ngày trước đó theo là ",day = 27 ,"/" , month = 2 ,"/",year);
        }
        // Kiểm tra ngày đầu tháng 3
        else
        if(day === 1 && month === 3){
            nextDay= day + 1;
            console.log("Ngày tiếp theo là ", nextDay ,"/" , month ,"/", year);
            console.log("Ngày trước đó theo là ",day = 28 ,"/" , month = 2 ,"/",year);
        }
        else
        //Kiểm tra ngày đầu tháng 1 
        if(day === 1 && month === 1){
            nextDay= day + 1;
            previousDay = 31;
            previousYear = year - 1;
            month31 = 12;
            console.log("Ngày tiếp theo là ", nextDay ,"/" , month ,"/", year);
            console.log("Ngày trước đó theo là ", previousDay ,"/" , month31 ,"/",previousYear);
        }
        else
        // Kiểm tra ngày đầu tháng có tháng trước là 30 ngày
        if(day === 1 && (month === 5 || month === 7 || month === 10 || month === 12 )){
            nextDay = day + 1;
            previousDay = 30;
            month30 = month - 1;
            console.log("Ngày trước đó là ", previousDay,"/", month30,"/",year);
            console.log("Ngày tiếp theo đó là ", nextDay,"/", month,"/",year);
        }else
         // Kiểm tra ngày đầu tháng có tháng trước là 31 ngày
        if(day === 1 && (month === 2 || month === 4 || month === 6 || month === 8 || month == 9 || month == 11 )){
            nextDay = day + 1;
            previousDay = 31;
            month31 = month - 1;
            console.log("Ngày trước đó là ", previousDay,"/", month31,"/",year);
            console.log("Ngày tiếp theo đó là ", nextDay,"/", month,"/",year);
        }
        else
        //Kiểm tra ngày cuối năm 
        if(day === 31 && month === 12){
            nextDay = 1;
            previousDay = day - 1;
            month31 = 1;
            nextYear = year + 1; 
            console.log("Ngày trước đó là ", previousDay,"/", month,"/", year);
            console.log("Ngày tiếp theo đó là ", nextDay,"/", month31,"/", nextYear);
        }else
        //Kiểm tra ngày cuối của các tháng có 31 ngày
        if(day === 31 &&( month === 1 || month === 3 ||month === 5 || month === 7 || month === 8 || month === 10 )){
            nextDay = 1;
            previousDay = day - 1;
            month30 = month + 1;
            console.log("Ngày trước đó là ", previousDay,"/", month,"/", year);
            console.log("Ngày tiếp theo đó là ", nextDay,"/", month30,"/", year);
        }else
        //Kiểm tra ngày cuối của các tháng có 30 ngày
        if(day === 30 &&( month === 4 || month === 6 ||month === 9 || month === 11 )){
            nextDay = 1;
            previousDay = day - 1;
            month31 = month + 1;
            console.log("Ngày trước đó là ", previousDay,"/", month,"/", year);
            console.log("Ngày tiếp theo đó là ", nextDay,"/", month31,"/", year);
        }
        
    
    // Các trường hợp còn lại
        else{
    
            nextDay = day + 1;
            previousDay = day - 1;
            console.log("Ngày trước đó là ", previousDay,"/", month,"/",year);
            console.log("Ngày tiếp theo đó là ", nextDay,"/", month,"/",year);
        
        }
}


/*
    Sơ đồ 3 khối: 
    1.Input: 
    Ngày,  tháng, năm;


     2.Process: (pesudo code)

    Kiểm tra năm nhuận bằng công thức:
     (year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0); 
    -Là năm nhuận thì trường hợp ngày cuối tháng 2 là ngày 29 thì phải xuất ra là 28/2 và 1/3
    -Kiểm tra các ngày đầu tháng
    + Tháng 3 thì phải xuất ra 1/3 -> 29/2 và 2/3
    + Tháng 1 thì phải xuất ra thêm năm trước đó 1/1/2000 -> 31/12/1999 - 2/1/2000
    + Tháng 5, 7, 10, ,12 thì phải xuất ra ngày 30 của tháng trước  1/5 -> 30/4 - 2/5
    + Tháng 2, 4, 6, 8 ,9, 11 thì phải xuất ra ngày 31 của tháng trước 1/4 -> 31/3 - 2/4
    -Kiểm tra các ngày cuối tháng
    +Tháng 12 thì phải xuất ra thêm năm kế tiếp 31/12/2000 -> 30/12/2000 - 1/1/2001
    +Tháng 1,3,5,7,8,10 thì xuất ra ngày kế tiếp của tháng có 30 ngày 31/3 -> 30/3 - 1/4
    +Tháng 4,6,9,11 thì xuất ra ngày kế tiếp của tháng có 31 ngày 30/4 -> 29/4 - 1/5
    +Tháng 2 thì xét từ ngày 29       29/2 -> 28/2 - 1/3

    Không phải là năm nhuận: 
    -Kiểm tra ngày cuối tháng 2 với ngày 28      28/2 -> 27/2 - 1/3 
    -Kiểm tra ngày đầu tháng 3  với   1/3 -> 28/2 - 2/3
    -Tương tự các trường hợp trên 

    Còn lại xét bình thường chỉ cần tăng ngày cho ngày mai và giảm ngày cho hôm qua. 

    3.Output: 
    Xuất hôm qua và ngày mai của ngày bạn đã nhập;
*/