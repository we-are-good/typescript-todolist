import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import Router from "./router/Router.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
