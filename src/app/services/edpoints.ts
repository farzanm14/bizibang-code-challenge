export const BaseUrl = "https://6613e12c2fc47b4cf27af75b.mockapi.io/api/v1";

export const Timeout = 60000;

const Endpoints = {
  table: {
    getData: (page: number) => `articles/?page=${page}`,
  },
};

export default Endpoints;
