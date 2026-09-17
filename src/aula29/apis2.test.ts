import {test, expect} from 'vitest';

const BASE_URL= 'https://jsonplaceholder.typicode.com';

test('Método POST para criar um nobo post', async()=> {
    const res= await fetch(`${BASE_URL}/posts` , {
        method:'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body:JSON.stringify({
        userId: 1,
        title: 'Meu Novo Post',
        body: 'Conteúdo do meu novo post',

        })
        
    });

// Testar Status Code
expect(res.status).toBe(201)
//Testar se o retorno é um onjeto json
const data= await res.json();
expect(data). toHaveProperty('id');
expect(data.title).toBe('Meu Novo Post');
expect(data.body).toBe('Conteúdo do meu novo post');
});



test('Método PUT para Atualizar um novo post', async()=> {
    const res= await fetch(`${BASE_URL}/posts/1` , {
        method:'PUT',
        headers: {
            'content-type' : 'application/json',
        },
        body:JSON.stringify({
        userId: 1,
        title: 'kkkk',
        body: 'Conteúdo do meu novo post',

        })
        
    });

// Testar Status Code
expect(res.status).toBe(200)
//Testar se o retorno é um onjeto json
const data= await res.json();
expect(data). toHaveProperty('id');
expect(data.title).toBe('kkkk');
expect(data.body).toBe('Conteúdo do meu novo post');
});


test('Método PATCH para Atualizar um novo post', async()=> {
    const res= await fetch(`${BASE_URL}/posts/1` , {
        method:'PATCH',
        headers: {
            'content-type' : 'application/json',
        },
        body:JSON.stringify({
        title: 'titulo super atualizado',
        
        })
        
    });

// Testar Status Code
expect(res.status).toBe(200)
//Testar se o retorno é um onjeto json
const data= await res.json();
expect(data). toHaveProperty('id');
expect(data.title).toBe('titulo super atualizado');

});






test('Método DELETE para DELETAR post', async()=> {
    const res= await fetch(`${BASE_URL}/posts/1` , {
        method:'DELETE',
    });

// Testar Status Code
expect(res.status).toBe(200)

});
