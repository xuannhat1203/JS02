let year = +prompt("NHap nam sinh cua ban");
let now = new Date();
if(year < 0){
    alert("khong hop le");
}else{
    if( (now.getFullYear() - year < 0)){
        console.log("khong hop le");
    }else{
        console.log("tuoi cua ban hien tai la:", now.getFullYear() - year );
    }
    
}