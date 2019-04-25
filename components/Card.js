import React from "react";
import styled from "styled-components";
import { Icon } from "expo";

const categoryIcon = "";

const Card = props => (
  <Container style={{ elevation: 10 }}>
    <Cover>
      <Image source={props.image} />
      {/* <Title>{props.category}</Title> */}
    </Cover>
    <Content>
      {/* <Logo source={props.logo} /> */}
      <Wrapper>
        <CategoryIcon>
          {props.category == "News" ? (
            <Icon.Ionicons
              name="ios-megaphone"
              size={36}
              color="#4775f2"
              style={{ marginTop: -2 }}
            />
          ) : (
            <Icon.Ionicons
              name="ios-calendar"
              size={36}
              color="#4775f2"
              style={{ marginTop: -2 }}
            />
          )}
        </CategoryIcon>

        <Caption>{props.title}</Caption>
        {/* <Subtitle>{props.subtitle.toUpperCase()}</Subtitle> */}
      </Wrapper>
    </Content>
  </Container>
);

export default Card;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  margin-left: 20px;
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Wrapper = styled.View`
  flex-direction: row;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const CategoryIcon = styled.Text``;
