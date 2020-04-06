import React from "react";
import { Text, ScrollView, AsyncStorage } from "react-native";
import styled from "styled-components/native";
import FAB from "react-native-fab";

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
    AsyncStorage.getItem("diarys").then((str) => {
      const diarys = str ? JSON.parse(str) : ["a"];
      this.setState({ diarys: diarys });
    });
  }

  render() {
    return (
      <Container>
        <ScrollView>
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
        </ScrollView>
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
          onPress={() =>
            this.props.navigation.navigate("Caliculate", {
              currentBeanWeightNumber: this.state.currentBeanWeightNumber,
            })
          }
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
  align-items: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
