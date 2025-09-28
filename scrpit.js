function calcularMedias(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    
    let notasOrdenadas = atleta.notas.slice().sort(function(a, b) { return a - b; });
    
    
    let notasValidas = notasOrdenadas.slice(1, 4);
    
    
    let soma = 0;
    notasValidas.forEach(function(nota) {
      soma += nota;
    });
    
    
    let media = soma / notasValidas.length;
    
    
    console.log('Atleta: ' + atleta.nome);
    console.log('Notas Obtidas: ' + notasOrdenadas.join(','));
    console.log('Média Válida: ' + media);
    console.log('');
  }
}


let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];


calcularMedias(atletas);