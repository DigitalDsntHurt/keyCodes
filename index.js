const codeContainer = document.getElementById('code-container');

window.addEventListener('keydown', e => {
  console.log(e.keyCode)
  codeContainer.appendChild(e.keyCode)
})
