import { instance } from "./instance";

export const searchAPI = async (query) => {
  try {
    const response = await instance.get("/v3/search/book", {
      params: {
        query: query,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
