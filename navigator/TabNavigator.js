import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationActions
} from "react-navigation";

import { Icon } from "expo";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import MoreScreen from "../screens/MoreScreen";
import AgendaScreen from "../screens/AgendaScreen";
import MessageScreen from "../screens/MessageScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ChildrenScreen from "../screens/ChildrenScreen";
import EmptyScreen from "../screens/EmptyScreen";

const activeColor = "#ffffff";
const inactiveColor = "#BDE4F7";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Section: {
      screen: SectionScreen
    },
    Children: {
      screen: ChildrenScreen
    }
  },
  {
    mode: "modal"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Children") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Accueil",
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#009ADB"
      }
      // initialRouteName: "Children"
    },
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
        style={{ marginBottom: -10 }}
      />
    )
  };
};

const AgendaStack = createStackNavigator({
  Agenda: AgendaScreen
});

AgendaStack.navigationOptions = {
  tabBarLabel: "Agenda",
  tabBarOptions: {
    activeTintColor: activeColor,
    inactiveTintColor: inactiveColor,
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: "#009ADB"
    }
  },
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-calendar"
      size={26}
      color={focused ? activeColor : inactiveColor}
      style={{ marginBottom: -10 }}
    />
  )
};

const MessagesStack = createStackNavigator(
  {
    Message: {
      screen: MessageScreen
    },
    Messages: {
      screen: MessagesScreen
    }
  },
  {
    mode: "modal"
  }
);

MessagesStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarOptions: {
    activeTintColor: activeColor,
    inactiveTintColor: inactiveColor,
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: "#009ADB"
    }
  },
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-text"
      size={26}
      color={focused ? activeColor : inactiveColor}
      style={{ marginBottom: -10 }}
    />
  )
};

const MoreStack = createStackNavigator({
  More: {
    screen: MoreScreen
  },
  EmptyScreen: {
    screen: EmptyScreen
  }
});

MoreStack.navigationOptions = ({ navigation }) => {
  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({ routeName: "Home" })]
  // });
  // navigation.dispatch(resetAction);

  //navigation.reset([NavigationActions.navigate({ routeName: "More" })], 0);

  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Children") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Plus",
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#009ADB"
      }
    },
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons
        name="ios-more"
        size={26}
        color={focused ? activeColor : inactiveColor}
        style={{ marginBottom: -10 }}
      />
    )
  };
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  AgendaStack,
  MessagesStack,
  MoreStack
});

export default createAppContainer(TabNavigator);
