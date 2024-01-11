let a =+prompt("Nhap can nang");
let b =+prompt("Nhap chieu cao");
let bmi = a/(b*2);
if(bmi <18.5){
    console.log("can nang thap");
}else if(bmi>=18.5 && bmi <=24.9){
    console.log("Binh thuong");
}else if(bmi>=25){
    console.log("Thua can");
}else if(bmi > 25 && bmi <29.9){
    console.log("tien beo phi");
}else if(bmi > 30 && bmi < 34.9){
    console.log("beo phi do 1");
}else if(bmi > 35 && bmi < 39.9){
    console.log("beo phi do 2");
}else if(bmi >= 40){
    console.log("beo phi do 3");
}