function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("shift").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("shift").style.marginLeft = "0";
}

/* Sticky navbar anchor offset */
window.addEventListener("hashchange", function() { scrollBy(0, -65) })
