# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test/login-loja-e2e.spec.ts >> Ato 2- Caminho Feliz >> validar acesso e redirecionar ao painel
- Location: test/login-loja-e2e.spec.ts:28:9

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator: locator('loginBtn')
Expected: enabled
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeEnabled" locator('loginBtn') with timeout 5000ms
  - waiting for locator('loginBtn')

```

```yaml
- link "← Voltar para a loja":
  - /url: loja.html
- link "LojaQA":
  - /url: loja.html
- heading "Acesso à LojaQA" [level=2]
- text: E-mail
- textbox "E-mail":
  - /placeholder: Digite seu e-mail
  - text: admin@sytem.com
- text: Senha
- textbox "Senha":
  - /placeholder: Mínimo de 8 caracteres
  - text: AdminPassword123
- button "Mostrar ou ocultar senha":
  - img
- button "Entrar"
- link "Criar conta":
  - /url: "#"
- text: "|"
- link "Esqueci minha senha":
  - /url: "#"
- strong: "Massa de dados para QA:"
- text: "Admin:"
- code: admin@system.com
- text: /
- code: AdminPassword123
- text: "Cliente:"
- code: user@system.com
- text: /
- code: UserPassword123
- text: "Lojista:"
- code: lojista@system.com
- text: /
- code: SellerPass123
- text: "Bloqueado:"
- code: blocked@system.com
- text: /
- code: Blocked123
- text: "Lento:"
- code: slow@system.com
- text: /
- code: SlowPass123
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
  9  |         await page.goto(`${BASE_URL}/login.html`)
  10 |         //validar titulo
  11 |         await expect(page).toHaveTitle(/LojaQA|Entrar/i)
  12 |     });
  13 |     test('Verificar exibicao dos campos do form de login', async ({ page }) => {
  14 |         //mavegar ate pagina de login
  15 |         await page.goto(`${BASE_URL}/login.html`)
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
  27 | test.describe('Ato 2- Caminho Feliz', ()=>{
  28 |     test('validar acesso e redirecionar ao painel', async({page})=>{
  29 |       //mavegar ate pagina de login
  30 |         await page.goto(`${BASE_URL}/login.html`)
  31 | 
  32 |         // preencher campos utilizando o fill()
  33 |         await page.fill('#email','admin@sytem.com');
  34 |         await page.fill('#password', 'AdminPassword123');
  35 | 
  36 |         //validar botão ativo
> 37 |         await expect(page.locator('loginBtn')).toBeEnabled();
     |                                                ^ Error: expect(locator).toBeEnabled() failed
  38 |         //acao de clique no btn
  39 |         await page.click('logijBtn')
  40 |         //validar o redirecionar para a janela/painel
  41 |         await expect(page).toHaveURL(/painel\.html/);
  42 |     })
  43 | 
  44 | 
  45 | })
  46 | 
  47 | 
  48 | 
  49 | 
```