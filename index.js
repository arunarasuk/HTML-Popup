var dialog = document.querySelector('dialog');
//To open the dialog
document.querySelector('#show').onclick = function() {
  dialog.show();
};

//To close the dialog
document.querySelector('#close').onclick = function() {
    dialog.classList.add('hide');
    dialog.addEventListener('webkitAnimationEnd', function(){
        dialog.classList.remove('hide');
        dialog.close();
        dialog.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
    }, false);
};

//Function to copy the code to clipboard
function copyToClipboard(code, buttonId) {
  var elem = document.getElementById(buttonId);
  elem.className = "copiedButton";
  elem.innerHTML = 'CODE COPIED';
  removeOtherSelectedClasses(buttonId);
  //Code to copy the offer code in clipboard;
  const el = document.createElement('textarea');
  el.value = code;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

  //Remove the class from other selected buttons
  function removeOtherSelectedClasses(buttonId) {
    let  buttonIds = ['button1', 'button2', 'button3', 'button4']; 
    for(var i = 0; i < buttonIds.length; i++) {
      if(buttonId !== buttonIds[i]) {
        var elem = document.getElementById(buttonIds[i]);
        elem.className = "copyButton";
        elem.innerHTML = 'COPY CODE';
      }
    }
  }