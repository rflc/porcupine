// Global variables
var timer = null;
var callToAction;

var emailinput = function() {
  var tl = new TimelineMax();
  tl.set('.access', {display: 'none'})
    .set('#inputs',{visibility: 'visible'});
  /*
    .set('#login .first #email',{visibility: 'visible'});
    */
}


var passwdinput = function() {
  var tl = new TimelineMax();
  tl.set('.first', {visibility: 'hidden'})
    .set('.second', {visibility: 'visible'});
    /*.set('#password', {visibility: 'visible'});*/
}

var emailcheck = function(e) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(e.target.value.match(regex)){
    setTimeout(() => { passwdinput(); }, 700);
    /*alert(e.target.value);*/
  }
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
  document.getElementById("login").addEventListener("click", emailinput);
  document.getElementById("email").addEventListener("input", emailcheck);
  document.getElementById("enter").addEventListener("click", next);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
