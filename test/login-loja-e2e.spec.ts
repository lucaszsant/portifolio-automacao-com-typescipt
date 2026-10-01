import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login'

test.describe('ato 1 - validar carregamento  e visibilidade de elementos', async () => {

    test('validar titulo e carregamento da pagina', async ({ page }) => {
        //navegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        //validar titulo
        await expect(page).toHaveTitle(/LojaQA|Entrar/i);
    });
    test('Verificar exibicao dos campos do form de login', async ({ page }) => {
        //mavegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        //validar campos 
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();
        //verificar se o Btn está desativado

        await expect(page.locator('#loginBtn')).toBeDisabled();
    });
});


test.describe('Ato 2- Caminho Feliz', () => {
    test('validar acesso e redirecionar ao painel', async ({ page }) => {
        //navegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`);

        // preencher campos utilizando o fill()
        await page.fill('#email', 'slow@system.com');
        await page.fill('#password', 'SlowPass123');

        //validar botão ativo
        await expect(page.locator('#loginBtn')).toBeEnabled();
        //acao de clique no btn
        await page.click('#loginBtn');
        //validar o redirecionar para a janela/painel
        await expect(page).toHaveURL(/painel\.html/);
    });

    test('Verficar botão de login desativado quando email incorreto',
        async ({ page }) => {

            //navegar ate pagina de login
            await page.goto(`${BASE_URL}/login.html`);

            // preencher campos utilizando o fill()
            await page.fill('#email', 'slow@system.com');
            await page.fill('#password', 'SlowPass123');

            // validar botão ativo
            await expect(page.locator('#loginBtn')).toBeDisabled();
        })
})

//Criar bloco de teste ato 3 para criar usuários de cliente e logistica e 
// validar login de cada um deles formulário de cadastro e o login deles

test.describe('Ato3- Criar usuário de cliente e logista',() =>{
      test('criar e validar login de cada um deles', 
        async({page})=>{
            // pagina de cadastro
            await page.goto(`${BASE_URL}/login.html`)

            // clicar para abrir o cadastro
        await page.locator('.login-link a').first() .click();

            //  preenchimento do cadastro do cliente
            await page.fill('#email', 'joubileu1234@gmail.com')
            await page.fill('#password', '123456789')
            // validar botão de cadastro
            await expect(page.locator('#cadastroBtn')).toBeEnabled();
      })

})





