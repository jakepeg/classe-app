import React from "react";
import styled from "styled-components";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    // header: null
  };

  render() {
    return (
      <Container>
        <Text>Settings Screen</Text>
      </Container>
    );
  }
}

export default SettingsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
