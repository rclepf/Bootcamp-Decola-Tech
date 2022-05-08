function compNum(num1, num2){
    const Iguais = saoIguais(num1, num2);
    const Somas = soma(num1, num2);

    return `${Iguais} ${Somas}`
}

function saoIguais(num1, num2){
    let igual = '';
    
    if(num1 !== num2){
        igual = 'não';
    }

    return `Os números ${num1} e ${num2} ${igual} são iguais.`
};

function soma(num1, num2){
    const adicao = num1 + num2;
    
    let result10 = 'menor';
    let result20 = 'menor';    
    const compara10 = adicao > 10;
    const compara20 = adicao > 20;

    if(compara10) {
        result10 = 'maior'
    }
    
    if(compara20){
        result20 = 'maior'
    }

    return `Sua soma é ${adicao}, que é ${result10} que 10 e ${result20} que 20.`
}

console.log(compNum(6, 6));

