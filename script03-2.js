let alunoA = [
    nome = 'José',
    nota1 = 7,
    nota2 = 10,
]

let alunoB = [
    nome = 'João',
    nota1 = 9,
    nota2 = 6,
]


let mediaAlunoA = (alunoA[1]+alunoA[2])/2;
let mediaAlunoB = (alunoB[1]+alunoB[2])/2;

let mediaTurma = (mediaAlunoA+mediaAlunoB)/2;

console.log("A média do aluno",alunoA[0],"é de",mediaAlunoA,"");
console.log("A média do aluno",alunoB[0],"é de",mediaAlunoB,"");
console.log("A média da turma ficou em",mediaTurma);

