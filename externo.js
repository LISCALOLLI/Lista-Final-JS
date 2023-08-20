function Operacao(op){
    let res = "";
    if(op=="alerta"){
        window.alert("Olá Mundo!!!")
    }
    else if(op=="inicia"){
        let vl1 = parseFloat(window.prompt("Informe o primeiro valor")); 
        let vl2 = parseFloat(window.prompt("Informe o segundo valor"));
        if(vl2>vl1){
            res = "O maior número digitado foi "+vl2+" e o menor foi "+vl1;
        }
        else{
            res = "O maior número digitado foi "+vl1+" e o menor foi "+vl2;
        }
    }
    else if(op=="copiar"){
        const frase = document.querySelector('#frase').value;
        res = frase;
    }
    else if(op=="verifica"){
        let vl1 = parseFloat(document.querySelector('#valor1').value);
        if(vl1>0){
            res = "O valor é maior que 0";
        }
        else if(vl1<0){
            res = "O valor é menor que 0";
        }
        else{
            res = "O valor é igual a 0";
        }
    }
    else if(op=="impares"){
        let vl1 = parseFloat(document.querySelector('#valor1').value);
        for(let i = 1;i<vl1;i++){
            res = res+"<br>"+i;
            i+=1;
        }
    }
    document.querySelector('#resultado').innerHTML = res;
}