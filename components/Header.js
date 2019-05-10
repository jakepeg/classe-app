import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderImage source={require("../assets/headerbluesolid.png")} />
        <Name>Quin Jim</Name>
        <ProfileImage source={require("../assets/quin.png")} />
        {/* <TouchableOpacity
          onPress={() => {
            this.props.navigation.push("Settings");
          }}
          style={{ position: "absolute", right: 20, top: 25 }}
        >
          <Icon.Ionicons
            name="ios-settings"
            size={20}
            color="rgba(255, 255, 255, 0.75)"
            style={{ marginTop: 20 }}
          />
        </TouchableOpacity> */}
      </Wrapper>
    );
  }
}

export default withNavigation(Header);

const ProfileImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  border-width: 4px;
  border-color: #ffffff;
  margin-bottom: -70px;
  margin-top: 15px;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: 300;
`;

const Wrapper = styled.View`
  height: 135px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  z-index: 1000;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
