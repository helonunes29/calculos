function atv1(){
    //window.alert("cubica")
    var var1 = document.getElementById("valAtv1");
    var result = var1.value * var1.value * var1.value;

    //window.alert(var1.value * var1.value * var1.value)
    document.getElementById("resultado").innerText = result;
}

function atv2(){
    //window.alert("conversão de Fahrenheit para Celsius")
    var F = document.getElementById("valAtv2");
    var conversao = (F.value - 32) * 0.5556;
    
   
    //window.alert((var1.value - var2) * var3)
    document.getElementById("resultado2").innerText = conversao;
}

function atv3(){
    //window.alert("base do triângulo")
    var base = document.getElementById("x");
    var altura = document.getElementById("y");
    var area = (base.value * altura.value) / 2;

    //window.alert((base.value * altura.value) / 2)
    document.getElementById("resultado3").innerText = area;
}

function atv4(){
    //window.alert("raio do circulo")
    var raio = document.getElementById("raio").value;
    var pi = 3.14;
    

    //window.alert("calcular a area do circulo")
    var areaCirculo = pi * (raio ** 2);

    //window.alert("calcular o perimetro do circulo")
    var perimetroCirculo = 2 * pi * raio;

    //window.alert(pi * r ** 2;)
    document.getElementById("resultadoArea").innerText = areaCirculo;
    
    //window.alert(2 * pi * r;)
    document.getElementById("resultadoPerimetro").innerText = perimetroCirculo;
}

function atv5(){
    //window.alert("valor do produto")
    var valor = document.getElementById("valor").value;

    //window.alert("porcentagem do desconto")
    var porcentagem = 0.05 * 100;

    //window.alert("preço tirando a porcentagem do desconto")
    var desc = valor - porcentagem;

    document.getElementById("resultado5").innerText = porcentagem;
    document.getElementById("desconto").innerText = desc;
}

function atv6() {
    var dataNascimento = document.getElementById("nascimento").value;
    var anoAtual = 2023;
    var idade = anoAtual - dataNascimento;
    var maior = document.getElementById("maior");
    var menor = document.getElementById("menor");
    if (idade >= 18) {
        maior.innerHTML = "Maior de idade";
        menor.innerHTML = "";
    } else {
        menor.innerHTML = "Menor de idade";
        maior.innerHTML = "";
    }
}

function atv7(){
    var dinheiro= document.getElementById("dinheiro").value;
    var litros= dinheiro/5;
    var km= litros*20;
    
    document.getElementById("resultadolitro").innerText = litros.toFixed(2);
    document.getElementById("resultadokm").innerText = km.toFixed(2);
}