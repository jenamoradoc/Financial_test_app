import { RiHome6Line } from "react-icons/ri";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";

import { Routes } from "../router/routes.enum";
import { MenuItem } from "../types/menu.type";

export const menu: MenuItem[] = [
  {
    route: Routes.Dashboard,
    text: "Dashboard",
    icon: <RiHome6Line />,
  },
  {
    route: Routes.Projections,
    text: "Projections",
    icon: <MdOutlineIntegrationInstructions />,
  },
  {
    route: Routes.Invoices,
    text: "Invoices",
    icon: <TbFileInvoice />,
  },
];
