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

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableCard
        onPress={() => {
          this.props.navigationView.navigate("View", {
            id: this.props.id,
            title: this.props.title,
            faceID: this.props.faceID,
            BeanWeightNumber: this.props.BeanWeightNumber,
            date: this.props.date,
            recipeCheck: this.props.recipeCheck,
            grindCheck: this.props.grindCheck,
            updateComponent: () => this.props.updateComponent(),
          });
        }}
      >
        <Container
          style={(() => {
            if (this.props.faceID === 0) {
              return styles.heartEyes;
            } else if (this.props.faceID === 1) {
              return styles.blush;
            } else if (this.props.faceID === 2) {
              return styles.slightly_smiling_face;
            } else if (this.props.faceID === 3) {
              return styles.cry;
            } else if (this.props.faceID === 4) {
              return styles.screem;
            } else if (this.props.faceID === 5) {
              return styles.sob;
            } else if (this.props.faceID === 99) {
              return styles.noCoffee;
            } else {
              return styles.noCoffee;
            }
          })()}
        >
          <InnnerFlex>
            <LeftBlock>
              {(() => {
                if (this.props.faceID === 0) {
                  return <ImageIcon source={require("../img/heartEyes.png")} />;
                } else if (this.props.faceID === 1) {
                  return <ImageIcon source={require("../img/blush.png")} />;
                } else if (this.props.faceID === 2) {
                  return (
                    <ImageIcon
                      source={require("../img/slightly_smiling_face.png")}
                    />
                  );
                } else if (this.props.faceID === 3) {
                  return <ImageIcon source={require("../img/sob.png")} />;
                } else if (this.props.faceID === 4) {
                  return <ImageIcon source={require("../img/cry.png")} />;
                } else if (this.props.faceID === 5) {
                  return <ImageIcon source={require("../img/screem.png")} />;
                } else {
                  return <ImageIcon source={require("../img/ghost.png")} />;
                }
              })()}
            </LeftBlock>
            <RightBlock>
              <Title numberOfLines={1} ellipsizeMode="tail">
                {this.props.title}
              </Title>
              <TextBlock>
                <DateText style={{ marginRight: 8 }}>
                  {this.props.grindCheck}
                </DateText>
                <DateText>{this.props.date}</DateText>
              </TextBlock>
            </RightBlock>
            <BeanWeightText>{this.props.BeanWeightNumber}g</BeanWeightText>
          </InnnerFlex>
        </Container>
      </TouchableCard>
    );
  }
}

export default Card;

const TouchableCard = styled.TouchableOpacity`
  width: 100%;
  margin: 0px;
  display: flex;
`;

const Container = styled.View`
  background-color: white;
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
