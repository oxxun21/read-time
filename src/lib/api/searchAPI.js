import { instance } from "./instance";

export const searchAPI = async (query) => {
  try {
    const response = await instance.get("/v3/search/book", {
      params: {
        query: query,
      },
    });

    const data = response.data.documents.filter((item) => item.thumbnail);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
