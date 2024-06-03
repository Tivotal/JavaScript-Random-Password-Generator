/* Created by Tivotal */

let lengthInput = document.querySelector(".length-box input");
let passInput = document.querySelector(".input-box input");

function generatePass() {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let nums = "0123456789";
  let symbol = "@#$%^&()_+~|}{[]></-=";

  let allChar = upperCase + lowerCase + nums + symbol;

  let length = lengthInput.value;
  let pass = "";

  pass += upperCase[Math.floor(Math.random() * upperCase.length)];
  pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  pass += nums[Math.floor(Math.random() * nums.length)];
  pass += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > pass.length) {
    pass += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passInput.value = pass;
}

function copyPass(copyBtn) {
  let password = passInput.value;

  navigator.clipboard.writeText(password).then(() => {
    copyBtn.innerHTML = `<i class="fas fa-check"></i>`;
    copyBtn.style.color = "#4bb543";

    setInterval(() => {
      copyBtn.innerHTML = `<i class="fas fa-clipboard"></i>`;
      copyBtn.style.color = "#4070f4";
    }, 1000);
  });
}

generatePass();
