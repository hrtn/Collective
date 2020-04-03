import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Table, Rows } from "react-native-table-component";

class RecipeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const createdRecipe = navigation.getParam("createdRecipe");
    return (
      <Container>
        <Text style={[styles.recipeTitle, { marginBottom: 16 }]}>
          日記を書きましょう
        </Text>
        <Text style={styles.beanWeightText}>
          豆の重さ : {createdRecipe[0][2] / 2.5}g
        </Text>
        <Text style={[styles.modalText, { marginBottom: 16 }]}>レシピ</Text>
        <Table
          borderStyle={{
            borderWidth: 1,
            borderColor: "#e8e8e8",
          }}
          style={{ marginBottom: 48 }}
        >
          <Rows
            data={createdRecipe}
            textStyle={styles.rowText}
            style={{ width: 300, backgroundColor: "#F6F6F6" }}
          />
        </Table>
        <TouchableOpacity>
          <View>
            <Text>ええやん</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default RecipeScreen;

const Container = styled.View`
  background: #ffffff;
  max-width: 375px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  open: {
    textAlign: "center",
    marginTop: 64,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    justifyContent: "start",
    alignItems: "start",
  },
  none: {
    display: "none",
  },
  defaultBtn: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderWidth: 2,
    borderColor: "#F2994A",
    borderStyle: "solid",
    padding: 12,
    textAlign: "center",
  },
  activeBtn: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderWidth: 2,
    borderColor: "#F2994A",
    borderStyle: "solid",
    backgroundColor: "#F2994A",
  },
  defaultText: {
    color: "#F2994A",
    fontWeight: "600",
  },
  activeText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  margin8: {
    marginLeft: 8,
  },
  recipeTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
  },
  goToRecipeButton: {
    width: 300,
    backgroundColor: "#252525",
    borderRadius: 8,
    padding: 12,
    textAlign: "center",
  },
  goBackTopButton: {
    width: 300,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#252525",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 12,
    textAlign: "center",
  },
  goToRecipeText: {
    color: "#ffffff",
  },
  goBackTopText: {
    color: "#252525",
  },
  rowText: {
    padding: 8,
  },
  beanWeightText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#252525",
    marginBottom: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
  },
});
