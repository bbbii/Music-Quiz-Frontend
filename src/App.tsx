import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import { UserLayout } from "./Layout";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
