let a =+prompt("Nhap mon toan");
let b =+prompt("Nhap mon van");
let c =+prompt("Nhap mon anh");
let sum = a+b+c;
let tb = sum/3;
if(tb>=8 && tb<=10){
    console.log("Hoc sinh gioi");
}else if(tb<8 && tb>=5){
    console.log("Hoc sinh trung binh");
}else if(tb>=0 && tb <5){
    console.log("Hoc sinh yeu");
}