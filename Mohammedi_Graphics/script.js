const myButton = document.getElementsByClassName("login-link");
const myImg = document.getElementsByClassName("signup-link");

myButton.addEventListener("click", event => {

    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }

    else {
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }

});