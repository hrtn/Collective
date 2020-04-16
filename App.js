import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import CaliculateScreen from "./src/screens/CaliculateScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "ホーム",
        };
      },
    },
    Caliculate: {
      screen: CaliculateScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "レシピを計算",
          mode: "modal",
        };
      },
    },
  },

  {
    initialRouteName: "Home",
  }
);

export default class App extends React.Component {
  render() {
    //AppContainerでラップ
    const Layout = createAppContainer(Stack);

    return <Layout />;
  }
}
