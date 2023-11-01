export const BASE_URL = () => {
  const url = process.env.NODE_ENV === "production" ? "https://read-time.vercel.app" : "http://localhost:3000";
  return url;
};
