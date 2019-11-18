export default {
  fetchUsers() {
  return  firebase.database().ref('/users').once('value');
  }
}
