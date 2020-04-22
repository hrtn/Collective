import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import RecipeTable from "../components/RecipeTable";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.sqlite", "ver1.1");

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
    const recipeCheck = navigation.getParam("recipeCheck");
    const BeanWeightNumber = navigation.getParam("BeanWeightNumber");
    const title = navigation.getParam("title");
    const faceID = navigation.getParam("faceID");
    const date = navigation.getParam("date");
    const id = navigation.getParam("id");
    const grindCheck = navigation.getParam("grindCheck");
    return (
      <Container>
        <ScrollView>
          <ScrollBox>
            <View style={{ width: 280 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>日付</Text>
              <Text
                style={[
                  styles.modalText,
                  {
                    marginBottom: 24,
                    backgroundColor: "#F6F6F6",
                    padding: 16,
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                ]}
              >
                {date}
              </Text>
            </View>
            <View style={{ width: 280 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の重さ
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {
                    marginBottom: 24,
                    backgroundColor: "#F6F6F6",
                    padding: 16,
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                ]}
              >
                {BeanWeightNumber + "g"}
              </Text>
            </View>
            <View style={{ width: 280 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の名前
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {
                    marginBottom: 24,
                    backgroundColor: "#F6F6F6",
                    padding: 16,
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                ]}
              >
                {title}
              </Text>
            </View>
            <View style={{ width: 280, marginBottom: 24 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                豆の挽き具合
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {
                    backgroundColor: "#F6F6F6",
                    padding: 16,
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                ]}
              >
                {grindCheck}
              </Text>
            </View>
            <View style={{ width: 280, marginBottom: 24 }}>
              <Text style={[styles.modalText, { marginBottom: 16 }]}>
                {recipeCheck == "light"
                  ? "浅煎りコーヒーのレシピ"
                  : "深煎りコーヒーのレシピ"}
              </Text>
              <RecipeTable 
                data={recipeCheck} 
                currentBeanWeightNumber={BeanWeightNumber}
              />
            </View>
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
                this.props.navigation.navigate("Copy", {
                  _recipeCheck: recipeCheck,
                  _BeanWeightNumber: BeanWeightNumber,
                  _grindCheck: grindCheck,
                  _title: title,
                  updateComponent: () =>
                    this.props.navigation.state.params.updateComponent(),
                });
                console.log(recipeCheck);
              }}
            >
              <View style={styles.copyButton}>
                <Text style={styles.copyButtonText}>複製する</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.deleteDiarys(id);
                this.props.navigation.state.params.updateComponent();
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
    opacity: 0.6,
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
    opacity: 0.7,
  },
  activeEmojiText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 12,
  },
  copyButton: {
    width: 280,
    backgroundColor: "#252525",
    borderWidth: 2,
    borderColor: "#252525",
    borderStyle: "solid",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  copyButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
  deleteButton: {
    width: 280,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#D04646",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 16,
  },
  deleteButtonText: {
    color: "#D04646",
    textAlign: "center",
    fontSize: 16,
  },
  rowText: {
    padding: 8,
  },
});
