const config = await fetch("./config.json").then((response) => response.json());

const APIConfig = {
  API: {
    endpoints: [
      {
        name: "appApi",
        endpoint: config.apiUrl,
      },
      {
        name: "otherApi",
        endpoint: "n/a",
      },
    ],
  },
}; 

export const getBackendEndpoint = () => {
  return fetch(`${APIConfig.API.endpoints[0].endpoint}demo`)
    .then((res) => res.json())
    .then((json) => {
      return json ;
    })
    .catch( ()  => {
      return false

    } )
};


