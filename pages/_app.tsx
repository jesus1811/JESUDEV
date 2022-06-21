import "../scss/_globals.scss";
import StoreProvider from "../store";

function MyApp({ Component, pageProps }: any) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
