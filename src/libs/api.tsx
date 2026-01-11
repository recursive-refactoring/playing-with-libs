export const postData = (parameters: any) => {
  const { url, onlyBody, onlyParams, apiParameter} = parameters ?? {};
  const {params, body} = apiParameter
  return {
    url: url,
    method: "POST",
    body: onlyBody ? apiParameter : body,
    params: onlyParams ? apiParameter : params,
  };
};

export const buildMutationRequest = (parameters: any) => {
  const { builder, url } = parameters;
  return builder.mutation({
    query: (apiParameter: any) => {
      const params = {
        apiParameter,
        url
      };
      return postData(params);
    },
  });
};
