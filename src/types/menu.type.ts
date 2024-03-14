import { Routes } from "../router/routes.enum";

export interface MenuItem {
  route: Routes;
  text: string;
  icon: JSX.Element;
}
