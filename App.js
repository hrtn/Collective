import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import RecipeScreen from "./src/screens/RecipeScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Recipes: { screen: RecipeScreen },
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
