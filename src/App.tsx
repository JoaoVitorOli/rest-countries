import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./hooks/usePersistedState";

import Header from "./components/Header";
import Main from "./components/Main";

import GlobalStyles from "./styles/globals";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
