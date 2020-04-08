import React from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import FAB from "react-native-fab";
import Card from "../components/Card";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

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

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      visible: false,
      currentBeanWeightNumber: 0,
      diarys: [],
    };
  }
  componentDidMount() {
    this.loadDiarys();
  }
  toggleSemiModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.diarys);
  };
  changeTextInput = (e) => {
    this.setState({ currentBeanWeightNumber: e });
  };
  onToggleSnackBar = () =>
    this.setState((state) => ({ visible: !state.visible }));
  loadDiarys() {
    storage
      .load({
        key: "sample",
        id: "1234",
      })
      .then((ret) => {
        // ロードに成功したら
        console.log(ret.title + " is " + ret.faceID);
      })
      .catch((err) => {
        // ロードに失敗したら
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            // 見つかんなかった場合の処理を書こう
            break;
          case "ExpiredError":
            // キャッシュ切れの場合の処理を書こう
            break;
        }
      });
  }

  checkAnything() {
    console.log();
  }

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
