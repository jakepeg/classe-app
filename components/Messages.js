import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import styled from "styled-components";
import MessageItem from "./MessageItem";
import { withNavigation } from "react-navigation";

class Messages extends React.Component {
  render() {
    return (
      <Content>
        <TouchableOpacity
          key={1000}
          onPress={() => this.props.navigation.navigate("Messages")}
        >
          <MessageItem
            key={1000}
            icon="ios-person"
            title="Mr Teacher (Classe 1P)"
            text="Direct Chat"
          />
        </TouchableOpacity>

        <TouchableOpacity
          key={2000}
          onPress={() => this.props.navigation.navigate("Messages")}
        >
          <MessageItem
            key={2000}
            icon="ios-people"
            title="Classe 1P"
            text="Group Chat"
          />
        </TouchableOpacity>

        <TouchableOpacity
          key={3000}
          onPress={() =>
            Linking.openURL("mailto:jakepeg@gmail.com?subject=abcdefg")
          }
        >
          <MessageItem
            key={3000}
            icon="ios-mail"
            title="Message School"
            text="Send Email"
          />
        </TouchableOpacity>

        <TouchableOpacity
          key={4000}
          onPress={() => Linking.openURL(`tel:+41765362302`)}
        >
          <MessageItem
            key={4000}
            icon="ios-call"
            title="Phone School"
            text="Call +41 0765362302"
          />
        </TouchableOpacity>
      </Content>
    );
  }
}

export default withNavigation(Messages);

const Content = styled.View`
  height: 100%;
  width: 100%;
  background: #ffffff;
  /* padding-top: 50px; */
  padding-left: 30px;
`;
