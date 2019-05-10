import React from "react";
import styled from "styled-components";
import { Icon } from "expo";

const MenuItem = props => (
  <Container>
    <IconView>
      <Icon.Ionicons name={props.icon} size={26} color="#BDE4F7" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
`;

const Content = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
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
