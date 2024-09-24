
const notas = [7.5, 8.0, 6.0, 9.0, 5.5];


console.log("Primeira nota:", notas[0]); 
console.log("Última nota:", notas[notas.length - 1]); 


notas.push(8.5);
console.log("Notas após adicionar uma nova nota:", notas);


notas.shift();
console.log("Notas após remover a primeira nota:", notas);


console.log("Notas dos alunos:");
notas.forEach(nota => {
    console.log(nota);
});


const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
console.log("Média das notas:", media);

const notasMaioresQueSete = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQueSete);

const notasOrdenadas = [...notas].sort((a, b) => a - b); 
console.log("Notas ordenadas:", notasOrdenadas);


const existeNota6_5 = notas.includes(6.5);
console.log("Nota 6.5 está presente?", existeNota6_5);


const indiceNota8_0 = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNota8_0);


const notasElevadasAoQuadrado = notas.map(nota => nota ** 2);
console.log("Notas elevadas ao quadrado:", notasElevadasAoQuadrado);
