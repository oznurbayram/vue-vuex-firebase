import * as firebase from "firebase";

export default {
  fetchColors() {
    return firebase.database().ref("/colors").once("value");
  },
  fetchDrinks() {
    return firebase.database().ref("/drinks").once("value");
  }
};
