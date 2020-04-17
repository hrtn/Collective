import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Table, Rows } from "react-native-table-component";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

class ViewScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteDiarys(id) {
    db.transaction((tx) => {
      tx.executeSql(
        `delete from diarys where id == ?;`,
        [id], // SQL文の引数
        () => {
          console.log("success diarys");
        }, // 成功時のコールバック関数
        () => {
          console.log("fail");
        } // 失敗時のコールバック関数
      );
    });
  }

  render() {
    const { navigation } = this.props;
    const recipeCheckText = navigation.getParam("recipeCheckText");
    const BeanWeightNumber = navigation.getParam("BeanWeightNumber");
    const title = navigation.getParam("title");
    const faceID = navigation.getParam("faceID");
    const date = navigation.getParam("date");
    const id = navigation.getParam("id");
    const defaultRecipe = [
      ["蒸らし", "30秒", BeanWeightNumber * 2.5],
      ["", "1分", BeanWeightNumber * 5.25],
      ["", "1分30秒", BeanWeightNumber * 8],
      ["", "2分", BeanWeightNumber * 12],
      ["", "2分30秒", BeanWeightNumber * 16],
      ["落ち切り", "3分30秒", BeanWeightNumber * 16],
    ];
    const unlimitedRecipe = [
      ["蒸らし", "30秒", BeanWeightNumber * 2.5],
      ["", "45秒", BeanWeightNumber * 5.25],
      ["", "1分", BeanWeightNumber * 8],
      ["", "1分30秒", BeanWeightNumber * 12],
      ["", "2分", BeanWeightNumber * 16],
      ["落ち切り", "3分", BeanWeightNumber * 16],
    ];
    return (
      <Container>
        <ScrollView>
          <ScrollBox>
            <View style={{ width: 280 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の重さ
              </Text>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                {BeanWeightNumber}
              </Text>
            </View>
            <View>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の名前
              </Text>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                {title}
              </Text>
            </View>
            <Table
              borderStyle={{
                borderWidth: 1,
                borderColor: "#e8e8e8",
              }}
              style={{ marginBottom: 24 }}
            >
              <Rows
                data={
                  recipeCheckText == "dark" ? unlimitedRecipe : defaultRecipe
                }
                textStyle={styles.rowText}
                style={{ width: 280, backgroundColor: "#F6F6F6" }}
              />
            </Table>
            <View>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                味の感想
              </Text>
              <View style={{ marginBottom: 24 }}>
                <EmojiBlock style={{ marginBottom: 16 }}>
                  <View
                    style={[
                      faceID === 0
                        ? styles.activeEmojiBg
                        : styles.defaultEmojiBg,
                    ]}
                  >
                    <ImageIcon source={require("../img/heartEyes.png")} />
                    <Text
                      style={
                        faceID === 0
                          ? styles.activeEmojiText
                          : styles.defaultEmojiText
                      }
                    >
                      最高
                    </Text>
                  </View>
                  <View
                    style={[
                      faceID === 1
                        ? styles.activeEmojiBg
                        : styles.defaultEmojiBg,
                    ]}
                  >
                    <ImageIcon source={require("../img/blush.png")} />
                    <Text
                      style={
                        faceID === 1
                          ? styles.activeEmojiText
                          : styles.defaultEmojiText
                      }
                    >
                      うまい
                    </Text>
                  </View>
                  <View
                    style={
                      faceID === 2
                        ? styles.activeEmojiBg
                        : styles.defaultEmojiBg
                    }
                  >
                    <ImageIcon
                      source={require("../img/slightly_smiling_face.png")}
                    />
                    <Text
                      style={
                        faceID === 2
                          ? styles.activeEmojiText
                          : styles.defaultEmojiText
                      }
                    >
                      ちょいうま
                    </Text>
                  </View>
                </EmojiBlock>
                <EmojiBlock>
                  <View
                    style={[
                      faceID === 3
                        ? styles.activeEmojiBg
                        : styles.defaultEmojiBg,
                    ]}
                  >
                    <ImageIcon source={require("../img/sob.png")} />
                    <Text
                      style={
                        faceID === 3
                          ? styles.activeEmojiText
                          : styles.defaultEmojiText
                      }
                    >
                      ちょい微妙
                    </Text>
                  </View>
                  <View
                    style={[
                      faceID === 4
                        ? styles.activeEmojiBg
                        : styles.defaultEmojiBg,
                    ]}
                  >
                    <ImageIcon source={require("../img/cry.png")} />
                    <Text
                      style={
                        faceID === 4
                          ? styles.activeEmojiText
                          : styles.defaultEmojiText
                      }
                    >
                      微妙
                    </Text>
                  </View>
                  <View
                    style={
                      faceID === 5
                        ? styles.activeEmojiBg
                        : styles.defaultEmojiBg
                    }
                  >
                    <ImageIcon source={require("../img/screem.png")} />
                    <Text
                      style={
                        faceID === 5
                          ? styles.activeEmojiText
                          : styles.defaultEmojiText
                      }
                    >
                      最悪
                    </Text>
                  </View>
                </EmojiBlock>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.deleteDiarys(id);
                // this.props.navigation.state.params.refreshDiarys.componentWillMount();
                this.props.navigation.navigate("Home");
              }}
            >
              <View style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>削除する</Text>
              </View>
            </TouchableOpacity>
          </ScrollBox>
        </ScrollView>
      </Container>
    );
  }
}

export default ViewScreen;

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
  modalText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    backgroundColor: "#F2994A",
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
  deleteButton: {
    width: 280,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#D04646",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 12,
  },
  deleteButtonText: {
    color: "#D04646",
    textAlign: "center",
  },
});
