import nookies from "nookies";
export const checkUserAuthenticated = () => {
  const userToken = nookies.get(null, "@authptr-token");

  return !!userToken;
};
