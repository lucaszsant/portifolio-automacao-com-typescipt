    import {Test, expect} from '@playwright/test'
    
    const BASE_URL='https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html'

  Test.describe('ato 1 - validar carregamento  e visibilidade de elementos', async() =>{

    Test('validar titulo e carregamento da pagina', async ({page}) =>{
        //navegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`)
        //validar titulo
        await expect(page).tohaveTitle(/LojaQA|Entrar/i)
    });
    Test('Verificar exibicao dos campos do form de login', async({page})=>{
        //mavegar ate pagina de login
        await page.goto(`${BASE_URL/NavigatorLogin.html}`)
      
        //validar campos 
        await expect(page.locator('#email')).toBeVisible();
          await expect(page.locator('#password')).toBeVisible();
            await expect(page.locator('#loginBtn')).toBeVisible();
            //verificar se o Btn está desativado

           await expect(page.locator('#loginBtn')).toBeDisabled();




    });
  });


