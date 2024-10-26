
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from "react-redux";
import { store } from "./app/store";
import Routeur from './Routeur';


function App() {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routeur />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>

  );
}

export default App;
