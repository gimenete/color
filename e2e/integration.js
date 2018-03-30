import { Selector } from 'testcafe'

fixture`Color game`.page`http://localhost:3000/`

const wait = time => new Promise(resolve => setTimeout(resolve, time))

test('Play the whole game', async t => {
  await t
    .expect(Selector('h1').innerText)
    .eql('Color')
    .click('.button.is-primary')

  for (let i = 0; i < 10; i++) {
    await t.click('.button')
    await wait(1001)
  }

  await t.expect(Selector('h1').nth(0).innerText).contains('Hits')
  await t.expect(Selector('h1').nth(1).innerText).contains('Score')
})
