const lbsInput = document.querySelector("#lbsInput");
const output = document.querySelector("#output");
const gramsOutput = document.querySelector(".gramsOutput");
const ozOutput = document.querySelector(".ozOutput");
const kgOutput = document.querySelector(".kgOutput");

const convert = () => {
  let grams = lbsInput.value / 0.0022046;
  let ounces = lbsInput.value * 16;
  let kilograms = lbsInput.value / 2.2046;

  gramsOutput.innerHTML = grams;
  ozOutput.innerHTML = ounces;
  kgOutput.innerHTML = kilograms;

  output.style.display = "";
};

lbsInput.addEventListener("input", convert);

output.style.display = "none";
