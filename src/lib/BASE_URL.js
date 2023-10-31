export const BASE_URL = () => {
  const url = process.env.NODE_ENV === "production" ? process.env.VERCEL_URL : process.env.NEXTAUTH_URL;
  return url;
};
