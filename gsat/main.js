/* Toggle side navbar */
function openCloseNav() {
  var movebtn = document.getElementById("movebtn");
  var hpos = movebtn.offsetLeft;
  if (hpos == 0) {
    document.getElementById("mySidenav").style.width = "250px";
    movebtn.style.marginLeft = "250px";
    document.getElementById("arrow").textContent="–";
  } else {
    document.getElementById("mySidenav").style.width = "0";
    movebtn.style.marginLeft = "0";
    document.getElementById("arrow").textContent="+";
  }
}

/* Close side navbar */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("movebtn").style.marginLeft = "0";
    document.getElementById("arrow").textContent="+";
}

/* Sticky navbar anchor offset */
window.addEventListener("hashchange", function() { scrollBy(0, -65) })
