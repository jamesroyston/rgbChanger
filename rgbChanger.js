const btn = document.querySelector(".btn");
const bcgColor = document.querySelector(".container");
const color = bcgColor.style.background;
const randomize = () => {

    //assign three variables to random rgb values
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);

    //concatenate a string including the variables to build color property
    const clickColor = "rgb("+x+", "+y+", "+z+")";
    return clickColor;
};

const changeColor = () => {
    bcgColor.style.background = randomize();
    console.log("changed the div");
};
const btnClick = btn.addEventListener('click', function() {
    changeColor();
});



