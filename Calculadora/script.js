function calculadora(){
    v1 = parseInt(document.form1.v1.value);
    v2 = parseInt(document.form1.v2.value);
    op = document.form1.op.value;
    if(op=="ad"){
        res = v1 + v2
    } else if(op=="su"){
        res = v1 - v2
    } else if(op=="mu"){
        res = v1 * v2
    } else if(op="di"){
        if(v2!=0){
        res = v1 / v2
    } else{
        res= "div/0"
    }
}
    document.form1.res.value = res
}