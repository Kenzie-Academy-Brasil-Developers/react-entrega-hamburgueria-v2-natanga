import { ToastContainer } from "react-toastify";
import { RoutePages } from "./Routes";
import { GlobalStyled } from "./styles/GlobalStyled";
import { ResetCSS } from "./styles/ResetCSS";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <GlobalStyled />
      <ResetCSS />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RoutePages />
    </>
  );
}

export default App;
