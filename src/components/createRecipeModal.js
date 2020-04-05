import { SemiModal } from "react-native-half-modal";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const CreateRecipeModal = (props) => (
  <SemiModal isVisible={props.isVisible} onModalClose={props.onModalClose}>
    <SemiModal
      isVisible={props.isVisible}
      onModalClose={props.onModalClose}
      style={styles.SemiModal}
      disableTopScroll
    >
      <View>
        <View style={styles.modalInner}>
          <View style={[styles.bar, styles.leftBar]} />
          <View style={[styles.bar, styles.rightBar]} />
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={[styles.modalTitle, { marginBottom: 16 }]}>
            レシピを作成しましょう
          </Text>
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={[styles.modalText, { marginBottom: 16 }]}>豆の重さ</Text>
          <View style={styles.inputBlock}>
            <TextInput
              onChangeText={props.onChangeText}
              value={props.currentBeanWeightNumber}
            />
            <Text style={[styles.inputText]}>g</Text>
            <Text>{props.currentBeanWeightNumber}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.modalCancelArea}
        >
          <View style={styles.modalCancelButton}>
            <Text style={[styles.modalText]}>レシピを作成する</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SemiModal>
  </SemiModal>
);

export default CreateRecipeModal;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 100px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #fff;
  padding-left: 44px;
  margin-bottom: 20px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  open: {
    textAlign: "center",
    marginTop: 64,
  },
  inputText: {
    color: "#FFF",
    marginLeft: 10,
    width: 20,
  },
  inputBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
  },
  modalText: {
    color: "#FFF",
  },
  modalCancelButton: {
    borderRadius: 32,
    height: 40,
    backgroundColor: "#243347",
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: 16,
    borderBottomWidth: 4,
    borderColor: "#FFFFFF44",
  },
  leftBar: {
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightBar: {
    borderRadius: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  SemiModal: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    paddingTop: 8,
    backgroundColor: "#151F2B",
  },
  modalInner: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "center",
  },
});
