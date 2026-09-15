type Jogo={
    nome:string;
    preco: number;
}
let jogo: Jogo={
    nome:"Mortal Kombat",
    preco: 275
};
let resultado= jogo.preco>=100
?`O jogo ${jogo.nome} está custando R$ ${jogo.preco}. está caro`
:`O jogo ${jogo.nome} está custando R$ ${jogo.preco}. está barato`;
    console.log(resultado);

 