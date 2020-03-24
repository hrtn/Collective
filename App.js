import { createStore } from "redux";
import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const initialState = {
  action: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, action: "openModal" };
    case "CLOSE_MODAL":
      return { ...state, action: "closeModal" };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
