import { singlePack, test } from '@actions'
import po from '@pages'
import { browser } from '@config/jest.settings'

singlePack('vyrskiy', () => {
  test('second task', async () => {
    const LetuPage = po?.rest

    const path = 'https://www.letu.ru'
    await LetuPage.open(path, true, undefined)

    const viewedProductsBlockSelector = 'div[id*=\'LETUR-ViewedProductsCarousel\']' // Блок "Вы просматривали"
    //await LetuPage.waitElementAbsence(viewedProductsBlockSelector)
    await LetuPage.click('div[style="display: block;"]>div.products-list-content div.products-list__item:nth-child(' + randomInteger(1, 12) + ')') // Товар на cтранице (рандомно из 12)
    await LetuPage.waitToBeVisible(viewedProductsBlockSelector)
    await LetuPage.waitElementPresence(viewedProductsBlockSelector)
  })
})

function randomInteger(min: number, max: number) {
  // случайное число от min до (max+1)
  const rand: number = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
