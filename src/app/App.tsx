import { AppRouter } from "./router/AppRouter";
import { GlobalProvider } from "../store/context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  );
};

export default App;
