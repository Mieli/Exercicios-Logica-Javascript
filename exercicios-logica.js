
function verifyWeight(weight){
    let message = ""    
    if(weight > 120.2){
        message = "Peso acima do permitido";    
    } else if(weight > 92.9){
        message =  "Categoria Peso Pesado";   
    } else if(weight > 83.9){
        message =  "Categoria Peso Meio Pesado";   
    } else if(weight > 77.1){
        message =  "Categoria Peso Médio";   
    } else if(weight > 70.3){
        message =  "Categoria Peso Meio-Médio";   
    } else if(weight > 65.8){
        message =  "Categoria Peso Leve";   
    } else if(weight > 61.2){
        message =  "Categoria Peso Pena";   
    } else if(weight > 56.7){
        message =  "Categoria Peso Galo";   
    }else if(weight > 52.2){
        message =  "Categoria Peso Mosca";   
    }else{
        message = "Categoria Peso Palha";    
    }
    return message;
}

function verifyLargeNumber(number1, number2){
    return (number1 > number2) ? number1 : number2;
}

function verifyLessNumber(number1, number2){
    return (number1 < number2) ? number1 : number2;
}

function checkNumberIsEven(number){
    return ((number % 2) == 0) ? "PAR" : "IMPAR";
}

function verifyOfGreater(age){
    return (age < 18) ?  "Menor de Idade" : "Maior de Idade";;
}

function calculateAverage(note1, note2, note3){
    const average = (note1 + note2 + note3) / 3;
    if ( average >= 9 ){
        return "Conceito A";
    } else if ( average >= 8 ){
        return "Conceito B";
    } else if ( average >= 7 ){
        return "Conceito C";
    } else if ( average >= 6 ){
        return "Conceito D";
    } else {
        return "Conceito I";
    }
}

function calculatePercentDiscount(price, discount){
    if ( discount >= 25 ) {
        return "Percentual de desconto excede o limite de nossa política de preço";
    } else {
        let percentDiscount =  price * (discount / 100);
        return price - percentDiscount;
    }
}

function checkNumberIsEquals(number1, number2){
    const n1 = parseInt(number1);
    const n2 = parseInt(number2); 
    if(n1 === n2){
        return "Iguais";
    }
    return "Diferentes";
}


function myFunction(value){
    const FIRST_RANGE_PERCENT = 0;
    const SECOND_RANGE_PERCENT = 0.075;
    const THIRD_RANGE_PERCENT = 0.15;   
    const BASE = 1800.0; 
    let deduction = 0;
    let valueForDeduction =  0;
    if(value > 3500.0){
        valueForDeduction = value - BASE;
        deduction = valueForDeduction * THIRD_RANGE_PERCENT;
    } else if(value > BASE && value <= 3500 ){
        valueForDeduction = value - BASE;
        deduction = valueForDeduction * SECOND_RANGE_PERCENT;    
    }else{
        valueForDeduction = 0;
        deduction = valueForDeduction * FIRST_RANGE_PERCENT;    
    }
  
    return deduction;
}


function dayOfWeek(day){

    if (day < 1 || day > 7){
        return "Número inválido";
    } else if (day === 1) {
        return "Domingo";
    } else if (day === 2) {
        return "Segunda-feira";
    } else if (day === 3) {
        return "Terça-feira";
    } else if (day === 4) {
        return "Quarta-feira";
    } else if (day === 5) {
        return "Quinta-feira"
    } else if (day === 6) {
        return "Sexta-feira";
    } else{
        return "Sábado";
    }
}


module.exports = {
    verifyWeight,
    verifyLargeNumber,
    verifyLessNumber,
    checkNumberIsEven, 
    verifyOfGreater,
    calculateAverage,
    calculatePercentDiscount,
    checkNumberIsEquals,
    myFunction,
    dayOfWeek
}