function enlarge(name) {
  var nDiv = document.getElementById(name);

  if (nDiv.style.height == "") {
    nDiv.style.height = "500px";
    nDiv.style.position = "absolute";
    nDiv.style.left = "25%";
    nDiv.style.width = "50%";
  } else {
    nDiv.style.height = "";
    nDiv.style.position = "";
    nDiv.style.left = "";
    nDiv.style.width = "";
  }
}

