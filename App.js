import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TabNavigator from "./navigator/TabNavigator";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://temp.snorm.co/graphql"
});

const initialState = {
  user_id: "0001",
  child_id: "0001",
  child_name: "Quin Jim",
  child_image: "https://cl.ly/9e343dd10c2c/quin.png"
};

// const reducer = (state = initialState, selectedChild) => {
//   console.log(selectedChild.name);
//   console.log(selectedChild.pic);
//   return state;
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CHILD":
      return {
        child_name: action.name,
        child_image: action.pic
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
