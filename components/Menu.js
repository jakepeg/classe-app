import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { withNavigation } from "react-navigation";

class Menu extends React.Component {
  render() {
    return (
      <Content>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => this.props.navigation.navigate("Children")}
          >
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          </TouchableOpacity>
        ))}
      </Content>
    );
  }
}

export default withNavigation(Menu);

const Content = styled.View`
  height: 100%;
  width: 100%;
  background: #009adb;
  padding-top: 50px;
  padding-left: 30px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "My Account",
    text: "settings"
  },
  {
    icon: "ios-people",
    title: "My Children",
    text: "change or edit children",
    link: "ChildListScreen"
  },
  {
    icon: "ios-help-buoy",
    title: "Support",
    text: "get help"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "make payments"
  },
  {
    icon: "ios-information-circle",
    title: "School Information",
    text: "documents and forms"
  },
  {
    icon: "ios-quote",
    title: "Provide Feedback",
    text: "we'd love to hear your thoughts"
  },
  {
    icon: "ios-lock",
    title: "Privacy",
    text: "how we protect your data"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!"
  }
];
