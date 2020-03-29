import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const { navigation } = this.props;
const section = navigation.getParam("section");

class Recipe extends React.Component {
  render() {
    return (
      <Container>
        <TouchableOpacity>
          <View>
            <Text>{section.currentBeanweight}</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default Recipe;

const Container = styled.View`
  background-color: white;
  width: 252px;
  height: 80px;
  border-radius: 15px;
  padding-left: 20px;
  margin-bottom: 16px;
`;
