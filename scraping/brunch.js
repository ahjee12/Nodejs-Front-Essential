const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  page.setViewport({
    width: 1440,
    height: 1000,
  });
  await page.goto("https://brunch.co.kr/search");
  await page.click("input.txt_search");
  await page.keyboard.type("Hello World");
  //   await page.screenshot({ path: "brunch.png" });
  //   await browser.close();
  await page.keyboard.press("Enter");
  // enter후 페이지 랜더링 되는 와중에 evaluate
  await page.waitForNavigation();
  let infiniteScrollInterval = setInterval(async () => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
  }, 1000);

  setTimeout(async () => {
    clearInterval(infiniteScrollInterval);
    console.log("done");
    await browser.close();
  }, 1000 * 10);
})();
