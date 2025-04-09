selfImg = document.getElementById("self-image");
colors = ["#fafafa", "#ff2400", "#7fff00", "#008ecc", "#fee135", "#fcae1e"];

const colorChanger = () => {
    randNum = Math.floor(Math.random() * colors.length);
    selfImg.style.borderColor = colors[randNum];
};

selfImg.addEventListener("click", colorChanger);
