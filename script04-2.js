let alunos =[
    {
        nome: 'Anderson',
        idade: 20,
        skills: ['java','c','c++'],
    },
    {
        nome: 'Bruno',
        idade: 21,
        skills: ['java','c','c#'],
    },
    {
        nome: 'Carlos',
        idade: 22,
        skills: ['java','python','javascript'],
    },
    {
        nome: 'Diego',
        idade: 23,
        skills: ['java','python','php'],
    },
    {
        nome: 'Eduardo',
        idade: 24,
        skills: ['java','ruby','r'],
    }
]


var skill = prompt("Consultar Skill: ")

const alunosFiltrados = alunos.filter((i, index) => {    
    return i.skills.indexOf(skill) !== -1;});
    console.log(alunosFiltrados);

function lista(){
    const nomes = alunosFiltrados.map(name => name.nome);
    console.log(nomes);}
    
lista();