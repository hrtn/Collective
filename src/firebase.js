import { Constants } from "expo";
import * as firebase from "firebase";
import "firebase/firestore";

class Firebase {
  constructor(config = {}) {
    firebase.initializeApp(config);
  }
}
const fire = newFirebase(Constants.manifest.extra.firebase);

export default fire;
