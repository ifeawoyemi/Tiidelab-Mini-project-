  //1. API url
const url = "https://jsonplaceholder.typicode.com/users";

//2. fetch users from the api url
function fetchUsers() {
  //2.1 make use of the browser fetch api
  fetch(url) 
  .then((response) => response.json())
  .then((data) => {
    //2.2 passing the users data in the renderUsers function
    renderUsers(data);
  });
}

//3 render the users in the DOM
  function renderUsers(usersData){
    //console.log(usersData);
    const ul = document.getElementById("user-list-container");
    //console.log(ul);
    
    //3.1 Render an li tag for each of the users
    usersData.forEach((user, index) =>{
      const li = document.createElement("li");
      li.innerHTML = `
      <span>${index + 1}.</span>
      <span>${user.name}</span>
      <span>-</span>
      <span class="username">${user.username}</span>
      `;
      //3.2 Apend the current user li tag to the UL tag
      ul.appendChild(li);
    });
  }

//4 Add a search function to the DOM
function searchUsersByUsername(){
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-container");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li");
 
  //loop through all the users and render the ones that maych the search
  for ( let i = 0; i < usersList.length; i++){
    const usernameSpanTag = usersList[i].querySelector(".username")
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
    
    if(isMatch){
        usersList[i].style.display = "block"
      }else {
        usersList[i].style.display = "none";
      }
    }
}

//Calling the fetch function
fetchUsers();
