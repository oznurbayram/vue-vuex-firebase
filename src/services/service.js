import firebase from "firebase";

export default {
  fetchUsers() {
  return  firebase.database().ref('/users').once('value');
  }
}
