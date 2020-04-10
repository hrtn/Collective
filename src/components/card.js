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
        <TextBlock>
          <DateText>{props.date}</DateText>
        </TextBlock>
      </RightBlock>
      <BeanWeightText>{props.BeanWeightNumber}g</BeanWeightText>
    </InnnerFlex>
  </Container>
);

export default Card;

const Container = styled.View`
  background-color: white;
  width: 90%;
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

const DateText = styled.Text`
  font-size: 12px;
  opacity: 0.5;
`;

const InnnerFlex = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftBlock = styled.View`
  width: 15%;
`;

const RightBlock = styled.View`
  width: 85%;
  height: 48px;
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

const TextBlock = styled.View`
  width: 95%;
  margin-top: 8px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
