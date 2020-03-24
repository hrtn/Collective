import React, { Component } from "react";
import { Platform, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { SemiModal } from "react-native-half-modal";

import FAB from "react-native-fab";

import Card from "../components/Card";
import DateNumber from "../components/DateNumber";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const today = new Date();

const cards = [
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 1,
    grindTextID: 0,
    BeanWeightNumber: 13
  },
  {
    title: "パナマゲイシャパナマゲイシャパナマゲイシャパナマゲイシャ",
    faceID: 1,
    grindTextID: 0,
    BeanWeightNumber: 13
  }
];

export default class HomeScreen extends React.Component {
  state = { isVisible: false };
  modalClose = () => {
    this.setState({ isVisible: false });
  };
  modalOpen = () => {
    this.setState({ isVisible: true });
  };
  render() {
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
          onClickAction={() => {
            this.setState({ isVisible: true });
          }}
          visible={true}
          iconTextComponent={<Text>+</Text>}
        />
        <SemiModal
          isVisible={this.state.isVisible}
          onModalClose={() => {
            this.setState({ isVisible: false });
          }}
        >
          <SemiModal
            isVisible={this.state.isVisible}
            onModalClose={this.modalClose}
            style={styles.SemiModal}
            disableTopScroll
          >
            <View>
              <View style={styles.modalInner}>
                <View style={[styles.bar, styles.leftBar]} />
                <View style={[styles.bar, styles.rightBar]} />
              </View>
              <View style={{ marginBottom: 4 }}>
                <Text style={[styles.modalText, { marginBottom: 16 }]}>
                  Remove
                </Text>
                <Text style={[styles.modalText, { marginBottom: 16 }]}>
                  Mute
                </Text>
                <Text style={[styles.modalText, { marginBottom: 16 }]}>
                  Block
                </Text>
                <Text style={[styles.modalText, { marginBottom: 16 }]}>
                  Report
                </Text>
              </View>
              <TouchableOpacity
                onPress={this.modalClose}
                style={styles.modalCancelArea}
              >
                <View style={styles.modalCancelButton}>
                  <Text style={[styles.modalText]}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </SemiModal>
        </SemiModal>
      </Container>
    );
  }
}

const SemiModalView = styled.View`
  background: #eaeaea;
  max-width: 375px;
  padding: 20px;
  color: #fff;
`;

const Container = styled.View`
  background: #ffffff;
  max-width: 375px;
  padding: 20px;
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  open: {
    textAlign: "center",
    marginTop: 64
  },
  modalText: {
    color: "#FFF"
  },
  modalCancelButton: {
    borderRadius: 32,
    height: 40,
    backgroundColor: "#243347",
    justifyContent: "center",
    alignItems: "center"
  },
  bar: {
    width: 16,
    borderBottomWidth: 4,
    borderColor: "#FFFFFF44"
  },
  leftBar: {
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  rightBar: {
    borderRadius: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  SemiModal: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    paddingTop: 8,
    backgroundColor: "#151F2B"
  },
  modalInner: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "center"
  }
});
