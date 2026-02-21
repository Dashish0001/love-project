function createHeart() {
    const heart = document.createElement("div");
    heart.className = "rain-heart";

    // random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // random falling speed
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(heart);

    // remove after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// start continuous rain
setInterval(createHeart, 300);