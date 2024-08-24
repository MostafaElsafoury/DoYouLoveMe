var yes = document.getElementById("yes")
var no = document.getElementById("no")
var img = document.getElementById("img")
var p = document.getElementById("h1")
var yesAnimation;


yes.onclick = function(){
    p.innerHTML = "YUPPIE!! MWAHHH I LOVE U TOO";
    document.getElementById("icon").src = "/DoYouLoveMe/Photos/star.png";
    yesAnimation = p.animate([
        { transform: 'translateY(-10px)' },
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-10px)' }
    ], {
        duration: 300,
        iterations: Infinity, 
        easing: 'linear' 
    });


    iconAnimation = document.getElementById("icon").animate([
        { transform: 'scale(1) rotate(-140deg)' },
        { transform: 'scale(0.8) rotate(-140deg)' },
        { transform: 'scale(1) rotate(-140deg)' }
    ], {
        duration: 750,
        iterations: Infinity, 
        easing: 'linear' 
    });

    img.src = "/DoYouLoveMe/Photos/cathappy.gif";
    document.getElementById("icon").style.opacity = 100
};


no.onclick = function(){
    img.src = "https://tr.rbxcdn.com/537c5ad362e65b2247cbef6be9f8de7d/420/420/Hat/Png"
    document.getElementById("icon").src = "/DoYouLoveMe/Photos/angry.png";
    document.getElementById("icon").style.opacity = 100



    iconAnimation = document.getElementById("icon").animate([
        { transform: 'scale(1) rotate(120deg)' },
        { transform: 'scale(0.8) rotate(120deg)' },
        { transform: 'scale(1) rotate(120deg)' }
    ], {
        duration: 750,
        iterations: Infinity, 
        easing: 'linear' 
    });



    no.style.position = "absolute";
    yes.style.position = "relative";
    p.innerHTML = "No isnt an answer."

    if (yesAnimation) {
        yesAnimation.cancel();
    }



    noAnimation = p.animate([
        { transform: 'translateY(-5px) rotate(-3deg)' },
        { transform: 'translateY(0px) rotate(3deg)' },
        { transform: 'translateY(-5px) rotate(-3deg)' }
    ], {
        duration: 150,
        easing: 'linear' 
    });

    no.style.top = Math.round(Math.random() * 200) + 360 + 'px';
    no.style.left = Math.round(Math.random() * 200) + 70 + 'px';
    yes.style.left = "-73px";
}

