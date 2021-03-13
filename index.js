
let codeContainer = document.querySelector('#code-container');

window.addEventListener('keydown', e => {
  codeContainer.textContent = e.keyCode;
})
