import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { Icon } from "expo";

const screenWidth = Dimensions.get("window").width;

function getCourseWidth(screenWidth) {
  var cardWidth = screenWidth - 40;
  if (screenWidth >= 768) {
    cardWidth = screenWidth - 60;
  }
  if (screenWidth >= 1024) {
    cardWidth = (screenWidth - 80) / 3;
  }
  return cardWidth;
}

class Card extends React.Component {
  state = {
    cardWidth: getCourseWidth(screenWidth)
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.adaptLayout);
  }

  adaptLayout = dimensions => {
    this.setState({
      cardWidth: getCourseWidth(dimensions.window.width)
    });
  };

  render() {
    const posty = this.props.date;
    const year = posty.slice(0, 4);
    const month = posty.slice(5, 7);
    const day = posty.slice(8, 10);
    const theDate = day + "/" + month + "/" + year;

    return (
      <Container style={{ width: this.state.cardWidth }}>
        <Cover>
          {/* {this.props.category == "News" ? (
            <Image source={require("../assets/news_bg.jpg")} />
          ) : (
            <Image source={require("../assets/background8.jpg")} />
          )} */}

          <CategoryIcon>
            {this.props.category == "News" ? (
              <Icon.Ionicons
                name="ios-megaphone"
                size={20}
                color="#4F4F4F"
                style={{ marginTop: -2 }}
              />
            ) : (
              <Icon.Ionicons
                name="ios-calendar"
                size={20}
                color="#4F4F4F"
                style={{ marginTop: -2 }}
              />
            )}
          </CategoryIcon>
          <Subtitle>{this.props.subtitle}</Subtitle>
        </Cover>
        <Content>
          <Avatar source={require("../assets/teacher_avatar.jpg")} />
          <Caption>{this.props.title}</Caption>
          <Author>
            Posted by {this.props.author} on {theDate}
          </Author>
        </Content>
      </Container>
    );
  }
}

export default Card;

const Container = styled.View`
  width: 335px;
  height: 120px;
  background: white;
  margin: 10px 10px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  elevation: 10;
`;

const Cover = styled.View`
  height: 40px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  background-color: #bde4f7;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const CategoryIcon = styled.Text`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  /* color: rgba(255, 255, 255, 0.8); */
  color: #4f4f4f;
  text-transform: uppercase;
  position: absolute;
  margin-left: 40px;
  margin-top: 13px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 16px;
  color: #3c4560;
  font-weight: 500;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
