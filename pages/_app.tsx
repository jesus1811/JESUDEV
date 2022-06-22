import "../scss/_globals.scss";
import StoreProvider from "../store";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
