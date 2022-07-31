import { IconContext } from 'phosphor-react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import store from './redux/store';
import { GlobalStyles } from './styles/global/GlobalStyles';
import { defaultTheme } from './styles/themes';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <IconContext.Provider
        value={{
          color: 'limegreen',
          size: 32,
          weight: 'bold',
          mirrored: false,
        }}
      >
        <GlobalStyles />
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </IconContext.Provider>
    </ThemeProvider>
  </Provider>
);

export default App;
