import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Messages from "../components/Messages";

class MessageScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header />
        <Messages />
      </Container>
    );
  }
}

export default MessageScreen;

const Container = styled.View`
  /* flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%; */
`;
