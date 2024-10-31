const baseUrl = import.meta.env.baseUrl ?? "http://localhost:3002";
const endpointV3 = {
  project: `${baseUrl}/v3/projects`,
};

export { baseUrl, endpointV3 as endpoint };