var number = 121;

var firstC = Math.floor(number / 100);

var midC = Math.floor(number / 10) % 10;

var lastC = number % 10;

var firstRead ="", midRead ="", lastRead ="";


console.log("3. Con số bạn vừa nhập là: ", firstC, midC, lastC);

switch(firstC){
    case 1:
        firstRead="Một trăm";
    break;
    case 2:
        firstRead="Hai trăm";
    break;
    case 3:
        firstRead="Ba trăm";
    break;
    case 4:
        firstRead="Bốn trăm";
    break;
    case 5:
        firstRead="Năm trăm";
    break;
    case 6:
        firstRead="Sáu trăm";
    break;
    case 7:
        firstRead="Bảy trăm";
    break;
    case 8:
        firstRead="Tám trăm";
    break;
    case 9:
        firstRead="Chín trăm";
    break;
    default:
        console.log("ERROR");   
}

if( midC === 0 && lastC !== 0){
    midRead=" lẻ";
}

switch(midC){
    case 1:
        midRead=" mười";
    break;
    case 2:
        midRead=" hai mươi";
    break;
    case 3:
        midRead=" ba mươi";
    break;
    case 4:
        midRead=" bốn mươi";
    break;
    case 5:
        midRead=" năm mươi";
    break;
    case 6:
        midRead=" sáu mươi";
    break;
    case 7:
        midRead=" bảy mươi";
    break;
    case 8:
        midRead=" tám mươi";
    break;
    case 9:
        midRead=" chín mươi";
    break;
    default:
    console.log("ERROR");
}

switch(lastC){
    case 1:
        lastRead=" một";
    break;
    case 2:
        lastRead=" hai ";
    break;
    case 3:
        lastRead=" ba ";
    break;
    case 4:
        lastRead=" bốn ";
    break;
    case 5:
        lastRead=" năm ";
    break;
    case 6:
        lastRead=" sáu ";
    break;
    case 7:
        lastRead=" bảy ";
    break;
    case 8:
        lastRead=" tám ";
    break;
    case 9:
        lastRead="chín ";
    break;
    default:
    console.log("ERROR");
}

console.log(firstRead + midRead + lastRead );

/*
       Sơ đồ 3 khối: 
    1.Input: 
     Số tự nhiên có 3 chữ số.


     2.Process: (pesudo code)

     cho 3 biến để lưu vị trí đơn vị, chục, trăm của các số và lấy số đó với công thức

     
    trăm = Math.floor(number / 100);

    chục = Math.floor(number / 10) % 10;

    đơn vị = number % 10;

  cho 3 biến lưu cách đọc 
  đọc hàng trăm = "" ;
  đọc hàng chục = "" ;
  đọc hàng đơn vị = "" ;

  check cách đọc bằng switch case ví dụ đọc cho hàng trăm:
  switch(trăm){
    case 1:
        đọc hàng trăm="Một trăm";
    break;
    case 2:
        đọc hàng trăm="Hai trăm";
    break;
    case 3:
        đọc hàng trăm="Ba trăm";
    break;
    case 4:
        đọc hàng trăm="Bốn trăm";
    break;
    case 5:
        đọc hàng trăm="Năm trăm";
    break;
    case 6:
        đọc hàng trăm="Sáu trăm";
    break;
    case 7:
        đọc hàng trăm="Bảy trăm";
    break;
    case 8:
        đọc hàng trăm="Tám trăm";
    break;
    case 9:
        đọc hàng trăm="Chín trăm";
    break;
    default:
        console.log("ERROR");   
}

các trường hợp khác tương tự

cách đọc hàng lẻ: 

if(chục === 0 && đơn vị !== 0){
    đọc hàng chục = "lẻ";
}


    
    3.Output: 
    Cách đọc số có 3 chữ số.

*/ 