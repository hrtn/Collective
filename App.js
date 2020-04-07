import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import DiaryScreen from "./src/screens/DiaryScreen";
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
    Diary: {
      screen: DiaryScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "日記を作成",
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
