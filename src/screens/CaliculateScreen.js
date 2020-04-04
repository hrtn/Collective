import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Table, Rows } from "react-native-table-component";

class CaliculateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeCheck: "none",
    };
  }

  render() {
    const { navigation } = this.props;
    const currentBeanWeightNumber = navigation.getParam(
      "currentBeanWeightNumber"
    );
    const defaultRecipe = [
      ["蒸らし", "30秒", currentBeanWeightNumber * 2.5],
      ["", "1分", currentBeanWeightNumber * 5.25],
      ["", "1分30秒", currentBeanWeightNumber * 8],
      ["", "2分", currentBeanWeightNumber * 12],
      ["", "2分30秒", currentBeanWeightNumber * 16],
      ["落ち切り", "3分30秒", currentBeanWeightNumber * 16],
    ];
    const unlimitedRecipe = [
      ["蒸らし", "30秒", currentBeanWeightNumber * 2.5],
      ["", "45秒", currentBeanWeightNumber * 5.25],
      ["", "1分", currentBeanWeightNumber * 8],
      ["", "1分30秒", currentBeanWeightNumber * 12],
      ["", "2分", currentBeanWeightNumber * 16],
      ["落ち切り", "3分", currentBeanWeightNumber * 16],
    ];
    return (
      <Container>
        <Text style={[styles.recipeTitle, { marginBottom: 16 }]}>
          レシピを作成しました
        </Text>
        <Text style={styles.beanWeightText}>
          豆の重さ : {currentBeanWeightNumber}g
        </Text>
        <View>
          <Text style={{ marginBottom: 16 }}>レシピを選択してください</Text>
        </View>
        <RecipieChangeBox style={{ marginBottom: 36 }}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ recipeCheck: "light" })}
          >
            <View
              style={
                this.state.recipeCheck == "light"
                  ? styles.activeBtn
                  : styles.defaultBtn
              }
            >
              <Text
                style={
                  this.state.recipeCheck == "light"
                    ? styles.activeText
                    : styles.defaultText
                }
              >
                浅煎りコーヒー
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ recipeCheck: "dark" })}
          >
            <View
              style={[
                styles.margin8,
                this.state.recipeCheck == "dark"
                  ? styles.activeBtn
                  : styles.defaultBtn,
              ]}
            >
              <Text
                style={
                  this.state.recipeCheck == "dark"
                    ? styles.activeText
                    : styles.defaultText
                }
              >
                深煎りコーヒー
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </RecipieChangeBox>
        <Table
          borderStyle={{
            borderWidth: 1,
            borderColor: "#e8e8e8",
          }}
          style={{ marginBottom: 48 }}
        >
          <Rows
            data={
              this.state.recipeCheck == "dark" ? unlimitedRecipe : defaultRecipe
            }
            textStyle={styles.rowText}
            style={{ width: 300, backgroundColor: "#F6F6F6" }}
          />
        </Table>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Diary", {
              createdRecipe: this.state.recipeCheck
                ? defaultRecipe
                : unlimitedRecipe,
            })
          }
        >
          <View style={[styles.goToRecipeButton, { marginBottom: 16 }]}>
            <Text style={styles.goToRecipeText}>日記を書く</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.goBackTopButton}>
            <Text style={styles.goBackTopText}>TOPへ戻る</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default CaliculateScreen;

const Container = styled.View`
  background: #ffffff;
  max-width: 375px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipieChangeBox = styled.View`
  display: flex;
  flex-direction: row;
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
  },
});
