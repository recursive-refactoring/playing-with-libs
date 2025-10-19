import puppeteer from "puppeteer";
import path from "path";
import { CHECK_URL_LOGIN, PAGE_URL } from "./constant.js";
import { defaultBrowserOptions, registerFieldsKeys } from "./data.js";

const retryAttempts = (maxRetries = 3, key) => {
  const retryMap = {};
  const getCount = retryMap?.[key] || 0;
  if (getCount > maxRetries) {
    console.error(
      `❌ Giving up on ${request.url()} after ${maxRetries} retries.`,
    );
    return;
  }
  if (getCount) {
    retryMap[key] = getCount + 1;
  }
};

const openBrowser = async (options = defaultBrowserOptions) => {
  try {
    return await puppeteer.launch(options);
  } catch (error) {
    throw error;
  }
};

const closeBrowser = async (
  browser,
  options = { headless: false, devtoold: true },
) => {
  try {
    await browser.close();
  } catch (error) {
    throw error;
  }
};

const openNewPage = async (browser) => {
  try {
    return await browser.newPage();
  } catch (error) {
    throw error;
  }
};

const openPageLink = async (
  page,
  pageLink = PAGE_URL,
  options = { timeout: 0 },
) => {
  try {
    await page.goto(pageLink, options);
  } catch (error) {
    throw error;
  }
};

const waitFor = async (page, selector) => {
  try {
    await page.waitForSelector(selector);
  } catch (error) {
    throw error;
  }
};

const checkForResponse = async (page, options = { url: CHECK_URL_LOGIN }) => {
  // console.log("checkForResponse");
  let jsonData = null;
  try {
    const response = await page.waitForResponse(
      (response) =>
        response.url().includes(options?.url) &&
        response.request().method() !== "OPTIONS",
      {
        timeout: 0,
      },
    );
    try {
      jsonData = await response.json();
    } catch (error) {
      jsonData = null;
    }
    const isResponseOk = response.ok();

    return {
      response,
      isResponseOk,
      jsonData,
    };
  } catch (error) {
    throw error;
  }
};

const fillSimpleForm = async (
  page,
  fields = registerFieldsKeys(),
  specialFields = {
    fileInputs: ["input[name='companyLogo']"],
  },
) => {
  try {
    for (const key in fields) {
      if (specialFields.fileInputs.includes(key)) {
        const input = await page.$(key);
        const filePath = path.resolve(fields?.[key]);
        input.uploadFile(filePath);
        continue;
      }
      await waitFor(page, key);
      await page.type(key, fields?.[key]);
    }
  } catch (error) {
    throw error;
  }
};

const buttonClick = async (page, selector = "button[type='submit']") => {
  try {
    await waitFor(page, selector);
    await page.click(selector);
  } catch (error) {
    throw error;
  }
};

const main = async () => {
  try {
    const browser = await openBrowser();
    const page = await openNewPage(browser);
    page.setDefaultNavigationTimeout(0);
    await openPageLink(page);
    await waitFor(page, "form");
    await fillSimpleForm(page);
    // await buttonClick(page);
    const response = await checkForResponse(page);
  } catch (error) {
    console.log(error);
  }
};

main();
