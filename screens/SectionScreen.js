import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  StatusBar,
  WebView,
  Linking,
  ScrollView
} from "react-native";
import { Icon } from "expo";
import Markdown from "react-native-showdown";

const formatDate = date => new Date(date).toDateString();

class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <ScrollView>
        <Container>
          <StatusBar hidden />
          <Cover>
            <Image source={{ uri: section.featuredImage.sourceUrl }} />
            <Wrapper>
              {/* <Logo source={{ uri: section.logo.url }} />
              <Subtitle>{section.subtitle}</Subtitle> */}
            </Wrapper>

            {/* <Caption>{section.caption}</Caption> */}
          </Cover>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            <CloseView>
              <Icon.Ionicons
                name="ios-close"
                size={36}
                color="#4775f2"
                style={{ marginTop: -2 }}
              />
            </CloseView>
          </TouchableOpacity>

          <Content>
            <Title>{section.title}</Title>
            <Markdown
              body={section.content}
              pureCSS={htmlStyles}
              scalesPageToFit={false}
              scrollEnabled={false}
            />
            <Caption>
              Posted By {section.author.name} on {section.date}
            </Caption>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default SectionScreen;

const htmlStyles = `
    * {
      font-family: -apple-system, Roboto;
      margin: 0;
      padding: 0;
      font-size: 17px;
      font-weight: normal;
      color: #3c4560;
      line-height: 24px;
    }

    h2 {
      font-size: 20px;
      text-transform: uppercase;
      color: #b8bece;
      font-weight: 600;
      margin-top: 50px;
    }
  
    p {
      margin-top: 20px;
    }
  
    a {
      color: #4775f2;
      font-weight: 600;
      text-decoration: none;
    }
  
    strong {
      font-weight: 700;
    }

    img {
      width: 100%;
      border-radius: 10px;
      margin-top: 20px;
    }

    pre {
      padding: 20px;
      background: #212C4F;
      overflow: hidden;
      word-wrap: break-word;
      border-radius: 10px;
      margin-top: 20px;
    }
    
    code {
      color: white;
    }
`;

const Content = styled.View`
  height: 1000px;
  padding: 20px;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
  width: 170px;
`;

const Caption = styled.Text`
  color: black;
  font-size: 17px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
