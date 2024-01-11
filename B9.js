let a =+prompt("Nhap so thu nhat");
let b =+prompt("Nhap so thu hai");
let c =+prompt("Nhap so thu ba");
if(a>b && b>c){
    console.log(c,b,a);
}else if(a>b && b<c){
    if(a<c){
        console.log(b,a,c);
    }else{
        console.log(b,c,a);
    }
}
if(b>a && a>c){
    console.log(c,a,b);
}else if(b>a && a>c){
    if(b>c){
        console.log(a,c,b);
    }else{
        console.log(a,b,c);
    }
}
if(c>a && a>b){
    console.log(b,a,c);
}else if(c>a && a<b){
    if(c>b){
        console.log(a,b,c);
    }else{
        console.log(a,c,b);
    }
}
