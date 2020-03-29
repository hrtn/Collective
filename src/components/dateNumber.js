import React from "react";
import styled from "styled-components/native";

const today = new Date();

const DateNumber = props => (
  <>
    {today.getDate() == props.DateNumber ? (
      <AvtiveContainer>
        <ActiveText>{props.DateNumber}</ActiveText>
      </AvtiveContainer>
    ) : (
      <Container>
        <DateText>{props.DateNumber}</DateText>
      </Container>
    )}
  </>
);

const Container = styled.View`
  width: 48px;
  height: 48px;
  text-align: center;
  justify-content: center;
`;

const AvtiveContainer = styled.View`
  width: 48px;
  height: 48px;
  color: #fff;
  text-align: center;
  justify-content: center;
  background: #252525;
  border-radius: 10px;
`;

const DateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #929292;
`;

const ActiveText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;

export default DateNumber;
