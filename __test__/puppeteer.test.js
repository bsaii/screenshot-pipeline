/* eslint-disable no-undef */
const puppeteer = require("puppeteer");

describe("jest-image-snapshot usage with an image received from puppeteer", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  }, 30000);
  afterAll(async () => {
    await browser.close();
  }, 30000);

  test("should match the snapshot", async () => {
    await page.goto("https://euphonious-meerkat-72321b.netlify.app");
    const image = await page.screenshot({ path: "screenshot.png" });
    expect(image).toMatchImageSnapshot();
  }, 30000);
});
