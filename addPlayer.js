let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

var selectTeam = document.getElementById("inp6");
for (var i = 0; i < localTeam.length; i++) {
  selectTeam.innerHTML += `
    <option value="${localTeam[i].teamFullName}">${localTeam[i].teamFullName}</option>
  `;
}
var newData = 10;
$("#addteamform").submit(function (e) {
  e.preventDefault();
  let inp_val = $("#inp6").val();
  let shortName = "";
  for (let i = 0; i < inp_val.length; i++) {
    if (i == 0) {
      shortName += inp_val[i++].toUpperCase();
      continue;
    } else if (inp_val[i] == " ") {
      shortName += inp_val[++i].toUpperCase();
      i++;
    }
  }

  //if player is playing or not
  var trueOrFal = "";
  if ($("#inp3").val() == "true") {
    trueOrFal = true;
  } else {
    trueOrFal = false;
  }

  let addPlayer = {
    id: localPlayers.length,
    playerName: $("#inp1").val(),
    from: shortName,
    price: $("#inp2").val() + "Cr",
    isPlaying: trueOrFal,
    discription: $("#inp4").val(),
    playerImg: $("#inp5").val(),
    playerTeam: $("#inp6").val(),
  };

  localPlayers.push(addPlayer);
  localStorage.setItem("playerArray", JSON.stringify(localPlayers));

  location.href = "./index.html";
});
