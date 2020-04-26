import React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import FAB from "react-native-fab";
import Card from "../components/Card";
// import Notification from "../components/Notification";

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.sqlite", "ver1.1");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isVisible: false,
      visible: false,
    };
  }
  changeTextInput = (e) => {
    this.setState({ currentBeanWeightNumber: e });
  };

  updateComponent() {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists diarys (id integer primary key not null, title text, faceID integer, BeanWeightNumber integer, date text, recipeCheck text, grindCheck text);", // 実行したいSQL文
        null, // SQL文の引数
        () => {
          console.log("success create table");
        }, // 成功時のコールバック関数
        () => {
          console.log("fail");
        } // 失敗時のコールバック関数
      );
    });

    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM diarys ORDER BY id DESC;",
          [],
          (_, { rows: { _array } }) => this.setState({ cards: _array })
        );
      },
      () => {
        console.log("fail");
      },
      () => {
        console.log("success_fetchAllData");
        console.log(this.state.cards);
      }
    );
  }

  render() {
    const { cards } = this.state;
    return (
      <Container>
        <ScrollView>
          {/* <Notification
            href={
              "https://www.notion.so/2020-04-26-fd7c83b6a79c422c86c1146592c7e1fe"
            }
            text={"レシピに関するお知らせ"}
            date={"2020-04-24"}
          /> */}
          {cards === null || cards.length === 0 ? (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                position: "absolute",
                top: 150,
              }}
            >
              <EmptyBox>
                <ImageIcon source={require("../img/ghost.png")} />
                <EmptyText>NO DIARIES</EmptyText>
              </EmptyBox>
            </View>
          ) : (
            <DateContainer>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  faceID={card.faceID}
                  BeanWeightNumber={card.BeanWeightNumber}
                  date={card.date}
                  recipeCheck={card.recipeCheck}
                  grindCheck={card.grindCheck}
                  navigationView={this.props.navigation}
                  updateComponent={() => this.updateComponent()}
                />
              ))}
            </DateContainer>
          )}
        </ScrollView>
        <FAB
          buttonColor="#252525"
          iconTextColor="#FFFFFF"
          onClickAction={() =>
            this.props.navigation.navigate("Caliculate", {
              refresh: this.componentWillMount.bind(this),
            })
          }
          visible={true}
          iconTextComponent={<Text>+</Text>}
        />
      </Container>
    );
  }

  componentWillMount() {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists diarys (id integer primary key not null, title text, faceID integer, BeanWeightNumber integer, date text, recipeCheck text, grindCheck text);", // 実行したいSQL文
        null, // SQL文の引数
        () => {
          console.log("success create table");
        }, // 成功時のコールバック関数
        () => {
          console.log("fail");
        } // 失敗時のコールバック関数
      );
    });

    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM diarys ORDER BY id DESC;",
          [],
          (_, { rows: { _array } }) => this.setState({ cards: _array })
        );
      },
      () => {
        console.log("fail");
      },
      () => {
        console.log("success_fetchAllData");
        console.log(this.state.cards);
      }
    );
  }
}

const Container = styled.View`
  background: #ffffff;
  width: 100%;
  height: 100%;
`;

const DateContainer = styled.View`
  padding: 24px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ImageIcon = styled.Image`
  width: 150px;
`;

const EmptyBox = styled.View`
  padding: 20px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: #ccc;
  font-size: 36px;
  font-weight: 600;
  margin-top: 8px;
`;
