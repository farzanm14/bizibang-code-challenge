export const BaseUrl = "https://api.punkapi.com/v2";
export const Timeout = 60000;

const Endpoints = {
  table: {
    getData: (page: number) => `/beers?page=${page}&per_page=10`,
  },
};

export default Endpoints;
