import ConsenHead from "@/src/ConsenHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import { Fragment, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "@/public/assets/yektanetCdn";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  const [loding, setLoding] = useState(true);
  setTimeout(() => {
    setLoding(false);
  }, 1500);

  return (
    <Fragment>
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        position={"top-center"}
        className='text-center'
      />{" "}
      <ConsenHead />
      <Preloader />
      {!loding && <Component {...pageProps} />}
      {/* </ToastContainer> */}
      <Script src='/assets/yektanetCdn.js' strategy='beforeInteractive' />
    </Fragment>
  );
};
export default App;
