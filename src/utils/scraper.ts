import puppeteer from 'puppeteer';

export const scraper = async (url: string, xpath: string) => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-setuid-sandbox'],
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.goto(url);

  let myElement = await page.$x(xpath);
  let item = myElement[0];
  console.log(item);
};
