import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      }),
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name
      }),
    openLogin: () =>
      dispatch({
        type: "OPEN_LOGIN"
      })
  };
}

class Menu extends React.Component {
  handleMenu = (index, link) => {
    if (index === 7) {
      this.props.openLogin();
    }
    this.props.navigation.navigate(link);
  };

  render() {
    return (
      <Content>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => this.handleMenu(index, item.link)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Menu));

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
    text: "settings",
    link: "EmptyScreen"
  },
  {
    icon: "ios-people",
    title: "My Children",
    text: "change or edit children",
    link: "Children"
  },
  {
    icon: "ios-help-buoy",
    title: "Support",
    text: "get help",
    link: "EmptyScreen"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "make payments",
    link: "EmptyScreen"
  },
  {
    icon: "ios-information-circle",
    title: "School Information",
    text: "documents and forms",
    link: "EmptyScreen"
  },
  {
    icon: "ios-quote",
    title: "Provide Feedback",
    text: "tell us your thoughts",
    link: "EmptyScreen"
  },
  {
    icon: "ios-lock",
    title: "Privacy",
    text: "how we protect your data",
    link: "EmptyScreen"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!",
    link: "Children"
  }
];
