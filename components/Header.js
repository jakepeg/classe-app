import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";

function mapStateToProps(state) {
  console.log(state.child_name);
  return { childName: state.child_name, childImage: state.child_image };
}

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderImage source={require("../assets/headerbluesolid.png")} />

        <Name>{this.props.childName}</Name>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Children")}
        >
          <ProfileImage
            source={{ uri: this.props.childImage, cache: "force-cache" }}
          />
        </TouchableOpacity>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps)(withNavigation(Header));

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
