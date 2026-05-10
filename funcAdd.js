function add(a,b){
   console.log("A+B=",a+b);
    return a+b
    
}

const check = (num)=>{
    if (num %2 ===0){
        console.log(num,"Is even.");
    }else{
        console.log(num,"Is odd.");
    }
}
check(add(5,3));
check(add(5,4));
add(125,763);

