import puppeteer from "puppeteer";

import { PAGE_URL } from "./constant.js";

const setup = async (pageLink = PAGE_URL, options = { headless: false }) => {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();

  await page.goto(pageLink);
};

const main = async () => {
  await setup();
};

main();
