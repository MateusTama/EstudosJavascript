function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
  
    var imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").innerHTML = imc.toFixed(2);
  
    var treino = gerarTreino(imc);
    document.getElementById("resultadoTreino").innerHTML = treino;
  }
  
  function gerarTreino(imc) {
    var treino = "";
    if (imc < 18.5) {
      treino = "Treino para ganho de peso:\n\n";
      treino += "1. Agachamento - 4 séries de 8-10 repetições\n";
      treino += "2. Levantamento terra - 4 séries de 8-10 repetições\n";
      treino += "3. Supino - 4 séries de 8-10 repetições\n";
      treino += "4. Desenvolvimento militar - 4 séries de 8-10 repetições\n";
    } else if (imc >= 18.5 && imc < 25) {
      treino = "Treino para manutenção:\n\n";
      treino += "1. Agachamento - 3 séries de 10-12 repetições\n";
      treino += "2. Levantamento terra - 3 séries de 10-12 repetições\n";
      treino += "3. Supino - 3 séries de 10-12 repetições\n";
      treino += "4. Desenvolvimento militar - 3 séries de 10-12 repetições\n";
    } else if (imc >= 25 && imc < 30) {
      treino = "Treino para perda de peso:\n\n";
      treino += "1. Agachamento - 4 séries de 12-15 repetições\n";
      treino += "2. Levantamento terra - 4 séries de 12-15 repetições\n";
      treino += "3. Supino - 4 séries de 12-15 repetições\n";
      treino += "4. Desenvolvimento militar - 4 séries de 12-15 repetições\n";
    }
    return treino;
  }