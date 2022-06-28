// packages
import * as React from "react"
import { Provider as StoreProvider} from 'react-redux';
import '../translations/i18n.js'

//store
import store from '../store'

// components
import App from "../components/App";

// markup
const IndexPage = () => {
  
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  )
};

export default IndexPage
