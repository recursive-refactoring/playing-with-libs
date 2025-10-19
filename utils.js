const interceptRequest = async (page) => {
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    request.continue();
  });
};

const interceptResponse = async (
  page,
  byPassResponses = defaultByPassResponses,
) => {
  page.on("response", async (response) => {
    const request = response.request();
    const method = request.method();
    const resourceType = request.resourceType();
    const url = response.url();
    let jsonData = null;
    console.log({ url });
    try {
      jsonData = await response.json();
    } catch (err) {
      jsonData = null;
    }

    if (byPassResponses?.resourceTypes?.includes(resourceType)) return;
    if (byPassResponses.methods.includes(method)) return;
    if (jsonData === null) return;
    if (url === CHECK_URL_LOGIN) {
      const isResponseOk = response.ok();
      console.log({ url, jsonData, isResponseOk });
      // if (!isResponseOk) {
      //   await openPageLink(page);
      // await waitFor(page, "form");
      await submitSimpleForm(page);
      // }
    }
  });
};
