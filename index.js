import puppeteer from "puppeteer";

import { PAGE_URL, PAGE_URL_2 } from "./constant.js";

const setup = async (pageLink = PAGE_URL_2, options = { headless: false }) => {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  try {
    await page.goto(pageLink);
  } catch (error) {
    throw error;
  }
  return page;
};

const waitFor = async (page, selector) => {
  try {
    await page.waitForSelector(selector);
  } catch (error) {
    throw error;
  }
};

const submitSimpleForm = async (
  page,
  fields = {
    email: { selector: "input[name='email']", value: "login@yopmail.com" },
    password: {
      selector: "input[name='password']",
      value: "123456789",
    },
  },
  button = {
    selector: "button[type='submit']",
  },
) => {
  try {
    await page.type(fields?.email?.selector, fields?.email?.value);
    await page.type(fields?.password?.selector, fields?.password?.value);

    await page.click(button.selector);
    await page.waitForNavigation();
  } catch (error) {
    throw error;
  }
};

const main = async () => {
  try {
    const page = await setup();
    await waitFor(page, "form");
    await submitSimpleForm(page);
  } catch (error) {
    console.log(error);
  }
};

main();
