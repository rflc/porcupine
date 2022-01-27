// Global variables
var timer = null;
var callToAction;

var login = function() {
  var tl = new TimelineMax();
  tl.set('.access', {display: 'none'})
    .set('#inputs',{visibility: 'visible'})
    .set('#email',{visibility: 'visible'});
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
  document.getElementById("login").addEventListener("click", login)
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
if (document.documentElement.clientWidth > 640) {
    document.addEventListener('scroll', play);
}
