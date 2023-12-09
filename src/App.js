import { Provider } from "react-redux";
import MainRoute from "./Routes/MainRoute";
import "./Themes/App.scss";
import 'antd/dist/antd.css';
import { store, persistor} from "Redux/ConfigureStore";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import MuiTheme from "Themes/MuiTheme";
import history from "Utils/history";
function App() {
  return (
    <div>
      <StylesProvider injectFirst>
        <ThemeProvider theme={MuiTheme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ConnectedRouter history={history}>
                <MainRoute  history={history}/>
              </ConnectedRouter>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
