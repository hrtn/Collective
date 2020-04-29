import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: "00",
      seconds: "00",
      time: 0,
      isStart: false,
    };
  }
  start() {
    this.timer = setInterval(() => this.update(), 1000);
    this.setState({ isStart: true });
  }
  stop() {
    clearInterval(this.timer);
    this.setState({ isStart: false });
  }
  reset() {
    this.setState({
      minutes: "00",
      seconds: "00",
      time: 0,
      isStart: false,
    });
  }
  update() {
    const time = this.state.time + 1;
    const minutes = parseInt((time / 60) % 60, 10);
    const seconds = parseInt(time % 60, 10);
    this.setState({
      minutes: this.toText(minutes),
      seconds: this.toText(seconds),
      time: time,
      isStart: true,
    });
  }
  toText(time) {
    return ("00" + time).slice(-2);
  }
  render() {
    const time1 = this.props.recipeCheck == "dark" ? 30 : 30;
    const time2 = this.props.recipeCheck == "dark" ? 45 : 60;
    const time3 = this.props.recipeCheck == "dark" ? 60 : 90;
    const time4 = this.props.recipeCheck == "dark" ? 90 : 120;
    const time5 = this.props.recipeCheck == "dark" ? 150 : 180;
    return (
      <FlexBox>
        <TimerBox>
          <TimerTextBlock>
            <TimerText>{this.state.minutes}</TimerText>
          </TimerTextBlock>
          <TimerdotBlock>
            <TimerText>:</TimerText>
          </TimerdotBlock>
          <TimerTextBlock>
            <TimerText>{this.state.seconds}</TimerText>
          </TimerTextBlock>
        </TimerBox>
        <TextBox>
          {(() => {
            if (this.state.time == 0)
              return <MessageText>ドリップを開始してください</MessageText>;
            else if (this.state.time > 0 && this.state.time <= 5)
              return (
                <MessageText>
                  {this.props.currentBeanWeightNumber * 2.5}
                  gのお湯を入れましょう!
                </MessageText>
              );
            else if (this.state.time > 5 && this.state.time <= time1 - 5)
              return (
                <MessageText>
                  現在のお湯の総量 :{this.props.currentBeanWeightNumber * 2.5}g
                </MessageText>
              );
            else if (this.state.time > time1 - 5 && this.state.time <= time1)
              return <MessageText>次のお湯を入れる準備をしよう！</MessageText>;
            else if (this.state.time > time1 && this.state.time <= time2 - 5)
              return (
                <MessageText>
                  現在のお湯の総量 :{this.props.currentBeanWeightNumber * 5.25}g
                </MessageText>
              );
            else if (this.state.time > time2 - 5 && this.state.time <= time2)
              return <MessageText>次のお湯を入れる準備をしよう！</MessageText>;
            else if (this.state.time > time2 && this.state.time <= time3 - 5)
              return (
                <MessageText>
                  現在のお湯の総量 :{this.props.currentBeanWeightNumber * 8}g
                </MessageText>
              );
            else if (this.state.time > time3 - 5 && this.state.time <= time3)
              return <MessageText>次のお湯を入れる準備をしよう！</MessageText>;
            else if (this.state.time > time3 && this.state.time <= time4 - 5)
              return (
                <MessageText>
                  現在のお湯の総量 :{this.props.currentBeanWeightNumber * 12}g
                </MessageText>
              );
            else if (this.state.time > time4 - 5 && this.state.time <= time4)
              return (
                <MessageText>最後のお湯を入れる準備をしよう！</MessageText>
              );
            else if (this.state.time > time4 && this.state.time <= time4 + 5)
              return (
                <MessageText>
                  現在のお湯の総量 :{this.props.currentBeanWeightNumber * 16}g
                </MessageText>
              );
            else if (this.state.time > time4 + 5 && this.state.time <= time5)
              return (
                <MessageText>あとは落ち切りまで待ちましょう！</MessageText>
              );
            else return <MessageText>コーヒーが完成しました！</MessageText>;
          })()}
        </TextBox>
        {this.state.isStart ? (
          <ButtonBox>
            <ResetButtonBg style={{ opacity: 0.5 }}>
              <ResetButtonText>リセット</ResetButtonText>
            </ResetButtonBg>
            <TouchableOpacity onPress={() => this.stop()}>
              <StopButtonBg>
                <ButtonText>停止</ButtonText>
              </StopButtonBg>
            </TouchableOpacity>
          </ButtonBox>
        ) : (
          <ButtonBox>
            <TouchableOpacity onPress={() => this.reset()}>
              <ResetButtonBg>
                <ResetButtonText>リセット</ResetButtonText>
              </ResetButtonBg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.start()}>
              <ButtonBg>
                <ButtonText>開始</ButtonText>
              </ButtonBg>
            </TouchableOpacity>
          </ButtonBox>
        )}
      </FlexBox>
    );
  }
}

export default Timer;

const TimerText = styled.Text`
  font-size: 48px;
  display: flex;
  text-align: center;
  color: #333;
`;

const TimerTextBlock = styled.View`
  width: 80px;
  height: 64px;
`;

const TimerdotBlock = styled.View`
  width: 20px;
`;

const TimerBox = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 16px;
  width: 280px;
`;

const MessageText = styled.Text`
  color: #444444;
`;

const TextBox = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-bottom: 16px;
  width: 280px;
`;

const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: center;
  flex: 1;
  padding: 0 16px 16px 16px;
`;

const ButtonBg = styled.View`
  justify-content: center;
  background-color: #444444;
  padding: 20px;
  border-radius: 50px;
  margin: 0 12px;
`;

const StopButtonBg = styled.View`
  justify-content: center;
  background-color: #d04646;
  padding: 20px;
  border-radius: 50px;
  margin: 0 12px;
`;

const ResetButtonBg = styled.View`
  justify-content: center;
  padding: 20px;
  border: 2px solid #444444;
  border-radius: 50px;
  margin: 0 12px;
`;

const ButtonText = styled.Text`
  align-items: center;
  font-size: 18px;
  color: #ffffff;
`;

const ResetButtonText = styled.Text`
  align-items: center;
  font-size: 18px;
  color: #444444;
  font-weight: bold;
`;

const FlexBox = styled.View`
  width: 280px;
  display: flex;
  background-color: #f6f6f6;
  border-radius: 8px;
`;
