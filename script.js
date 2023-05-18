const myPhoto = document.body.getElementsByTagName("img")[0];
const myName = document.body.getElementsByTagName("h1")[0];

const toggleBorderColor = (event) => {
  if (event.target.style.borderColor === "red") {
    event.target.style.borderColor = "black";
  } else {
    event.target.style.borderColor = "red";
  }
};

const toggleNameColor = (event) => {
  if (myName.style.color === "black") {
    myName.style.color = "red";
  } else {
    myName.style.color = "black";
  }
};

myPhoto.addEventListener("click", toggleNameColor);
myPhoto.addEventListener("click", toggleBorderColor);