function OnClick(){
    let a=parseInt(document.getElementById('main-input').value);
    let arry=[];

    if(!isNaN(a)){
        for (let i = 1; i < a; i++) {
            arry[i]='';

            if(i%3===0){
                arry[i]='Fizz';
            }
            if(i%5===0){
                arry[i]=arry[i]+'Buzz';
            }
            if(arry[i]===''){
                arry[i]=i
            }
            console.log(arry[i]);
        }
    }else{
        document.getElementById('main-result').innerHTML='Ingresa un valor numerico';
        console.log('Ingresa un valor numerico');
    }
    
}