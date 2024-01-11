let a = +prompt("Nhap 1 so");
if(a%2==0 && a>0 && a<100){
    console.log("Day la so chan",a);
}else if(a<0 && a>100){
    console.log("khong hop le");
}
else{
    console.log("day la so le",a);
}