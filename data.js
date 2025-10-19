export const defaultBrowserOptions = {
  headless: false,
  devtools: true,
};

export const defaultByPassResponses = {
  resourceTypes: ["xhr", "fetch"],
  methods: ["OPTIONS"],
};

export const loginFieldsKeys = (data) => {
  return {
    "input[name='email']": data?.email ?? "login@yopmail.com",
    "input[name='password']": data?.password ?? "123456789",
  };
};

export const registerFieldsKeys = (data) => {
  return {
    "input[name='firstName']": data?.firstName ?? "John",
    "input[name='lastName']": data?.lastName ?? "Doe",
    "input[name='email']": data?.email ?? `login@yopmail.com`,
    "input[name='contactNumber']": data?.phoneNumber ?? "+441234566123",
    "input[name='description']": data?.description ?? "descr",
    "input[name='crn']": data?.crn ?? "122344",
    "input[name='title']": data?.title ?? "2313",
    "input[name='companyLogo']": data?.companyLogo ?? "./avatar.png",
  };
};
