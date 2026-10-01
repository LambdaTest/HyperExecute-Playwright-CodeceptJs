Feature('Wikipedia');

Scenario('Search Playwright on Wikipedia', ({ I }) => {
  I.amOnPage('https://en.wikipedia.org/wiki/Main_Page');

  I.waitForElement('input[name="search"]', 10);

  I.fillField('input[name="search"]', 'Playwright');

  I.pressKey('Enter');

  I.waitForText('Playwright', 10);

  I.see('Playwright');
});