import React from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import FAB from "react-native-fab";
import Card from "../components/Card";

// import * as SQLite from "expo-sqlite";
// const db = SQLite.openDatabase("db");

// db.transaction(
//   (tx) => {
//     tx.executeSql(
//       "create table if not exists diarys (id integer primary key not null, title text, faceID integer, BeanWeightNumber integer, date text, recipeCheckText text);", // 実行したいSQL文
//       null, // SQL文の引数
//       () => {
//         console.log("success");
//       }, // 成功時のコールバック関数
//       () => {
//         console.log("fail");
//       } // 失敗時のコールバック関数
//     );
//   },
//   () => {
//     console.log("fail");
//   }, // 失敗時のコールバック関数
//   () => {
//     console.log("success");
//   } // 成功時のコールバック関数
// );

const cards = [
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "エチオピア",
    faceID: 3,
    grindTextID: 0,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "コロンビア",
    faceID: 3,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "ベトナム",
    faceID: 4,
    grindTextID: 0,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "コーヒー",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "アイスコーヒー",
    faceID: 3,
    grindTextID: 0,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "エチオピアアリチャ",
    faceID: 2,
    grindTextID: 1,
    BeanWeightNumber: 13,
    date: "2019/12/13",
  },
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 1,
    grindTextID: 0,
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
  componentWillMount() {
    // データ取得のSQL実行
    // db.executeSql(
    //   "SELECT * FROM diarys ORDER BY id desc",
    //   [],
    //   function (rs) {
    //     // 取得したデータを表示
    //     for (var i = 0; i < rs.rows.length; i++) {
    //       row = rs.rows.item(i);
    //       showCards(row.title, row.faceID, grindTextID, BeanWeightNumber, date);
    //     }
    //   },
    //   function (error) {
    //     // データ取得失敗
    //     alert(error.message);
    //   }
    // );
  }

  showCards = (title, faceID, BeanWeightNumber, date, recipeCheckText) => {
    const newCards = [title, faceID, BeanWeightNumber, date, recipeCheckText];
    this.setState({
      cards: newCards,
    });
  };
  toggleSemiModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.diarys);
  };
  changeTextInput = (e) => {
    this.setState({ currentBeanWeightNumber: e });
  };
  onToggleSnackBar = () =>
    this.setState((state) => ({ visible: !state.visible }));

  render() {
    return (
      <Container>
        <ScrollView>
          <DateContainer>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                faceID={card.faceID}
                grindTextID={card.grindTextID}
                BeanWeightNumber={card.BeanWeightNumber}
                date={card.date}
              />
            ))}
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
