import React from "react";
import styled from "styled-components";

const Child = props => (
  <Container>
    <Image source={{ uri: props.profile_pic }} />
    <Content>
      <Name>{props.name}</Name>
      <Text>{props.classe}</Text>
    </Content>
  </Container>
);

export default Child;

const Container = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

const Image = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  justify-content: center;
`;

const Content = styled.View`
  padding-left: 20px;
`;

const Name = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
`;
