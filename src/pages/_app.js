import { ThemeProvider } from "@emotion/react";
import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import theme from "@/mui-theme";
import { persistor, store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/services/http-client";
import "react-notifications/lib/notifications.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {typeof window !== "undefined" ? (
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      ) : (
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </ThemeProvider>
      )}
    </Provider>
  );
}

export default MyApp;
