/*
        1 - Crie uma classe para representar carros.
        Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
        Crie um método que dado a quantidade de Kilômetros e o preço do combustível nos dê o valor gasto
        em reais para realizar este percurso.
*/

class Carros {
  Marca;
  Modelo;
  Cor;
  KmPorLitro;

  constructor(Marca, Modelo, Cor, KmPorLitro) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Cor = Cor;
    this.KmPorLitro = KmPorLitro;
  }

  Descrever() {
    console.log(
      `\tDescrição do carro \n Marca: ${this.Marca} \n Modelo: ${this.Modelo} \n Cor: ${this.Cor} \n Consumo: ${this.KmPorLitro} Km/L`
    );
  }

  GastoPercurso(DistanciaEmKm, precoCombustivel) {

    const calculo_consumoComb = DistanciaEmKm / this.KmPorLitro;
  
    const calculo_custoComb = calculo_consumoComb * precoCombustivel;
  
    console.log(
      "\n O gasto total da viagem foi: \n \tR$" + calculo_custoComb.toFixed(2)
    );
  }
}

const Audi = new Carros("Audi", "Rs6", "Azul", 5);

Audi.Descrever();
Audi.GastoPercurso(100, 5.7);

/*
    Na resolução do professor ele perefe ir fazer o calculo de quanto de combustivel é gasto por km e fazer a conta de consumo total 
*/