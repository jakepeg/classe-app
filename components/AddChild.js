import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { withNavigation } from "react-navigation";
import { BlurView } from "expo";
import Success from "./Success";
import Loading from "./Loading";
import { Animated, Dimensions } from "react-native";
import { connect } from "react-redux";
import firebase from "./Firebase";
import { Icon } from "expo";

const screenHeight = Dimensions.get("window").height;

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeAddChild: () =>
      dispatch({
        type: "CLOSE_ADD_CHILD"
      })
  };
}

class AddChild extends React.Component {
  state = {
    childname: "",
    isSuccessful: false,
    isLoading: false,
    top: new Animated.Value(screenHeight),
    scale: new Animated.Value(1.3),
    translateY: new Animated.Value(0)
  };

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.action === "openAddChild") {
      Animated.timing(this.state.top, {
        toValue: 0,
        duration: 0
      }).start();
      Animated.spring(this.state.scale, { toValue: 1 }).start();
      Animated.timing(this.state.translateY, {
        toValue: 0,
        duration: 0
      }).start();
    }

    if (this.props.action === "closeAddChild") {
      setTimeout(() => {
        Animated.timing(this.state.top, {
          toValue: screenHeight,
          duration: 0
        }).start();
        Animated.spring(this.state.scale, { toValue: 1.3 }).start();
      }, 500);

      Animated.timing(this.state.translateY, {
        toValue: 1000,
        duration: 500
      }).start();
    }
  }

  handleChildSubmit = () => {
    // add to db and if success show confirmation and close modal show updated child list
    console.log("handle child submit");
  };

  tapBackground = () => {
    Keyboard.dismiss();
    this.props.closeAddChild();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableWithoutFeedback onPress={this.tapBackground}>
          <BlurView
            tint="light"
            intensity={1}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          />
        </TouchableWithoutFeedback>
        <AnimatedModal
          style={{
            transform: [
              { scale: this.state.scale },
              { translateY: this.state.translateY }
            ]
          }}
        >
          <ChildProfilePic source={require("../assets/avatar-default.jpg")} />
          <Text>Get Started with ClasseApp</Text>
          <TextInput
            onChangeText={childname => this.setState({ childname })}
            placeholder="Child name"
          />
          <IconName>
            <Icon.Ionicons name="ios-person" size={26} color="#009adb" />
          </IconName>
          <TouchableOpacity onPress={this.handleChildSubmit}>
            <Button>
              <ButtonText>Add Child</ButtonText>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.closeAddChild()}>
            <LinkText>Cancel</LinkText>
          </TouchableOpacity>
        </AnimatedModal>
        <Success isActive={this.state.isSuccessful} />
        <Loading isActive={this.state.isLoading} />
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(AddChild));

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 154, 219, 0.75);
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Modal = styled.View`
  width: 335px;
  height: 285px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const AnimatedModal = Animated.createAnimatedComponent(Modal);

const ChildProfilePic = styled.Image`
  width: 68px;
  height: 68px;
  margin-top: -32px;
  border-radius: 32px;
  border-width: 4px;
  border-color: #ffffff;
`;
const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;
const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;
const Button = styled.View`
  background: #d5003c;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
const LinkText = styled.Text`
  color: #009adb;
  font-weight: 600;
  font-size: 18px;
  margin-top: 20px;
`;
const IconName = styled.View`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 116px;
  left: 31px;
`;
