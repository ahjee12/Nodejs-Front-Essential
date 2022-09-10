const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

// const crawling = async (href) => {};
// 즉시 실행 함수 - 익명 함수
(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 1080,
  });
  await page.goto("https://www.tistory.com/category/life");
  const html = await page.content();
  console.log(html);
  //   await page.screenshot({ path: "example.png" });
  //   await browser.close();

  const $ = cheerio.load(html);
  let hrefArray = [];
  let a = [];
  $("#mArticle ul li a").each((index, element) => {
    console.log("element--------------" + element);
    const href = $(element).attr("href");
    // const title = $(element).find(".wrap_cont .inner_desc_tit").text();
    hrefArray.push(href);
    a.push(href);
    // hrefArray.push({
    //   href,
    //   // title,
    // });
  });
  console.log(a);
  console.log(hrefArray);
  const mFeature = $("#mFeature p").text();
  console.log(mFeature);
  // await browser.close();
  // hrefArray.forEach((item) => {
  //   crawling(item.href);
  // });
})();
