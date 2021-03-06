import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";

class MoreScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Menu />
      </Container>
    );
  }
}

export default MoreScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
