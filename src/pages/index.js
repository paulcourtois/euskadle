// packages
import * as React from "react"
import { Provider as StoreProvider} from 'react-redux';
import { Helmet } from 'react-helmet';

// translation
import '../translations/i18n.js'

//store
import store from '../store'

// components
import App from "../components/App";

// markup
const IndexPage = () => {
  
  return (
    <StoreProvider store={store}>
      <Helmet
        defaultTitle="Euskadle, wordle en euskara"
      />
      <App />
    </StoreProvider>
  )
};

export default IndexPage
