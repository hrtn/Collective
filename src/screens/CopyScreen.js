import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  InputAccessoryView,
  Button,
  Keyboard,
} from "react-native";
import styled from "styled-components/native";
import RecipeTable from "../components/RecipeTable";
import moment from "moment";
import { NavigationEvents } from "react-navigation";

import { isIPhoneX } from "../lib/windowsize";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.sqlite", "ver1.1");

class CopyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeCheck: "",
      BeanWeightNumber: 0,
      title: "",
      grindCheck: "",
      faceID: 99,
    };
  }
  changeTextInput = (e) => {
    this.setState({ BeanWeightNumber: e });
  };
  changeBeanTextInput = (e) => {
    this.setState({ title: e });
  };

  saveDiarys(title, faceID, BeanWeightNumber, date, recipeCheck, grindCheck) {
    db.transaction((tx) => {
      tx.executeSql(
        `insert into diarys (title, faceID, BeanWeightNumber, date, recipeCheck, grindCheck) values (?, ?, ?, ?, ?, ?);`,
        [title, faceID, BeanWeightNumber, date, recipeCheck, grindCheck], // SQL文の引数
        () => {
          console.log("success diarys");
          console.log(
            title,
            faceID,
            BeanWeightNumber,
            date,
            recipeCheck,
            grindCheck
          );
        }, // 成功時のコールバック関数
        () => {
          console.log("fail");
        } // 失敗時のコールバック関数
      );
    });
  }

  render() {
    const { navigation } = this.props;
    const _title = navigation.getParam("_title");
    const _recipeCheck = navigation.getParam("_recipeCheck");
    const _BeanWeightNumber = navigation.getParam("_BeanWeightNumber");
    const _grindCheck = navigation.getParam("_grindCheck");
    const currentDate = new Date();
    const date = moment(currentDate).format("YYYY-MM-DD");
    return (
      <Container>
        <NavigationEvents
          onWillFocus={() =>
            this.setState({
              recipeCheck: _recipeCheck,
              BeanWeightNumber: _BeanWeightNumber,
              title: _title,
              grindCheck: _grindCheck,
            })
          }
        />
        <ModalHeadBlock style={isIPhoneX() ? { height: 88 } : { height: 64 }}>
          <ModalHeadInnerBlock
            style={isIPhoneX() ? { paddingTop: 36 } : { paddingTop: 24 }}
          >
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <ModalLeftButton>キャンセル</ModalLeftButton>
            </TouchableWithoutFeedback>
            <ModalTitle>レシピを作成</ModalTitle>
            <ModalRightButton> </ModalRightButton>
          </ModalHeadInnerBlock>
        </ModalHeadBlock>
        <ScrollView>
          <ScrollBox>
            <View style={{ width: 280, marginBottom: 8 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の重さ
              </Text>
              <View style={styles.inputBlock}>
                <TextInput
                  onChangeText={(e) => this.changeTextInput(e)}
                  value={`${this.state.BeanWeightNumber}`}
                  keyboardType={"number-pad"}
                  inputAccessoryViewID={"currentBeanWeightNumber"}
                />
                <Text style={[styles.inputText]}>g</Text>
              </View>
            </View>

            <View style={{ width: 280, marginBottom: 8 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の名前
              </Text>
              <TextBeanInput
                onChangeText={(text) => this.changeBeanTextInput(text)}
                value={this.state.title}
                inputAccessoryViewID={"title"}
              />
            </View>
            <View style={{ width: 280, marginBottom: 8 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の挽き具合
              </Text>
              <RecipieChangeBox style={{ marginBottom: 8 }}>
                <TouchableWithoutFeedback
                  onPress={() => this.setState({ grindCheck: "超細挽き" })}
                >
                  <View
                    style={
                      this.state.grindCheck == "超細挽き"
                        ? styles.activeBtn
                        : styles.defaultBtn
                    }
                  >
                    <Text
                      style={
                        this.state.grindCheck == "超細挽き"
                          ? styles.activeText
                          : styles.defaultText
                      }
                    >
                      超細挽き
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => this.setState({ grindCheck: "細挽き" })}
                >
                  <View
                    style={[
                      styles.margin8,
                      this.state.grindCheck == "細挽き"
                        ? styles.activeBtn
                        : styles.defaultBtn,
                    ]}
                  >
                    <Text
                      style={
                        this.state.grindCheck == "細挽き"
                          ? styles.activeText
                          : styles.defaultText
                      }
                    >
                      細挽き
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </RecipieChangeBox>
              <RecipieChangeBox style={{ marginBottom: 16 }}>
                <TouchableWithoutFeedback
                  onPress={() => this.setState({ grindCheck: "粗挽き" })}
                >
                  <View
                    style={
                      this.state.grindCheck == "粗挽き"
                        ? styles.activeBtn
                        : styles.defaultBtn
                    }
                  >
                    <Text
                      style={
                        this.state.grindCheck == "粗挽き"
                          ? styles.activeText
                          : styles.defaultText
                      }
                    >
                      粗挽き
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => this.setState({ grindCheck: "超粗挽き" })}
                >
                  <View
                    style={[
                      styles.margin8,
                      this.state.grindCheck == "超粗挽き"
                        ? styles.activeBtn
                        : styles.defaultBtn,
                    ]}
                  >
                    <Text
                      style={
                        this.state.grindCheck == "超粗挽き"
                          ? styles.activeText
                          : styles.defaultText
                      }
                    >
                      超粗挽き
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </RecipieChangeBox>
            </View>
            <View style={{ width: 280, marginBottom: 8 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                コーヒーの種類
              </Text>
              <RecipieChangeBox style={{ marginBottom: 24 }}>
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
            </View>
            <View style={{ width: 280, marginBottom: 24 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                コーヒーのレシピ
              </Text>
              <RecipeTable
                recipeCheck={this.state.recipeCheck}
                date={date}
                currentBeanWeightNumber={this.state.BeanWeightNumber}
              />
            </View>
            <View style={{ width: 280, marginBottom: 16 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                味の感想
              </Text>
              <View style={{ marginBottom: 24 }}>
                <EmojiBlock style={{ marginBottom: 16 }}>
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ faceID: 0 })}
                  >
                    <View
                      style={[
                        this.state.faceID === 0
                          ? styles.activeEmojiBg
                          : styles.defaultEmojiBg,
                      ]}
                    >
                      <ImageIcon source={require("../img/heartEyes.png")} />
                      <Text
                        style={
                          this.state.faceID === 0
                            ? styles.activeEmojiText
                            : styles.defaultEmojiText
                        }
                      >
                        最高
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ faceID: 1 })}
                  >
                    <View
                      style={[
                        this.state.faceID === 1
                          ? styles.activeEmojiBg
                          : styles.defaultEmojiBg,
                      ]}
                    >
                      <ImageIcon source={require("../img/blush.png")} />
                      <Text
                        style={
                          this.state.faceID === 1
                            ? styles.activeEmojiText
                            : styles.defaultEmojiText
                        }
                      >
                        うまい
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ faceID: 2 })}
                  >
                    <View
                      style={
                        this.state.faceID === 2
                          ? styles.activeEmojiBg
                          : styles.defaultEmojiBg
                      }
                    >
                      <ImageIcon
                        source={require("../img/slightly_smiling_face.png")}
                      />
                      <Text
                        style={
                          this.state.faceID === 2
                            ? styles.activeEmojiText
                            : styles.defaultEmojiText
                        }
                      >
                        ちょいうま
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </EmojiBlock>
                <EmojiBlock>
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ faceID: 3 })}
                  >
                    <View
                      style={[
                        this.state.faceID === 3
                          ? styles.activeEmojiBg
                          : styles.defaultEmojiBg,
                      ]}
                    >
                      <ImageIcon source={require("../img/sob.png")} />
                      <Text
                        style={
                          this.state.faceID === 3
                            ? styles.activeEmojiText
                            : styles.defaultEmojiText
                        }
                      >
                        ちょい微妙
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ faceID: 4 })}
                  >
                    <View
                      style={[
                        this.state.faceID === 4
                          ? styles.activeEmojiBg
                          : styles.defaultEmojiBg,
                      ]}
                    >
                      <ImageIcon source={require("../img/cry.png")} />
                      <Text
                        style={
                          this.state.faceID === 4
                            ? styles.activeEmojiText
                            : styles.defaultEmojiText
                        }
                      >
                        微妙
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ faceID: 5 })}
                  >
                    <View
                      style={
                        this.state.faceID === 5
                          ? styles.activeEmojiBg
                          : styles.defaultEmojiBg
                      }
                    >
                      <ImageIcon source={require("../img/screem.png")} />
                      <Text
                        style={
                          this.state.faceID === 5
                            ? styles.activeEmojiText
                            : styles.defaultEmojiText
                        }
                      >
                        最悪
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </EmojiBlock>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.saveDiarys(
                  this.state.title,
                  this.state.faceID,
                  this.state.BeanWeightNumber,
                  date,
                  this.state.recipeCheck,
                  this.state.grindCheck
                );
                this.props.navigation.state.params.updateComponent();
                this.props.navigation.navigate("Home");
              }}
            >
              <View style={[styles.goToRecipeButton, { marginBottom: 16 }]}>
                <Text style={styles.goToRecipeText}>日記を作成</Text>
              </View>
            </TouchableOpacity>
          </ScrollBox>
        </ScrollView>
        <InputAccessoryView nativeID={"currentBeanWeightNumber"}>
          <View
            style={{
              backgroundColor: "#eaeaea",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 16,
            }}
          >
            <Button onPress={Keyboard.dismiss} title="完了" />
          </View>
        </InputAccessoryView>
        <InputAccessoryView nativeID={"title"}>
          <View
            style={{
              backgroundColor: "#eaeaea",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 16,
            }}
          >
            <Button onPress={Keyboard.dismiss} title="完了" />
          </View>
        </InputAccessoryView>
      </Container>
    );
  }
}

export default CopyScreen;

const ModalHeadBlock = styled.View`
  background: #ffffff;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
  display: flex;
  flex-direction: row;
`;

const ModalHeadInnerBlock = styled.View`
  background: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ModalTitle = styled.Text`
  font-size: 16px;
  width: 33%;
  text-align: center;
  font-weight: bold;
`;

const ModalLeftButton = styled.Text`
  font-size: 16px;
  width: 33%;
  text-align: left;
  color: #007aff;
  align-items: flex-start;
`;

const ModalRightButton = styled.Text`
  font-size: 16px;
  width: 33%;
  text-align: left;
  font-weight: bold;
  align-items: flex-start;
`;

const Container = styled.View`
  background: #ffffff;
  width: 100%;
  height: 100%;
`;

const ScrollBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const RecipieChangeBox = styled.View`
  display: flex;
  flex-direction: row;
`;

const TextInput = styled.TextInput`
  border: 1px solid #ccc;
  width: 100px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  color: #252525;
  padding-left: 16px;
  margin-bottom: 20px;
`;

const TextBeanInput = styled.TextInput`
  border: 1px solid #ccc;
  width: 280px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  color: #252525;
  padding-left: 16px;
  margin-bottom: 20px;
`;

const ImageIcon = styled.Image`
  width: 28px;
  height: 28px;
  margin-bottom: 8px;
`;

const EmojiBlock = styled.View`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  open: {
    marginTop: 64,
  },
  inputText: {
    color: "#252525",
    marginLeft: 10,
    width: 20,
  },
  inputBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
  },
  modalText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  none: {
    display: "none",
  },
  defaultBtn: {
    paddingTop: 12,
    paddingBottom: 12,
    width: 136,
    borderWidth: 2,
    borderColor: "#444444",
    borderStyle: "solid",
    padding: 12,
  },
  activeBtn: {
    paddingTop: 12,
    paddingBottom: 12,
    width: 136,
    borderWidth: 2,
    borderColor: "#444444",
    borderStyle: "solid",
    backgroundColor: "#444444",
  },
  defaultText: {
    color: "#444444",
    fontWeight: "600",
    textAlign: "center",
  },
  activeText: {
    color: "#ffffff",
    fontWeight: "600",
    textAlign: "center",
  },
  margin8: {
    marginLeft: 8,
  },
  goToRecipeButton: {
    width: 280,
    backgroundColor: "#252525",
    borderRadius: 8,
    padding: 16,
  },
  goBackTopButton: {
    width: 280,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#252525",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 16,
  },
  goToRecipeText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
  goBackTopText: {
    color: "#252525",
    textAlign: "center",
    fontSize: 16,
  },
  rowText: {
    padding: 8,
  },
  beanWeightText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    color: "#252525",
    marginBottom: 16,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
  },
  none: {
    display: "none",
  },
  defaultEmojiBg: {
    width: 84,
    height: 84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    margin: 0,
    borderRadius: 8,
  },
  activeEmojiBg: {
    width: 84,
    height: 84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#444444",
    margin: 0,
    borderRadius: 8,
  },
  defaultEmojiText: {
    color: "#252525",
    fontSize: 12,
  },
  activeEmojiText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 12,
  },
});
