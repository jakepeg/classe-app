import React from "react";
import { StatusBar, Platform } from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Chat from "../components/Chat";

class MessagesScreen extends React.Component {
  static navigationOptions = {
    // header: null
    title: "Mr Teacher Chat"
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);

    // if (Platform.OS == "android") {
    //   StatusBar.setBarStyle("light-content", true);
    // }
  }

  render() {
    return (
      <RootView>
        <StatusBar backgroundColor="transparent" translucent={true} />
        {/* <Header /> */}
        <Chat />
      </RootView>
    );
  }
}

export default MessagesScreen;

const RootView = styled.View`
  background: white;
  flex: 1;
`;
