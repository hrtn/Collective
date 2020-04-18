import { Platform, Dimensions } from "react-native";

const X_WIDTH = 375;
const X_HEIGHT = 812;
const EIGHT_PLUS_WIDTH = 414;
const EIGHT_PLUS_HEIGHT = 736;
const EIGHT_WIDTH = 375;
const EIGHT_HEIGHT = 667;
const SE_WIDTH = 320;
const SE_HEIGHT = 568;
const IPAD_PRO_129_WIDTH = 1024;
const IPAD_PRO_129_HEIGHT = 1366;
const IPAD_PRO_105_WIDTH = 1112;
const IPAD_PRO_105_HEIGHT = 834;
const IPAD_PRO_97_WIDTH = 768;
const IPAD_PRO_97_HEIGHT = 1024;

// iPhone X対応
export const isIPhoneX = () => {
  const { width, height } = Dimensions.get("window");
  return Platform.OS === "ios" && width === X_WIDTH && height === X_HEIGHT;
};

// iPhone 8 Plus対応
export const isIPhoneEightPlus = () => {
  const { width, height } = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    width === EIGHT_PLUS_WIDTH &&
    height === EIGHT_PLUS_HEIGHT
  );
};

// iPhone 8対応（iPhone 6s Plus、iPhone 6 Plus、iPhone 7、
//              iPhone 6s、iPhone 6）
export const isIPhoneEight = () => {
  const { width, height } = Dimensions.get("window");
  return (
    Platform.OS === "ios" && width === EIGHT_WIDTH && height === EIGHT_HEIGHT
  );
};

// iPhone SE対応
export const isIPhoneSe = () => {
  const { width, height } = Dimensions.get("window");
  return Platform.OS === "ios" && width === SE_WIDTH && height === SE_HEIGHT;
};

// iPad Pro 12.9-inch対応
export const isIPadPro129 = () => {
  const { width, height } = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    width === IPAD_PRO_129_WIDTH &&
    height === IPAD_PRO_129_HEIGHT
  );
};

// iPad Pro 10.5-inch対応
export const isIPadPro105 = () => {
  const { width, height } = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    width === IPAD_PRO_105_WIDTH &&
    height === IPAD_PRO_105_HEIGHT
  );
};

// iPad Pro (9.7-inch)対応（iPad Air 2、iPad Mini 4）
export const isIPadPro97 = () => {
  const { width, height } = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    width === IPAD_PRO_97_WIDTH &&
    height === IPAD_PRO_97_HEIGHT
  );
};
