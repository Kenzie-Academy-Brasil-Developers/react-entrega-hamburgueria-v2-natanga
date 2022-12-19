import { RoutePages } from "./Routes";
import { StyledButtons } from "./styles/Buttons";
import { GlobalStyled } from "./styles/GlobalStyled";
import { ResetCSS } from "./styles/ResetCSS";

function App() {

  return (
    <>
      <GlobalStyled/>
      <ResetCSS/>
      <RoutePages />
    </>
  );
}

export default App;
