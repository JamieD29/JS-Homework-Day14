var student1 = "Johny Dang";
var stu1_X = 4;
var stu1_Y = 5;

var student2 = "Khoa Pug";
var stu2_X = 8;
var stu2_Y = 9;

var student3 = "Vuong Pham";
var stu3_X = 12;
var stu3_Y = 17;

var school_X= 12;
var school_Y = 18;

console.log("3. Tìm học sinh xa trường nhất !!!");


function CaculateLocation (x1,y1,x2,y2){
    var location = Math.sqrt((x2-x1) * (x2-x1) + (y2-y1) * (y2-y1));
    location = Math.round(location);
    return location;
}

var stu1_distance = CaculateLocation(stu1_X,stu1_Y,school_X,school_Y);

var stu2_distance = CaculateLocation(stu2_X,stu2_Y,school_X,school_Y);

var stu3_distance = CaculateLocation(stu3_X,stu3_Y,school_X,school_Y);

if ( stu1_distance > stu2_distance && stu1_distance > stu3_distance ){
    console.log("Học sinh xa trường nhất là", student1);
}else
if ( stu2_distance > stu1_distance && stu2_distance > stu3_distance ){
    console.log("Học sinh xa trường nhất là", student2);
}
else{
    console.log("Học sinh xa trường nhất là", student3);
}




/*
       Sơ đồ 3 khối: 
    1.Input: 
    Toạ độ của học sinh 1,2,3;
    Toạ độ của trường học; 


     2.Process: (pesudo code)
    -Lấy tên, toạ độ x, y của học sinh 1, 2, 3; 
    -Lấy toạ độ x, y của trường; 

    -Tạo hàm tính khoảng cách từ học sinh đến trường với công thức 

    Distance = Math.sqrt((x_school - x_student) * (x_school - x_student) + (y_school - y_student) * (y_school - y_student))
    
    cho từng học sinh.

    - Lấy khoảng cách của từng học sinh so sánh 

    if hs 1 > hs 2 và hs 1 > hs 3 
         xuất ra học sinh 1; 

    if hs2 > hs 1 và h 2 > hs 3 
        xuẩt ra học sinh 2 ;
    else
        xuất ra học sinh 3;
    
    3.Output: 
    -Học sinh nào là xa trường

*/ 