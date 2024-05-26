
function numberRan() {
    let a = document.getElementById("randomNumber").innerHTML = Math.trunc(100 * Math.random());
}
numberRan();


function numberstyle() {
    document.getElementById("randomNumber").style.color = "red"
    document.getElementById("randomNumber").style.textAlign = "center"
    document.getElementById("randomNumber").style.marginTop = "40vh"
    document.getElementById("randomNumber").style.fontSize = "100px"
}
numberstyle();


function fonstyle() {
    document.getElementById("bod").style.backgroundColor = "black"
}
fonstyle();

