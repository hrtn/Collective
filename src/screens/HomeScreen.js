import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import FAB from "react-native-fab";
import Modal from "react-native-modalbox";
import { Table, Rows } from "react-native-table-component";

import CreateRecipeModal from "../components/CreateRecipeModal";
import Card from "../components/Card";
import DateNumber from "../components/DateNumber";

const today = new Date();

const cards = [
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
  },
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 1,
    grindTextID: 0,
    BeanWeightNumber: 13,
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isOpen: false,
      currentBeanWeightNumber: 0,
      isDisabled: false,
      swipeToClose: true,
      recipeCheck: true,
      sliderValue: 0.3,
      recipeCheck: true,
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleSemiModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  handleCreate = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.currentBeanWeightNumber);
  };
  onClose = () => {
    console.log("Modal just closed");
  };

  changeTextInput = (e) => {
    this.setState({ currentBeanWeightNumber: e });
  };

  onOpen = () => {
    console.log(this.state.currentBeanWeightNumber);
  };

  onClosingState(state) {
    console.log("the open/close of the swipeToClose just changed");
  }

  render() {
    const defaultRecipe = [
      ["蒸らし", "30秒", this.state.currentBeanWeightNumber * 2.5],
      ["", "1分", this.state.currentBeanWeightNumber * 5.25],
      ["", "1分30秒", this.state.currentBeanWeightNumber * 8],
      ["", "2分", this.state.currentBeanWeightNumber * 12],
      ["", "2分30秒", this.state.currentBeanWeightNumber * 16],
      ["落ち切り", "3分30秒", this.state.currentBeanWeightNumber * 16],
    ];
    const unlimitedRecipe = [
      ["蒸らし", "30秒", this.state.currentBeanWeightNumber * 2.5],
      ["", "45秒", this.state.currentBeanWeightNumber * 5.25],
      ["", "1分", this.state.currentBeanWeightNumber * 8],
      ["", "1分30秒", this.state.currentBeanWeightNumber * 12],
      ["", "2分", this.state.currentBeanWeightNumber * 16],
      ["落ち切り", "3分", this.state.currentBeanWeightNumber * 16],
    ];
    const BeanWeightNumber = this.state.currentBeanWeightNumber;
    return (
      <Container>
        <DateContainer>
          <LeftBlock>
            <DateNumber DateNumber={today.getDate() - 2} />
          </LeftBlock>
          <RightBlock>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                faceID={card.faceID}
                grindTextID={card.grindTextID}
                BeanWeightNumber={card.BeanWeightNumber}
              />
            ))}
          </RightBlock>
        </DateContainer>
        <DateContainer>
          <LeftBlock>
            <DateNumber DateNumber={today.getDate() - 1} />
          </LeftBlock>
          <RightBlock>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                faceID={card.faceID}
                grindTextID={card.grindTextID}
                BeanWeightNumber={card.BeanWeightNumber}
              />
            ))}
          </RightBlock>
        </DateContainer>
        <DateContainer>
          <LeftBlock>
            <DateNumber DateNumber={today.getDate()} />
          </LeftBlock>
          <RightBlock>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                faceID={card.faceID}
                grindTextID={card.grindTextID}
                BeanWeightNumber={card.BeanWeightNumber}
              />
            ))}
          </RightBlock>
        </DateContainer>
        <FAB
          buttonColor="#252525"
          iconTextColor="#FFFFFF"
          onClickAction={() => this.toggleSemiModal()}
          visible={true}
          iconTextComponent={<Text>+</Text>}
        />
        <CreateRecipeModal
          isVisible={this.state.isVisible}
          onModalClose={() => this.toggleSemiModal()}
          onChangeText={(e) => this.changeTextInput(e)}
          value={this.state.currentBeanWeightNumber}
          onPress={() => this.refs.modal1.open()}
        />
        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}
        >
          <Text style={[styles.recipeTitle, { marginBottom: 16 }]}>
            レシピを作成しました
          </Text>
          <Text style={styles.beanWeightText}>
            豆の重さ : {this.state.currentBeanWeightNumber}g
          </Text>
          <Text style={[styles.modalText, { marginBottom: 16 }]}>
            レシピを選択してください
          </Text>
          <RecipieChangeBox style={{ marginBottom: 36 }}>
            <TouchableWithoutFeedback
              onPress={() =>
                this.setState({ recipeCheck: !this.state.recipeCheck })
              }
            >
              <View
                style={
                  this.state.recipeCheck ? styles.activeBtn : styles.defaultBtn
                }
              >
                <Text
                  style={
                    this.state.recipeCheck
                      ? styles.activeText
                      : styles.defaultText
                  }
                >
                  浅煎りコーヒー
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                this.setState({ recipeCheck: !this.state.recipeCheck })
              }
            >
              <View
                style={[
                  styles.margin8,
                  this.state.recipeCheck ? styles.defaultBtn : styles.activeBtn,
                ]}
              >
                <Text
                  style={
                    this.state.recipeCheck
                      ? styles.defaultText
                      : styles.activeText
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
              data={this.state.recipeCheck ? defaultRecipe : unlimitedRecipe}
              textStyle={styles.rowText}
              style={{ width: 300, backgroundColor: "#F6F6F6" }}
            />
          </Table>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Recipes", {
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
          <TouchableOpacity onPress={() => this.refs.modal1.close()}>
            <View style={styles.goBackTopButton}>
              <Text style={styles.goBackTopText}>TOPへ戻る</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      </Container>
    );
  }
}

const Container = styled.View`
  background: #ffffff;
  max-width: 375px;
  padding: 20px;
  height: 100%;
`;

const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const LeftBlock = styled.View`
  width: 20%;
  justify-content: flex-start;
`;

const RightBlock = styled.View`
  width: 80%;
  text-align: left;
  flex: 1;
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
  },
});
