import React from "react";
import { TouchableOpacity, Button } from "react-native";
import styled from "styled-components";
import Child from "./Child";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import ModalLogin from "../components/ModalLogin";

function mapStateToProps(state) {
  return { action: state.child_name };
}

const mapDispatchToProps = dispatch => ({
  selectChild: (name, pic) =>
    dispatch({
      type: "SELECT_CHILD",
      name: name,
      pic: pic
    }),
  openLogin: () =>
    dispatch({
      type: "OPEN_LOGIN"
    })
});

class Children extends React.Component {
  selectedChild(childName, mugShot) {
    this.props.selectChild(childName, mugShot);
    this.props.navigation.navigate("Home");
  }

  componentDidMount() {
    this.props.openLogin();
    console.log("children component mounted");
  }

  // component did update - if loggedin false: openlogin, if true: don't open login. Logout needs to update loggedin to false, then load childrescreen
  componentDidUpdate() {
    console.log("children component updated");
  }

  render() {
    return (
      <Wrapper>
        <ChildList>
          <Title>Mes Enfants</Title>
          {children.map((child, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.selectedChild(child.name, child.profile_pic)}
            >
              <Child
                key={index}
                profile_pic={child.profile_pic}
                name={child.name}
                classe={child.classe}
              />
            </TouchableOpacity>
          ))}
        </ChildList>

        <Container>
          <ActionButton>+</ActionButton>
        </Container>
        <ModalLogin />
      </Wrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Children));

const ChildList = styled.View`
  padding-left: 30px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: 300;
  width: 100%;
  margin-top: 70px;
  text-align: center;
`;

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  background: #009adb;
`;

const Container = styled.View`
  position: absolute;
  margin-left: -30px;
  left: 50%;
  bottom: 40px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  elevation: 10;
  background-color: #ffffff;
`;

const ActionButton = styled.Text`
  font-size: 45px;
  font-weight: 600;
  color: #d5003c;
  width: 60px;
  height: 60px;
  text-align: center;
`;

const children = [
  {
    name: "Quin Jim",
    profile_pic: "https://cl.ly/9e343dd10c2c/quin.png",
    child_id: "00000001",
    classe: "1P (Marie-Anne)",
    classe_id: "00000001",
    school_id: "00000001"
  },
  {
    name: "Elodie Laia",
    profile_pic: "https://cl.ly/80131793f4f8/IMG_0216.jpg",
    child_id: "00000002",
    classe: "8E (Cyril)",
    classe_id: "00000002",
    school_id: "00000002"
  },
  {
    name: "Louis Cyril",
    profile_pic: "https://cl.ly/4667cf183191/lou.jpg",
    child_id: "00000003",
    classe: "Year 12",
    classe_id: "00000003",
    school_id: "00000003"
  }
];
