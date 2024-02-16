import { PUBLIC_ROUTES } from "@/constants/private-routes-constants";

export const checkIsPublicRoute = (asPath: string) => {
  return PUBLIC_ROUTES.includes(asPath);
};
