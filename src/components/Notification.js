import React from "react";
import styled from "styled-components/native";
import { Linking } from "expo";
import { Ionicons } from "@expo/vector-icons";

class Notification extends React.Component {
  constructor(props) {
    super(props);
  }
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <TouchableNotification onPress={this._handlePress}>
        <Container>
          <InnnerFlex>
            <LeftBlock>
              <IconBox>
                <Ionicons
                  name="md-information-circle"
                  size={24}
                  color="#D04646"
                />
              </IconBox>
            </LeftBlock>
            <RightBlock>
              <InnnerText>{this.props.text}</InnnerText>
              <DateText>{this.props.date}</DateText>
            </RightBlock>
          </InnnerFlex>
        </Container>
      </TouchableNotification>
    );
  }
}

export default Notification;

const TouchableNotification = styled.TouchableOpacity`
  width: 100%;
  margin-top: 16px;
  display: flex;
`;

const Container = styled.View`
  background-color: white;
  border: 2px solid #d04646;
  border-radius: 15px;
  padding: 16px;
  overflow: hidden;
  margin-left: 24px;
  margin-right: 24px;
`;

const IconBox = styled.View`
  width: 24px;
  height: 24px;
`;

const InnnerText = styled.Text`
  width: 95%;
  font-size: 20px;
  font-weight: bold;
`;

const InnnerFlex = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DateText = styled.Text`
  font-size: 12px;
  opacity: 0.5;
`;

const LeftBlock = styled.View`
  width: 15%;
`;

const RightBlock = styled.View`
  width: 85%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
