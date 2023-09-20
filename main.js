const buttonsSelected = document.querySelectorAll(".button");
const body = document.querySelector("body");

//Events => when clicked it got in function and then perform some activites.
buttonsSelected.forEach(function (button) {
  console.log(button);
  //Add eventListener to all buttons
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = "rgb(204, 83, 83)";
      // body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "green") {
      body.style.backgroundColor = "rgb(83, 204, 119)";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "rgb(54, 141, 223)";
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = "rgb(212, 215, 60)";
    }
  });
});
