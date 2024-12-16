import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import MyState from './context/myState.jsx';

import { Provider } from "react-redux"
import { store } from './redux/store.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <MyState>
    <App />
   
    </MyState>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
