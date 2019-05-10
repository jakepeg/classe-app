import React from "react";
import styled from "styled-components";

class ChildrenScreen extends React.Component {
  static navigationOptions = {
    // header: null
  };

  render() {
    return (
      <Container>
        <Text>My Children Screen</Text>
      </Container>
    );
  }
}

export default ChildrenScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
