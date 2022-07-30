import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import store from './redux/store';
import { GlobalStyles } from './styles/global/GlobalStyles';
import { defaultTheme } from './styles/themes';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
