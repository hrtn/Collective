import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heartEyes: {
    backgroundColor: "#FCF7F7",
  },
  blush: {
    backgroundColor: "#FFF9F2",
  },
  slightly_smiling_face: {
    backgroundColor: "#FFF2FD",
  },
  cry: {
    backgroundColor: "#F2FFF2",
  },
  sob: {
    backgroundColor: "#F2FDFF",
  },
  screem: {
    backgroundColor: "#F2F6FF",
  },
  noCoffee: {
    backgroundColor: "#F8F8F8",
  },
});

const face = [
  "heart_eyes",
  "blush",
  "slightly_smiling_face",
  "cry",
  "sob",
  "scream",
];

const grindText = ["超細挽き", "細挽き", "中挽き", "粗挽き"];

const Card = (props) => (
  <Container
    style={(() => {
      if (props.faceID === 0) {
        return styles.heartEyes;
      } else if (props.faceID === 1) {
        return styles.blush;
      } else if (props.faceID === 2) {
        return styles.slightly_smiling_face;
      } else if (props.faceID === 3) {
        return styles.cry;
      } else if (props.faceID === 4) {
        return styles.screem;
      } else if (props.faceID === 5) {
        return styles.sob;
      } else {
        return styles.noCoffee;
      }
    })()}
  >
    <InnnerFlex>
      <LeftBlock>
        {(() => {
          if (props.faceID === 0) {
            return <ImageIcon source={require("../img/heartEyes.png")} />;
          } else if (props.faceID === 1) {
            return <ImageIcon source={require("../img/blush.png")} />;
          } else if (props.faceID === 2) {
            return (
              <ImageIcon source={require("../img/slightly_smiling_face.png")} />
            );
          } else if (props.faceID === 3) {
            return <ImageIcon source={require("../img/cry.png")} />;
          } else if (props.faceID === 4) {
            return <ImageIcon source={require("../img/sob.png")} />;
          } else if (props.faceID === 5) {
            return <ImageIcon source={require("../img/screem.png")} />;
          } else {
            return styles.noCoffee;
          }
        })()}
      </LeftBlock>
      <RightBlock>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {props.title}
        </Title>
        <SubText>{grindText[props.grindTextID]}</SubText>
      </RightBlock>
      <BeanWeightText>{props.BeanWeightNumber}g</BeanWeightText>
    </InnnerFlex>
  </Container>
);

export default Card;

const Container = styled.View`
  background-color: white;
  width: 252px;
  height: 80px;
  border-radius: 15px;
  padding-left: 20px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const ImageIcon = styled.Image`
  width: 36px;
  height: 36px;
`;

const Title = styled.Text`
  font-size: 20px;
  width: 95%;
  font-weight: bold;
`;

const SubText = styled.Text`
  font-size: 14px;
  width: 95%;
`;

const InnnerFlex = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftBlock = styled.View`
  width: 20%;
`;

const RightBlock = styled.View`
  width: 80%;
  align-items: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BeanWeightText = styled.Text`
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  right: 4px;
  bottom: -8px;
  color: #f2994a;
  opacity: 0.2;
`;
