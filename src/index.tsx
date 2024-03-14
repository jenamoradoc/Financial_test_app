import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css";

import { FinancialProvider } from "./context/financialContext";
import Router from "./router/router";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <FinancialProvider>
        <Router />
      </FinancialProvider>
    </ChakraProvider>
  </React.StrictMode>
);
