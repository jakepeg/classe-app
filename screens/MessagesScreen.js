import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Chat from "../components/Chat";

class MessagesScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <RootView>
        <Header />
        <Chat />
      </RootView>
    );
  }
}

export default MessagesScreen;

const RootView = styled.View`
  background: white;
  flex: 1;
`;
