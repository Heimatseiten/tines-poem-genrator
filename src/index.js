function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let wordInput = document.querySelector("#word");

  let apiKey = "9tb7143e5ff804f5od02a6f195ae433e";
  let prompt = `Generate a romantic german poem that rhymes including the word ${wordInput.value}`;
  let context =
    "You are a romantic Poem expert and love to tell short and funny Love Poems. Your mission is to generate 4 line poems.Please use basic HTML.Please seperate the sentences with <br/>. Make sure to genrate the poem considering the input given in the form.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink"> Dein Gedicht über ${wordInput.value} ist in Arbeit </div>`;

  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
