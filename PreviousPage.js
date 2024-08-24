
document.getElementById("button").onclick = function(){
    var flower = document.getElementById("Input").value;

    if (
        flower === "Tulip" ||
        flower === "Tulips" ||
        flower === "tulip" ||
        flower === "tulips" ||
        flower === "Pink Tulip" ||
        flower === "Pink Tulips" ||
        flower === "Pink tulip" ||
        flower === "Pink tulips" ||
        flower === "pink tulip" ||
        flower === "pink tulips" ||
        flower === "PINK TULIPS" ||
        flower === "PINK TULIP" ||
        flower === "🌷"
    ) {
        document.getElementById("MainText").innerHTML = "Correct! Redirecting you to the Main Page...";
        setTimeout(function() {
            window.location.replace("/DoYouLoveMe/MainPage/MainPage.html");
        },2500);
    } else {
        document.getElementById("MainText").innerHTML = "Wrong. Access has been denied, Try again.";
    }
}