import React from "react";
import styled from "styled-components";
import { Icon } from "expo";

const Child = props => (
  <Container>
    <Image source={{ uri: props.profile_pic, cache: "force-cache" }} />
    <Content>
      <Name>{props.name}</Name>
      <Text>{props.classe}</Text>
      <RightArrow style={{ position: "absolute", right: 80 }}>
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
  border-width: 2px;
  border-color: #bde4f7;
`;

const Content = styled.View`
  padding-left: 20px;
  width: 100%;
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

const RightArrow = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
