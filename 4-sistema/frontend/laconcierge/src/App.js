import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import Routes from "./routes";

// STYLES
import GlobalStyle from "./styles/global";

// HOOKS
import { AppProvider } from "./hooks";

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}
