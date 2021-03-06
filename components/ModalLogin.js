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
import { Alert, Animated, Dimensions } from "react-native";
import { connect } from "react-redux";
import firebase from "./Firebase";
import { AsyncStorage } from "react-native";
import { saveState } from "./AsyncStorage";
import { Icon } from "expo";

const screenHeight = Dimensions.get("window").height;

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeLogin: () =>
      dispatch({
        type: "CLOSE_LOGIN"
      }),
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name
      }),
    updateChildren: kids =>
      dispatch({
        type: "UPDATE_CHILD_LIST",
        kids
      })
  };
}

class ModalLogin extends React.Component {
  state = {
    email: "",
    password: "",
    uid: "",
    iconEmail: require("../assets/icon-email.png"),
    IconPassword: require("../assets/icon-password.png"),
    isSuccessful: false,
    isLoading: false,
    top: new Animated.Value(screenHeight),
    scale: new Animated.Value(1.3),
    translateY: new Animated.Value(0),
    children: ""
  };

  componentDidMount() {
    this.retrieveName();
  }

  componentDidUpdate() {
    if (this.props.action === "openLogin") {
      // console.log("openLogin");
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

    if (this.props.action === "closeLogin") {
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

  storeName = async name => {
    try {
      await AsyncStorage.setItem("name", name);
    } catch (error) {}
  };

  retrieveName = async () => {
    try {
      const name = await AsyncStorage.getItem("name");
      if (name !== null) {
        console.log(name);
        this.props.updateName(name);
      }
    } catch (error) {}
  };

  handleFetchUser = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(this.state.uid)
      .get()
      .then(response => {
        //this.setState({ children: response.data().children });
        this.props.updateChildren(response.data().children);
        this.props.navigation.navigate("Children");
      });
  };

  handleLogin = () => {
    this.setState({ isLoading: true });

    const email = this.state.email;
    const password = this.state.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        Alert.alert("Error", error.message);
      })
      .then(response => {
        this.setState({ uid: firebase.auth().currentUser.uid });
        this.setState({ isLoading: false });
        if (response) {
          this.setState({ isSuccessful: true });
          this.props.updateName(response.user.email);
          setTimeout(() => {
            this.props.closeLogin();
            this.setState({ isSuccessful: false });
          }, 1000);
        }
        this.handleFetchUser();
      });
  };

  tapBackground = () => {
    Keyboard.dismiss();
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
          <Logo source={require("../assets/logo.png")} />
          <Text>Get Started with ClasseApp</Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry={true}
          />

          <IconEmail>
            <Icon.Ionicons name="ios-mail" size={26} color="#009adb" />
          </IconEmail>

          <IconPassword>
            <Icon.Ionicons name="ios-lock" size={26} color="#009adb" />
          </IconPassword>

          <TouchableOpacity onPress={this.handleLogin}>
            <Button>
              <ButtonText>Login</ButtonText>
            </Button>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <LinkText>Sign Up</LinkText>
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
)(withNavigation(ModalLogin));

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 154, 219, 1);
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Modal = styled.View`
  width: 335px;
  height: 350px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const AnimatedModal = Animated.createAnimatedComponent(Modal);

const Logo = styled.Image`
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
const IconEmail = styled.View`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 116px;
  left: 31px;
`;
const IconPassword = styled.View`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 178px;
  left: 35px;
`;
