import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import Pokedex from "./pages/Pokedex";
import RootLayout from "./pages/RootLayout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/Theme";
import axios from "axios";
import { SWRConfig } from "swr/_internal";
import Pokemon from "./pages/Pokemon";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import Error from "./pages/Error";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  // DEFINIÇÃO ROTAS
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:name" element={<Pokemon />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    )
  );

  // DEFINIÇÃO DO FETCHER (AXIOS)
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SWRConfig value={{ fetcher }}>
            <RouterProvider router={route} />
          </SWRConfig>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
