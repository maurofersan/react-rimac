import "./App.css";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { GlobalProvider } from "./store/context/GlobalProvider";

const App = () => {
  return (
    <HashRouter>
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </HashRouter>
  );
};

export default App;
