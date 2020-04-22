import { singlePack, test } from '@actions'
import po from '@pages'
import { browser } from '@config/jest.settings'

singlePack('vyrskiy', () => {
  test('third task', async () => {
    const LetuPage = po?.rest

    const path = 'https://www.letu.ru'
    await LetuPage.open(path, true, undefined)

    const selector = {
      loginButton: 'div.user-menu_login-link>span', // Кнопка "Войти" 
      emailField: 'input[id$="logInEmailAddress"]', // Поле "Email"
      passwordField: 'input[id$="logInPassword"]', // Поле "Пароль"
      submitButton: 'button.btn-primary', // Кнопка "Войти"
      accountButton: 'a[title="Личный кабинет"]', // Кнопка "Личный кабинет"
      profileOption: 'a.header-dropdown-link[href="/account/profile"]', // Опция "Профиль"
      logoutButton: 'button[data-bind*="logout"]', // Кнопка "Выйти из личного кабинета"
    }

    await LetuPage.click(selector.loginButton)

    await LetuPage.type(selector.emailField, 'anatoliy@gmail.com')
    await LetuPage.type(selector.passwordField, 'password')
    await LetuPage.click(selector.submitButton)

    await LetuPage.click(selector.accountButton)
    await LetuPage.click(selector.profileOption)

    await LetuPage.click(selector.logoutButton)

    const searchStatusExpectedText = 'Войти'
    const searchStatusLabelText = await LetuPage.getText(selector.loginButton) 

    expect(searchStatusLabelText).toEqual(searchStatusExpectedText)
  })
})
