import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
    Section: SettingsScreen
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(TabNavigator);
