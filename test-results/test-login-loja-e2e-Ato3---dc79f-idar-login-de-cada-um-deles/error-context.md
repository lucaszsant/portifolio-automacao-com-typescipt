# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test/login-loja-e2e.spec.ts >> Ato3- Criar usuário de cliente e logista >> criar e validar login de cada um deles
- Location: test/login-loja-e2e.spec.ts:63:11

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#registerBtn')
    - locator resolved to <button disabled class="btn" id="registerBtn" onclick="attemptRegister()">Cadastrar</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    57 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "← Voltar para a loja" [ref=e3] [cursor=pointer]:
    - /url: loja.html
  - link "LojaQA" [ref=e5] [cursor=pointer]:
    - /url: loja.html
  - generic [ref=e6]:
    - heading "Acesso à LojaQA" [level=2] [ref=e7]
    - generic [ref=e8]:
      - generic [ref=e9]: E-mail
      - textbox "E-mail" [ref=e10]:
        - /placeholder: Digite seu e-mail
    - generic [ref=e11]:
      - generic [ref=e12]: Senha
      - generic [ref=e13]:
        - textbox "Senha" [ref=e14]:
          - /placeholder: Mínimo de 8 caracteres
        - button "Mostrar ou ocultar senha" [ref=e15] [cursor=pointer]
    - button "Entrar" [disabled] [ref=e19]
    - generic [ref=e20]:
      - link "Criar conta" [ref=e21] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e22]: "|"
      - link "Esqueci minha senha" [ref=e23] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e24]:
      - strong [ref=e25]: "Massa de dados para QA:"
      - text: "Admin:"
      - code [ref=e26]: admin@system.com
      - text: /
      - code [ref=e27]: AdminPassword123
      - text: "Cliente:"
      - code [ref=e28]: user@system.com
      - text: /
      - code [ref=e29]: UserPassword123
      - text: "Lojista:"
      - code [ref=e30]: lojista@system.com
      - text: /
      - code [ref=e31]: SellerPass123
      - text: "Bloqueado:"
      - code [ref=e32]: blocked@system.com
      - text: /
      - code [ref=e33]: Blocked123
      - text: "Lento:"
      - code [ref=e34]: slow@system.com
      - text: /
      - code [ref=e35]: SlowPass123
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
  55 |             await expect(page.locator('#loginBtn')).toBeDisabled();
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
> 69 |         await page.click('#registerBtn');
     |                    ^ Error: page.click: Test timeout of 30000ms exceeded.
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