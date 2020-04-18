import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import CaliculateScreen from "./src/screens/CaliculateScreen";
import CopyScreen from "./src/screens/CopyScreen";
import ViewScreen from "./src/screens/ViewScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "ホーム",
      };
    },
  },
  View: {
    screen: ViewScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "詳細",
      };
    },
  },
});

const ModalStack = createStackNavigator(
  {
    HomeStack: { screen: HomeStack },
    Caliculate: {
      screen: CaliculateScreen,
      mode: "modal",
      navigationOptions: ({ navigation }) => {
        return {
          title: "レシピを計算",
        };
      },
    },
    Copy: {
      screen: CopyScreen,
      mode: "modal",
      navigationOptions: ({ navigation }) => {
        return {
          title: "レシピを計算",
        };
      },
    },
  },
  {
    initialRouteName: "HomeStack",
    mode: "modal",
    headerMode: "none",
  }
);

export default class App extends React.Component {
  render() {
    //AppContainerでラップ
    const Layout = createAppContainer(ModalStack);

    return <Layout />;
  }
}
