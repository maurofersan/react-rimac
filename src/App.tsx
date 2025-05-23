import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { GlobalProvider } from "./store/context/GlobalProvider";

const App = () => {
  return (
    <BrowserRouter basename="/react-rimac">
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
