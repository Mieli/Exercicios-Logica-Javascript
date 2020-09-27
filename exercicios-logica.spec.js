const moduleLogic = require('./exercicios-logica');

describe('Testing Exercise 01', () => {

   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 51, o resultado deve ser "Categoria Peso Palha" ', () => {
      expect(moduleLogic.verifyWeight(51)).toBe("Categoria Peso Palha");
   });
   
   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 130, o resultado deve ser "Peso acima do permitido" ', () => {
      expect(moduleLogic.verifyWeight(130)).toBe("Peso acima do permitido");
   });
   
   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 75.7, o resultado deve ser "Categoria Peso Meio-Médio" ', () => {
      expect(moduleLogic.verifyWeight(75.7)).toBe("Categoria Peso Meio-Médio");
   });

   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 60.3, o resultado deve ser "Categoria Peso Galo" ', () => {
      expect(moduleLogic.verifyWeight(60.3)).toBe("Categoria Peso Galo");
   });

   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 84.1, o resultado deve ser "Categoria Peso Meio Pesado" ', () => {
      expect(moduleLogic.verifyWeight(84.0)).toBe("Categoria Peso Meio Pesado");
   });

   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 93, o resultado deve ser "Categoria Peso Pesado" ', () => {
      expect(moduleLogic.verifyWeight(93)).toBe("Categoria Peso Pesado");
   });

   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 53, o resultado deve ser "Categoria Peso Mosca" ', () => {
      expect(moduleLogic.verifyWeight(53)).toBe("Categoria Peso Mosca");
   });
   
   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 64, o resultado deve ser "Categoria Peso Pena" ', () => {
      expect(moduleLogic.verifyWeight(64)).toBe("Categoria Peso Pena");
   });

   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 78.3, o resultado deve ser "Categoria Peso Médio" ', () => {
      expect(moduleLogic.verifyWeight(78.3)).toBe("Categoria Peso Médio");
   });

   it('Quando chamo a função verifyWeight, passando o valor da variavel weight = 65.9, o resultado deve ser "Categoria Peso Leve" ', () => {
      expect(moduleLogic.verifyWeight(65.9)).toBe("Categoria Peso Leve");
   });   
   
});


describe('Testing Exercise 02', () => {

   it('Quando chamo a função  verifyLargeNumber passando como parametro os numeros 5, 7, o resultado deve ser igual ao numero 7', () => {
      expect(moduleLogic.verifyLargeNumber(5,7)).toBe(7);
   });

   it('Quando chamo a função  verifyLargeNumber passando como parametro os numeros 10, 5, o resultado deve ser igual ao numero 6', () => {
      expect(moduleLogic.verifyLargeNumber(50,30)).toBe(50);
   });

});


describe('Testing Exercise 03', () => {

   it('Quando chamo a função  verifyLessNumber passando como parametro os numeros 3, 10, o resultado deve ser igual ao numero 3', () => {
      expect(moduleLogic.verifyLessNumber(3,10)).toBe(3);
   });

   it('Quando chamo a função  verifyLessNumber passando como parametro os numeros 15, 13, o resultado deve ser igual ao numero 13', () => {
      expect(moduleLogic.verifyLessNumber(15,13)).toBe(13);
   });

});

describe('Testing Exercise 04', () => {

   it('Quando chamo a função checkNumberIsEven passando como parametro o numero 10, o resultado deve retorna a mensagem "PAR"', () => {
      expect(moduleLogic.checkNumberIsEven(10)).toBe("PAR");
   });

   it('Quando chamo a função checkNumberIsEven passando como parametro os numeros 15, o resultado deve retorna a mensagem "IMPAR"', () => {
      expect(moduleLogic.checkNumberIsEven(15)).toBe("IMPAR");
   });

});


describe('Testing Exercise 05', () => {

   it('Quando chamo a função verifyOfGreater passando o valor da idade = 17, o resultado deve ser "Menor de Idade"', () => {
      expect(moduleLogic.verifyOfGreater(17)).toBe("Menor de Idade");
   });

   it('Quando chamo a função verifyOfGreater passando o valor da idade igual = 18, o resultado deve ser "Maior de Idade"', () => {
      expect(moduleLogic.verifyOfGreater(18)).toBe("Maior de Idade");
   });

});


describe('Testing Exercise 06', ()=> {

   it('Quando chamo a função calculateAverage passando as três notas (10, 9 ,9), o retorno deve ser "Conceito A"', () => {
      expect(moduleLogic.calculateAverage(10, 9, 9)).toBe("Conceito A")
   });
 
   it('Quando chamo a função calculateAverage passando as três notas (8, 6 , 10), o retorno deve ser "Conceito B"', () => {
      expect(moduleLogic.calculateAverage(8, 6 , 10)).toBe("Conceito B")
   });

   it('Quando chamo a função calculateAverage passando as três notas (7, 9 , 5), o retorno deve ser "Conceito C"', () => {
      expect(moduleLogic.calculateAverage(7, 9 , 5)).toBe("Conceito C")
   });

   it('Quando chamo a função calculateAverage passando as três notas (5, 8 , 7), o retorno deve ser "Conceito D"', () => {
      expect(moduleLogic.calculateAverage(5, 8 , 7)).toBe("Conceito D")
   });

   it('Quando chamo a função calculateAverage passando as três notas (3, 5 ,2), o retorno deve ser "Conceito I"', () => {
      expect(moduleLogic.calculateAverage(3, 5 ,2)).toBe("Conceito I")
   });

});

describe('Testing Exercise 07', () => {
   
   it('Quando chamo a função calculatePercentDiscount passando como valor do produto o valor 100.0 e o valor do desconto 5, o resultado esperado deve ser o valor 95', () => {
      expect(moduleLogic.calculatePercentDiscount(100.0, 5)).toBe(95)
   });

   it('Quando chamo a função calculatePercentDiscount passando como valor do produto o valor 100.0 e o valor do desconto 25, o resultado esperado deve ser a mensagem "Percentual de desconto excede o limite de nossa política de preço"', () => {
      expect(moduleLogic.calculatePercentDiscount(100.0, 25)).toBe("Percentual de desconto excede o limite de nossa política de preço")
   });

});


describe('Testing Exercise 08', () => {

   it('Quando chamo a função checkNumberIsEquals passando dois numeros igual (3, 3)  o retorno deve ser "Iguais"', () => {
      expect(moduleLogic.checkNumberIsEquals(3, 3)).toBe("Iguais");
   });

   it('Quando chamo a função checkNumberIsEquals passando dois numeros igual (3, "3")  o retorno deve ser "Iguais"', () => {
      expect(moduleLogic.checkNumberIsEquals(3, "3")).toBe("Iguais");
   });

   it('Quando chamo a função checkNumberIsEquals passando dois numeros diferentes (5, 3)  o retorno deve ser "Diferentes"', () => {
      expect(moduleLogic.checkNumberIsEquals(5, 3)).toBe("Diferentes");
   });

   it('Quando chamo a função checkNumberIsEquals passando dois numeros diferentes ("5", 3)  o retorno deve ser "Diferentes"', () => {
      expect(moduleLogic.checkNumberIsEquals("5", 3)).toBe("Diferentes");
   });

});


describe('Testing Exercise 09', () => {

   it('Quando chamo a função  myFunction passando um valor = 800, o resultado deve ser 7.5', () => {
      expect(moduleLogic.myFunction(800)).toBe(parseFloat(0))
   });

   it('Quando chamo a função  myFunction passando um valor = 1900, o resultado deve ser 52.5', () => {
      expect(moduleLogic.myFunction(1900)).toBe(parseFloat(7.5))
   });

   it('Quando chamo a função  myFunction passando um valor = 2500, o resultado deve ser 255.001', () => {
      expect(moduleLogic.myFunction(2500)).toBe(52.5)
   });

   it('Quando chamo a função  myFunction passando um valor = 3500.01, o resultado deve ser ', () => {
      expect(moduleLogic.myFunction(3500.01)).toBe(255.00150000000002)
   });

   it('Quando chamo a função  myFunction passando um valor = 3400.99, o resultado deve ser ', () => {
      expect(moduleLogic.myFunction(3400.99)).toBe(120.07424999999998)
   });


});


describe('Testing Exercise 10', () => {

   it('Quando chamo a função dayOfWeek passando o dia 1, o resultado deve ser "Domingo" ', () => {
      expect(moduleLogic.dayOfWeek(1)).toBe("Domingo")
   });

   it('Quando chamo a função dayOfWeek passando o dia 2, o resultado deve ser "Segunda-feira" ', () => {
      expect(moduleLogic.dayOfWeek(2)).toBe("Segunda-feira")
   });

   it('Quando chamo a função dayOfWeek passando o dia 3, o resultado deve ser "Terça-feira" ', () => {
      expect(moduleLogic.dayOfWeek(3)).toBe("Terça-feira")
   });

   it('Quando chamo a função dayOfWeek passando o dia 4, o resultado deve ser "Quarta-feira" ', () => {
      expect(moduleLogic.dayOfWeek(4)).toBe("Quarta-feira")
   });

   it('Quando chamo a função dayOfWeek passando o dia 5, o resultado deve ser "Quinta-feira" ', () => {
      expect(moduleLogic.dayOfWeek(5)).toBe("Quinta-feira")
   });

   it('Quando chamo a função dayOfWeek passando o dia 6, o resultado deve ser "Sexta-feira" ', () => {
      expect(moduleLogic.dayOfWeek(6)).toBe("Sexta-feira")
   });

   it('Quando chamo a função dayOfWeek passando o dia 7, o resultado deve ser "Sábado" ', () => {
      expect(moduleLogic.dayOfWeek(7)).toBe("Sábado")
   });

   it('Quando chamo a função dayOfWeek passando o dia 8, o resultado deve ser "Número inválido" ', () => {
      expect(moduleLogic.dayOfWeek(8)).toBe("Número inválido")
   });

   it('Quando chamo a função dayOfWeek passando o dia 0, o resultado deve ser "Número inválido" ', () => {
      expect(moduleLogic.dayOfWeek(0)).toBe("Número inválido")
   });


});