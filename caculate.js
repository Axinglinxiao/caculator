var numresult;
var str;
function onclicknum(num) {
    str = document.getElementById("number");
    str.value = str.value + num;
}
function onclickclear() {
    str = document.getElementById("number");
    str.value = "";
}
function onclickresult() {
    str = document.getElementById("number");
    numresult = eval(str.value);
    str.value = numresult;
}