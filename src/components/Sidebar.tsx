import { useContext, useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

import { FinancialContext } from "../context/financialContext";
import { Routes } from "../router/routes.enum";
import LogoutDialog from "./LogoutDialog";
import { menu } from "../utilities/menu";

const Sidebar = () => {
  const navigate = useNavigate();
  const context = useContext(FinancialContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const onLogOut = () => {
    context?.logout();

    navigate(Routes.Login, { replace: true });
  };

  return (
    <aside className='h-full w-64 border-r-2 py-6 px-2 flex justify-between flex-col'>
      <div className='flex flex-col gap-10'>
        <div className='text-center font-bold'>Logo</div>
        <ul className='flex flex-col gap-2'>
          {menu.map((item) => (
            <NavLink
              key={item.text}
              to={item.route}
              className={({ isActive }) => {
                return isActive
                  ? "bg-slate-200 border-r-4 border-r-blue-950"
                  : "";
              }}
            >
              <div className='flex justify-start items-center gap-2 w-full p-2'>
                <div className='text-2xl'>{item.icon}</div>
                <span>{item.text}</span>
              </div>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className='flex justify-center'>
        <button
          className='text-xl'
          data-testid='showDialogLogout'
          onClick={onOpen}
        >
          <IoMdLogOut />
        </button>
      </div>

      <LogoutDialog
        isOpen={isOpen}
        onClose={onClose}
        onLogOut={onLogOut}
        cancelRef={cancelRef as any}
      />
    </aside>
  );
};

export default Sidebar;
