// Global variables
var timer = null;
var callToAction;
var access;

/*
<input type="email" class="border_gradient" autofocus placeholder="Email">
<input type="" class="border_gradient" autofocus placeholder="Enter code">
*/

var emailinput = function() {
  const input = document.createElement('input');
  input.type = 'email';
  input.id = 'email';
  input.className = 'border_gradient email';
  input.placeholder = 'Email';
  access.replaceChildren(input);
  document.getElementById("email").addEventListener("input", emailcheck);
  /*
  var tl = new TimelineMax();
  tl.set('.access', {display: 'none'})
    .set('#inputs',{visibility: 'visible'});
  */
}


var passwdinput = function() {
  const message = document.createElement('h4');
  message.innerText = 'Request Submitted';
  message.color = "black";
  access.replaceChildren(message);
}

var emailcheck = function(e) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(e.target.value.match(regex)){
    setTimeout(() => { passwdinput(); }, 900);
  }
}

var codeinput = function() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'code';
  input.className = 'border_gradient indent';
  input.placeholder = 'Enter code';
  access.replaceChildren(input);
  document.getElementById("code").addEventListener("input", codecheck);
  /*
  var tl = new TimelineMax();
  tl.set('.access', {display: 'none'})
    .set('#inputs',{visibility: 'visible'});
  */
}

var next = function() {
  window.location.href = "main.html";
}

/*
var animate = function(){//{{{
    // Logo Animation
    const one = document.getElementById("one");
    const zero  = document.getElementById('zero');
    const o  = document.getElementById('o');
    const r  = document.getElementById('r');
    const c  = document.getElementById('c');
    const u  = document.getElementById('u');
    const i  = document.getElementById('i');
    const n  = document.getElementById('n');
    const e  = document.getElementById('e');

    var tl = new TimelineMax({paused: true});
    tl.set('#one', {opacity: 0})
      .set('#zero', {opacity: 0})
      .set('#o', {opacity: 0})
      .to('#one',{d="M3.5,43.8H0v-35H3.24Z"});
}//}}}
*/
var init = function() {
  access = document.getElementById("access");
  document.getElementById("button").addEventListener("click", emailinput);
  document.getElementById("code").addEventListener("click", codeinput);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
