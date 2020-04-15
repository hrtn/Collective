import React from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import FAB from "react-native-fab";
import Card from "../components/Card";

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.db");

// こっちは動く
const cards_ = [
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isVisible: false,
      visible: false,
      currentBeanWeightNumber: 0,
    };
  }
  toggleSemiModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.cards);
  };
  changeTextInput = (e) => {
    this.setState({ currentBeanWeightNumber: e });
  };
  onToggleSnackBar = () =>
    this.setState((state) => ({ visible: !state.visible }));

  render() {
    const { cards } = this.state;
    return (
      <Container>
        <ScrollView>
          <DateContainer>
            {cards === null || cards.length === 0
              ? null
              : cards_.map((card) => (
                  <Card
                    key={card.id}
                    title={card.title}
                    faceID={card.faceID}
                    BeanWeightNumber={card.BeanWeightNumber}
                    date={card.date}
                  />
                ))}
            {/* cards_は動く。cardはうごかない */}
          </DateContainer>
        </ScrollView>
        <FAB
          buttonColor="#252525"
          iconTextColor="#FFFFFF"
          onClickAction={() => this.props.navigation.navigate("Caliculate")}
          visible={true}
          iconTextComponent={<Text>+</Text>}
        />
      </Container>
    );
  }

  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists diarys (id integer primary key not null, title text, faceID integer, BeanWeightNumber integer, date text, recipeCheckText text);", // 実行したいSQL文
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
          "SELECT * FROM diarys ORDER BY id ASC;",
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
        console.log(cards_);
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
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
