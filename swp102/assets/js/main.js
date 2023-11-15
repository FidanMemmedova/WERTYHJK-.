const API = "https://api.github.com/users/";
const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInp");
const myDiv = document.getElementById("myDiv");

form.addEventListener("submit", (e) => {
  e.preventDefault(), searchUser();
});
function searchUser() {
  fetch(API + searchInput.value)
    .then((res) => res.json())
    .then((user) => {
      renderUser(user);
    });
}
function renderUser(user) {
  myDiv.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.className = "userName";
  h2.textContent = user.login;
  const userImage = document.createElement("img");
  userImage.src = user.avatar_url;
  myDiv.append(h2, userImage);
}
