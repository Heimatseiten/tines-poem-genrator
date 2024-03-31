function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "1st row of poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
