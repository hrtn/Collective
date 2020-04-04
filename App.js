import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import RecipeScreen from "./src/screens/RecipeScreen";
import CaliculateScreen from "./src/screens/CaliculateScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Caliculate: { screen: CaliculateScreen },
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
