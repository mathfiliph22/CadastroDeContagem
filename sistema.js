let numeroDeAlunos = 15

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
  
  
  if (contador === 0) {
      console.log("O numero atual é Zero")  
 } else if (contador % 2 == 0) {
      console.log("O número " + contador + " É Par")
  } else {
      console.log("O número " + contador + " é Impar")
    }
}