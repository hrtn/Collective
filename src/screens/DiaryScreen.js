import React from "react";
import styled from "styled-components/native";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Table, Rows } from "react-native-table-component";
import { Emoji } from "emoji-mart";

const face = [
  "heart_eyes",
  "blush",
  "slightly_smiling_face",
  "cry",
  "sob",
  "scream",
];

class DiaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beanTitle: "",
      faceID: 99,
    };
  }
  changeBeanTextInput = (e) => {
    this.setState({ beanTitle: e });
  };

  render() {
    const { navigation } = this.props;
    const createdRecipe = navigation.getParam("createdRecipe");
    return (
      <Container>
        <Text style={[styles.recipeTitle, { marginBottom: 16 }]}>
          日記を書きましょう
        </Text>
        <Text style={[styles.modalText, { marginBottom: 16 }]}>豆の名前</Text>
        <TextInput
          onChangeText={(e) => this.changeBeanTextInput(e)}
          value={this.state.beanTitle}
        />
        <Text style={[styles.modalText, { marginBottom: 16 }]}>味の感想</Text>
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
                <Emoji emoji={face[0]} set="apple" size={28} />
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
                <Emoji emoji={face[1]} set="apple" size={28} />
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
                <Emoji emoji={face[2]} set="apple" size={28} />
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
                <Emoji emoji={face[3]} set="apple" size={28} />
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
                <Emoji emoji={face[4]} set="apple" size={28} />
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
                <Emoji emoji={face[5]} set="apple" size={28} />
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

export default DiaryScreen;

const Container = styled.View`
  background: #ffffff;
  max-width: 375px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 100px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #fff;
  padding-left: 44px;
  margin-bottom: 20px;
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
  defaultEmojiBg: {
    width: 84,
    height: 84,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    margin: 0,
  },
  activeEmojiBg: {
    width: 84,
    height: 84,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#F2994A",
    margin: 0,
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
