import React from "react";
import styled from "styled-components";

class EmptyScreen extends React.Component {
  static navigationOptions = {
    // header: null
  };

  render() {
    return (
      <Container>
        <Text>Coming Soon</Text>
      </Container>
    );
  }
}

export default EmptyScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
