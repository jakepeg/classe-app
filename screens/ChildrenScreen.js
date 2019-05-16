import React from "react";
import styled from "styled-components";
import Children from "../components/Children";

class ChildrenScreen extends React.Component {
  static navigationOptions = {
    header: null
    //var tabBarVisible = false;
  };

  render() {
    return (
      <Container>
        <Children />
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
