import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login'

test.describe('ato 1 - validar carregamento  e visibilidade de elementos', async () => {

    test('validar titulo e carregamento da pagina', async ({ page }) => {
        //navegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`)
        //validar titulo
        await expect(page).toHaveTitle(/LojaQA|Entrar/i)
    });
    test('Verificar exibicao dos campos do form de login', async ({ page }) => {
        //mavegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`)
        //validar campos 
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();
        //verificar se o Btn está desativado

        await expect(page.locator('#loginBtn')).toBeDisabled();
    });
});


test.describe('Ato 2- Caminho Feliz', ()=>{
    test('validar acesso e redirecionar ao painel', async({page})=>{
      //mavegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`)

        // preencher campos utilizando o fill()
        await page.fill('#email','admin@sytem.com');
        await page.fill('#password', 'AdminPassword123');

        //validar botão ativo
        await expect(page.locator('loginBtn')).toBeEnabled();
        //acao de clique no btn
        await page.click('logijBtn')
        //validar o redirecionar para a janela/painel
        await expect(page).toHaveURL(/painel\.html/);
    })


})



