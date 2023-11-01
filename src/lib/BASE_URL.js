export const BASE_URL = () => {
  const url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://read-time.vercel.app";
  return url;
};
