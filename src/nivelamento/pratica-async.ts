//importando função utilitária de aguardar o tempo(delay)

import { aguardar } from "../../utils/helpers";
//SIMULANDO UMA API DE LOGIN
function simularlogin (usuario:string, senha:string): Promise<string>{
    return new Promise((resolve, reject)=> {
        if(usuario=== 'admin' && senha=== '12345678'){
            resolve('token-secreto-aprovado-123');
        }
        else{
            reject('ERRO 401 - USUÁRIO OU SENHA INVÁLIDOS!');
        }
    });
}
// FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT; -D
async function executarct(){
    console.log('Inciando cenário de teste ;-D')
    try{
        console.log('Passo 1: abrindo tela de login')
        await aguardar(2000);
        console.log('passo 2: Inserindo credenciais...')
        await aguardar(3000);

        const token= await simularlogin('amin', '123456')
        console.log(`SUCESSO! Usuário logado Token Recebido: ${token}/n`)
    }
    catch(erro){
        console.log(`Falha No Teste: ${erro}/n`);
    }
    finally{
        console.log('Passo final: Fechando Navegador e Limpando Dados')
    }
}
executarct();
