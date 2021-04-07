function Justkidding(a) {
  var inpvalue = document.getElementById("fname").value;

  if (inpvalue === "" || inpvalue === " ") {
    document.getElementById("rederr").innerHTML = "please fill this field 👇👇";
  } else {
    document.getElementById("rederr").innerHTML = "";

    fetchfunc("sub");
  }
}

var fetchfunc = (str) => {
  var el = document.getElementById("gender");
  var ddlvalue = el.value;
  var spin = document.getElementById("spinner");
  var cont = document.getElementById("container");
  spin.style.display = "block";
  cont.style.display = "none";
  var inpel = document.getElementById("fname");
  var inpvalue = inpel.value;
  var fetchstate =
    inpvalue !== "" && inpvalue !== " "
      ? `http://api.icndb.com/jokes/random?firstName=${
          document.getElementById("fname").value
        }&lastName= `
      : `http://api.icndb.com/jokes/random`;
  fetch(fetchstate)
    .then((d) => d.json())
    .then((data) => {
      var djoke = data.value.joke;
      str === "sub"
        ? (djoke = ddlvalue === "boy" ? djoke : djoke.replace(/him/gi, "her"))
        : djoke;
      str === "sub"
        ? (djoke =
            ddlvalue === "boy" ? djoke : djoke.replace(/ his /gi, " her "))
        : djoke;
      str === "sub"
        ? (djoke =
            ddlvalue === "boy" ? djoke : djoke.replace(/ he /gi, " she "))
        : djoke;
      str === "sub"
        ? (djoke =
            ddlvalue === "boy" ? djoke : djoke.replace(/ he'/gi, " she'"))
        : djoke;
      document.getElementById("joke").innerHTML = djoke;
    });
  inpel.value = "";
  setTimeout(() => {
    spin.style.display = "none";
    cont.style.display = "block";
  }, 1000);
};
fetchfunc();

document.getElementById("btn").addEventListener("click", Justkidding);
document.getElementById("anotherjoke").addEventListener("click", fetchfunc);
