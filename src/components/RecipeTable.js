import React from "react";
import { StyleSheet } from "react-native";
import { Table, Rows, Row } from "react-native-table-component";

class RecipeTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const HeadTitle = ["Memo", "Time", "Hot Water"];
    // 旧レシピ
    const defaultRecipe = [
      ["蒸らし", "30秒", `${this.props.currentBeanWeightNumber * 2.5} g`],
      ["", "1分", `${this.props.currentBeanWeightNumber * 5.25} g`],
      ["", "1分30秒", `${this.props.currentBeanWeightNumber * 8} g`],
      ["", "2分", `${this.props.currentBeanWeightNumber * 12} g`],
      ["", "2分30秒", `${this.props.currentBeanWeightNumber * 16} g`],
      ["落ち切り", "3分30秒", `${this.props.currentBeanWeightNumber * 16} g`],
    ];
    const unlimitedRecipe = [
      ["蒸らし", "30秒", `${this.props.currentBeanWeightNumber * 2.5} g`],
      ["", "45秒", `${this.props.currentBeanWeightNumber * 5.25} g`],
      ["", "1分", `${this.props.currentBeanWeightNumber * 8} g`],
      ["", "1分30秒", `${this.props.currentBeanWeightNumber * 12} g`],
      ["", "2分", `${this.props.currentBeanWeightNumber * 16} g`],
      ["落ち切り", "3分", `${this.props.currentBeanWeightNumber * 16} g`],
    ];
    // 新レシピ
    // const defaultRecipe = [
    //   ["蒸らし", "0秒", `${this.props.currentBeanWeightNumber * 2.5} g`],
    //   ["", "30秒", `${this.props.currentBeanWeightNumber * 5.25} g`],
    //   ["", "1分", `${this.props.currentBeanWeightNumber * 8} g`],
    //   ["", "1分30秒", `${this.props.currentBeanWeightNumber * 12} g`],
    //   ["", "2分", `${this.props.currentBeanWeightNumber * 16} g`],
    //   ["落ち切り", "3分", `${this.props.currentBeanWeightNumber * 16} g`],
    // ];
    // const unlimitedRecipe = [
    //   ["蒸らし", "0秒", `${this.props.currentBeanWeightNumber * 2.5} g`],
    //   ["", "30秒", `${this.props.currentBeanWeightNumber * 5.25} g`],
    //   ["", "45秒", `${this.props.currentBeanWeightNumber * 8} g`],
    //   ["", "1分", `${this.props.currentBeanWeightNumber * 12} g`],
    //   ["", "1分30秒", `${this.props.currentBeanWeightNumber * 16} g`],
    //   ["落ち切り", "2分30秒", `${this.props.currentBeanWeightNumber * 16} g`],
    // ];
    return (
      <Table
        style={{ borderRadius: 8 }}
        borderStyle={{
          borderWidth: 1,
          borderColor: "#e8e8e8",
        }}
      >
        <Row
          data={HeadTitle}
          textStyle={{ padding: 8, fontWeight: "bold", fontSize: 14 }}
          style={{
            width: 280,
            backgroundColor: "#e8e8e8",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <Rows
          data={
            this.props.recipeCheck == "dark" ? unlimitedRecipe : defaultRecipe
          }
          textStyle={{ paddingTop: 12, paddingBottom: 12, paddingLeft: 8 }}
          style={[styles.rows, { width: 280, backgroundColor: "#F6F6F6" }]}
        />
      </Table>
    );
  }
}

export default RecipeTable;

const styles = StyleSheet.create({
  rows: {
    borderRadius: 0,
  },
  "rows:last-child": {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
