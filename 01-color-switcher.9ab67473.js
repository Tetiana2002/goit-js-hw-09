!function(){var t={body:document.querySelector("body"),startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")},e=null;t.startButton.addEventListener("click",(function(){t.startButton.setAttribute("disabled","true"),t.stopButton.removeAttribute("disabled"),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopButton.addEventListener("click",(function(){t.stopButton.setAttribute("disabled","true"),t.startButton.removeAttribute("disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.9ab67473.js.map