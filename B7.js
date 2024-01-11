let a =+prompt("Nhap so thu nhat");
let b =+prompt("Nhap so thu hai");
let c =+prompt("Nhap so thu ba");
if(a>b && b>c){
    console.log("a la so lon nhat");
}else if(a>b && b<c){
    if(a<c){
        console.log("a la so lon nhat");
    }else{
        console.log("c la so lon nhat");
    }
}
if(b>a && a>c){
    console.log("B la so lon nhat");
}else if(b>a && a>c){
    if(b>c){
        console.log("B la so lon nhat");
    }else{
        console.log("c la so lon nhat");
    }
}
if(c>a && a>b){
    console.log("C la so lon nhat");
}else if(c>a && a<b){
    if(c>b){
        console.log("C la so lon nhat");
    }else{
        console.log("B la so lon nhat");
    }
}
