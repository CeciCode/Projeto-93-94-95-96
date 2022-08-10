var name= localStorage.getItem("room_name", room_name);
document.getElementById("userName").innerHTML= "Welcome, " + name + "!"
function addRoom() {
    room= document.getElementById("room_name").value;
    localStorage.setItem(room);
    window.location= "chat.html";
    document.getElementById("output").innerHTML= "#" + room;
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
     
//Fim do código
});});}
getData();
function redirectToroomName() {
    localStorage.setItem(room);
    window.location= "chat.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
  }