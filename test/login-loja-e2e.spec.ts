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
            await page.fill('#email', 'email-invalido');
            await page.fill('#password', 'AdminPassword123');

            // validar botão ativo
            await expect(page.locator('#loginBtn')).toBeDisabled();
        })
})

//Criar bloco de teste ato 3 para criar usuários de cliente e logistica e 
// validar login de cada um deles formulário de cadastro e o login deles

test.describe('Ato3- Criar usuário de cliente e lojista', () => {

    test('criar e validar login de cada um deles', async ({ page }) => {

        // Abrir página de login
        await page.goto(`${BASE_URL}/login.html`);

        // Clicar em "Criar conta"
        await page.locator('.login-links a').filter({ hasText: 'Criar conta' }).click();

        // Preencher nome
        await page.fill('#reg-name', 'Cliente Teste');

        // Preencher e-mail
        await page.fill('#reg-email', 'cliente.teste@gmail.com');

        // Preencher senha
        await page.fill('#reg-password', 'ClientePass123');

        // Selecionar Cliente
        await page.selectOption('#reg-role', 'user');

        // Validar botão de cadastro
        await expect(page.locator('#registerBtn')).toBeEnabled();

        // Clicar em cadastrar
        await page.locator('#registerBtn').click();
    });

});
test.describe('etapa para acessar a tela de login', () => {
    test('acessar pagina de login', 
        async ({ page }) => {
            //pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        //colocar os dados: email e senha.
        await page.locator('#email').fill('admin@system.com')
        await page.locator('#password').fill ('AdminPassword123')
        //botão para permitir o acesso ao usuário
        await expect(page.locator('#loginBtn')).toBeEnabled()
        await page.click('#loginBtn');
    });

});