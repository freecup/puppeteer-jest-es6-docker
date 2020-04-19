import { singlePack, test } from '@actions'
import po from '@pages'
import { browser } from '@config/jest.settings'

singlePack('vyrskiy', () => {
  test('first task', async () => {
    const LetuPage = po?.rest

    const path = 'https://www.letu.ru'
    await LetuPage.open(path, true, undefined)

    await LetuPage.type('#search-form .search-form__input', 'вешалка')

    const searchStatusExpectedText = 'Товары не найдены'
    const searchStatusLabelText = await LetuPage.getText('.ui-menu-item .search-form-preloader')

    expect(searchStatusLabelText).toEqual(searchStatusExpectedText)
  })
})
