import puppeteer from "puppeteer";

import { PAGE_URL, PAGE_URL_2 } from "./constant.js";

const loginFieldsKeys = {
  "input[name='email']": "login@yopmail.com",
  "input[name='password']": "123456789",
};

const registerFieldsKeys = {
  "input[name='firstName']": "John",
  "input[name='lastName']": "Doe",
  "input[name='email']": "login@yopmail.com",
  "input[name='contactNumber']": "+441234566123",
  "input[name='description']": "descr",
  "input[name='crn']": "122344",
  "input[name='title']": "2313",
  "input[name='companyLogo']": "/path/to/your/document.pdf",
};

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

const interceptedRequest = async (page) => {
  await page.setRequestInterception(true);
  page.on("request", (interceptedRequest) => {
    if (interceptedRequest.url().endsWith(".png")) {
      interceptedRequest.abort();
    } else {
      interceptedRequest.headers({ jk: "123" });
      interceptedRequest.continue();
    }
  });
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
  fields = loginFieldsKeys,
  button = {
    selector: "button[type='submit']",
  },
) => {
  try {
    for (const key in fields) {
      await page.type(key, fields?.[key]);
    }

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
