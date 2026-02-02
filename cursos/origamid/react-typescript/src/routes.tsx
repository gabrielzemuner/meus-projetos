import React from "react";
import UseRef01 from "./pages/03-hooks-tsx/useRef-01";
import UseRef02 from "./pages/03-hooks-tsx/useRef-02";
import UseState01 from "./pages/03-hooks-tsx/useState-01";
import UseState02 from "./pages/03-hooks-tsx/useState-02";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import CustomHook from "./pages/03-hooks-tsx/customHook";
import UseEffect from "./pages/03-hooks-tsx/useEffect";
import UseFetch01 from "./pages/03-hooks-tsx/useFetch-01";
import UseContext01 from "./pages/03-hooks-tsx/useContext-01";
import UseContext02 from "./pages/03-hooks-tsx/useContext-02";

type Route = {
  path: string;
  label: string;
  //   component: React.ComponentType;
  component: React.JSX.Element;
  private?: boolean; // ocultar do menu
};

export const routes: Route[] = [
  { path: "/", label: "Home", component: <Home /> },
  { path: "/about", label: "About", component: <About /> },
  { path: "/usestate-01", label: "useState #1", component: <UseState01 /> },
  { path: "/usestate-02", label: "useState #2", component: <UseState02 /> },
  { path: "/useeffect", label: "useEffect", component: <UseEffect /> },
  { path: "/useref-01", label: "useRef #1", component: <UseRef01 /> },
  { path: "/useref-02", label: "useRef #2", component: <UseRef02 /> },
  { path: "/custom-hook", label: "Custom Hook", component: <CustomHook /> },
  { path: "/usefetch", label: "useFetch", component: <UseFetch01 /> },
  { path: "/usecontext-01", label: "useContext #1", component: <UseContext01 /> },
  { path: "/usecontext-02", label: "useContext #2", component: <UseContext02 /> },
];
