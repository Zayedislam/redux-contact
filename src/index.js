import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactReducer } from "./redux/reducers/contactReducer";

const store = createStore(contactReducer, composeWithDevTools());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    
    <App />
  
      
    
  </Provider>,
  rootElement
);


