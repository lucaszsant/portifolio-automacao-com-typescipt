# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test/login-loja-e2e.spec.ts >> Ato 2- Caminho Feliz >> Verficar botão de login desativado quando email incorreto
- Location: test/login-loja-e2e.spec.ts:44:9

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator:  locator('#loginBtn')
Expected: disabled
Received: enabled
Timeout:  5000ms

Call log:
  - Expect "toBeDisabled" locator('#loginBtn') with timeout 5000ms
  - waiting for locator('#loginBtn')
    14 × locator resolved to <button class="btn" id="loginBtn" onclick="attemptLogin()">Entrar</button>
       - unexpected value "enabled"

```

```yaml
- button "Entrar"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login'
  4  | 
  5  | test.describe('ato 1 - validar carregamento  e visibilidade de elementos', async () => {
  6  | 
  7  |     test('validar titulo e carregamento da pagina', async ({ page }) => {
  8  |         //navegar ate pagina de login
  9  |         await page.goto(`${BASE_URL}/login.html`);
  10 |         //validar titulo
  11 |         await expect(page).toHaveTitle(/LojaQA|Entrar/i);
  12 |     });
  13 |     test('Verificar exibicao dos campos do form de login', async ({ page }) => {
  14 |         //mavegar ate pagina de login
  15 |         await page.goto(`${BASE_URL}/login.html`);
  16 |         //validar campos 
  17 |         await expect(page.locator('#email')).toBeVisible();
  18 |         await expect(page.locator('#password')).toBeVisible();
  19 |         await expect(page.locator('#loginBtn')).toBeVisible();
  20 |         //verificar se o Btn está desativado
  21 | 
  22 |         await expect(page.locator('#loginBtn')).toBeDisabled();
  23 |     });
  24 | });
  25 | 
  26 | 
  27 | test.describe('Ato 2- Caminho Feliz', () => {
  28 |     test('validar acesso e redirecionar ao painel', async ({ page }) => {
  29 |         //navegar ate pagina de login
  30 |         await page.goto(`${BASE_URL}/login.html`);
  31 | 
  32 |         // preencher campos utilizando o fill()
  33 |         await page.fill('#email', 'slow@system.com');
  34 |         await page.fill('#password', 'SlowPass123');
  35 | 
  36 |         //validar botão ativo
  37 |         await expect(page.locator('#loginBtn')).toBeEnabled();
  38 |         //acao de clique no btn
  39 |         await page.click('#loginBtn');
  40 |         //validar o redirecionar para a janela/painel
  41 |         await expect(page).toHaveURL(/painel\.html/);
  42 |     });
  43 | 
  44 |     test('Verficar botão de login desativado quando email incorreto',
  45 |         async ({ page }) => {
  46 | 
  47 |             //navegar ate pagina de login
  48 |             await page.goto(`${BASE_URL}/login.html`);
  49 | 
  50 |             // preencher campos utilizando o fill()
  51 |             await page.fill('#email', 'slow@system.com');
  52 |             await page.fill('#password', 'SlowPass123');
  53 | 
  54 |             // validar botão ativo
> 55 |             await expect(page.locator('#loginBtn')).toBeDisabled();
     |                                                     ^ Error: expect(locator).toBeDisabled() failed
  56 |         })
  57 | })
  58 | 
  59 | //Criar bloco de teste ato 3 para criar usuários de cliente e logistica e 
  60 | // validar login de cada um deles formulário de cadastro e o login deles
  61 | 
  62 | test.describe('Ato3- Criar usuário de cliente e logista',() =>{
  63 |       test('criar e validar login de cada um deles', 
  64 |         async({page})=>{
  65 |             // pagina de cadastro
  66 |             await page.goto(`${BASE_URL}/login.html`)
  67 | 
  68 |             // clicar para abrir o cadastro
  69 |         await page.click('#registerBtn');
  70 | 
  71 |             //  preenchimento do cadastro do cliente
  72 |             await page.fill('#email', 'joubileu1234@gmail.com')
  73 |             await page.fill('#password', '123456789')
  74 |             // validar botão de cadastro
  75 |             await expect(page.locator('#cadastroBtn')).toBeEnabled();
  76 |       })
  77 | 
  78 | })
  79 | 
  80 | 
  81 | 
  82 | 
  83 | 
  84 | 
```