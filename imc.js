const calcular = document.getElementById('calcular');
calcular.addEventListener('click', imc)

function imc(){
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultado = document.getElementById('resultado');

    if(name !== '' && weight !== '' && height !== ''){
        
        const valorIMC = (weight/(height * height)).toFixed(1);
        resultado.textContent = valorIMC;

        let classification = "";

        if(valorIMC < 18.5){
            classification = "abaixo do peso. Cuidado! Ser magro demais não é saudável!";
        }else if(valorIMC <= 25){
            classification = "com peso ideal. Parabéns! Mantenha-se saudável!";
        }else if(valorIMC <= 30){
            classification = "levemente acima do peso. Cuide da alimentação e faça atividades físicas.";
        }else if(valorIMC > 30){
            classification = "com obesidade.Cuidado! Sua saúde está em risco!";
        }
        
        resultado.textContent = `${name} seu IMC é igual a ${valorIMC} e você está ${classification}`;
    }else{
        resultado.textContent = "Preencha todos os campos."
    }
}

