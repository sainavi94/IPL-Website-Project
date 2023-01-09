let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

$("#addteamform").submit(function (e) {
  e.preventDefault();

  let inp_val = $("#inp1").val();
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

  let addData = {
    id: localTeam.length,
    teamFullName: $("#inp1").val(),
    sName: shortName,
    teamIcon: $("#inp3").val(),
    WonCount: $("#inp4").val(),
  };

  localTeam.push(addData);
  localStorage.setItem("teamArray", JSON.stringify(localTeam));

  location.href = `./teams.html?name=${addData.sName}`;
});
