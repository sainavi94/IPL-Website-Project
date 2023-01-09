var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

var addteamclicked = () => {
  window.open("./addTeam.html", "_self");
};
var addPlayerClicked = () => {
  window.open("./addPlayer.html", "_self");
};

var suggestArray = [];
for (var i = 0; i < detailofTeam.length; i++) {
  suggestArray.push(detailofTeam[i].sName);
}

let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".icon");

inputBox.onkeyup = (e) => {
  if (e.keyCode == 13) {
    icon.click();
  }
  let userData = e.target.value;

  let emptyArray = [];
  if (userData) {
    emptyArray = suggestArray.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });
    searchBar.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "currentLi(this)");
    }
  } else {
    searchBar.classList.remove("active");
  }
};
function currentLi(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    window.open(`./teams.html?name=${element.textContent}`, "_self");
  };
  searchBar.classList.remove("active");
}
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

//  cards for teams

var teamMainBox = document.getElementById("container_teams");
for (var i = 0; i < detailofTeam.length; i++) {
  teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${i}')"    class="minibox">

<img src="${detailofTeam[i].teamIcon}" class="mainimage" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${detailofTeam[i].teamFullName}   </p>
  <p class="text2"> Won Count : ${detailofTeam[i].WonCount} </p>
 
</div>

</div>

`;
}

function makethisinclick(res) {
  var clickedCard = detailofTeam[res].sName;

  window.open(`./teams.html?name=${clickedCard}`, "_self");
}
