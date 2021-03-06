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
      <RightArrow style={{ position: "absolute", right: 60 }}>
        <Icon.Ionicons
          name="ios-arrow-forward"
          size={20}
          color="#BDE4F7"
          style={{ marginTop: -2 }}
        />
      </RightArrow>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin-top: 36px;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
`;

const Content = styled.View`
  padding-left: 20px;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  margin-top: 5px;
`;

const RightArrow = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
