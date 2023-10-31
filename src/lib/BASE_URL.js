export const BASE_URL = () => {
  const url = process.env.NODE_ENV === "development" ? process.env.NEXTAUTH_URL : process.env.VERCEL_URL;
  return url;
};
