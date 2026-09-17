// formas de tipar
// forma 1
let idade:number;
//forma 2
const nome='Seu Zezo';
// forma 3 não recomendado por ser redundnate
const sobreNome:string= 'Da Silva';
// Tipagem especiais
type usuario={'Nick':string,'age':number};
// chamando type novo
let jogador:usuario={Nick: 'Ricardo', age:15};

let jogadorVelho:usuario={Nick:'Toin',age:40};

function verificarIdade(usuarioAtual:usuario){
    if (usuarioAtual.age>=21){
        console.log(`Acesso liberado: O jogador ${usuarioAtual.Nick} tem ${usuarioAtual.age} anos e tem permissão para jogar qualquer jogo`);
    }
    else{
        console.log(`Ei ${usuarioAtual.Nick} tu é de menor, tem ${usuarioAtual.age} anos pode não fi`);
    };
};

verificarIdade(jogador);
verificarIdade(jogadorVelho);




