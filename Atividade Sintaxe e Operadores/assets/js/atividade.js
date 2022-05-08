function compNum(num1, num2){
    const Iguais = num1 === num2;
    const soma = num1 + num2;

    if(Iguais){
        return "São iguais.";
    }

    return "Não são iguais.";
}