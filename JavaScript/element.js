
const _dat = {};
const vsdg = {};
const element = {};
const email = {};
var functions = {};
var image = [];
var tag = {};
var page = {};
const section = {};
var json = {};
var range = [];
var form = {};
var title = {};
var post = {};
const track = {}
var cookie = {}
const action = {};
const path = {};
var modal = {}
var styles = {}
var control = {}
functions.createLead = 'createLead'
functions.rate = 'rate'
functions.post = 'post'
functions.readJs = 'readJs'
functions.js = 'js'
var date = new Date(); // date object
json.time = '0'
const animation = {};
const firstPath = window.location.pathname.split('/')[1];


var today = new Date();
page.today = today.toLocaleDateString("en-US")
track.currentYear = date.getFullYear()
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
  document.body.innerHTML = '<h1>Please Update your browser or switch to chrome</h1>'
}

if (window.navigation) {
  track.key = navigation.currentEntry.key
} else {
  track.key = 'id-' + new Date().getTime().toString()
}
track._id = 'id-' + new Date().getTime().toString()
track.form = Math.floor(Math.random() * 1000) + 100;
track.redi = document.referrer;
track.url = window.location.href;
track.dimentions = window.innerWidth + ' X ' + window.innerHeight;
track.string = window.location.search;
track.code = track.string.substring(1, 5)
track.domain = window.location.hostname






  var browser = (function () {
    var test = function (regexp) { return regexp.test(window.navigator.userAgent) }
    switch (true) {
      case test(/edg/i): return "Microsoft Edge";
      case test(/trident/i): return "Microsoft Internet Explorer";
      case test(/firefox|fxios/i): return "Mozilla Firefox";
      case test(/opr\//i): return "Opera";
      case test(/ucbrowser/i): return "UC Browser";
      case test(/samsungbrowser/i): return "Samsung Browser";
      case test(/chrome|chromium|crios/i): return "Google Chrome";
      case test(/safari/i): return "Apple Safari";
      default: return "Other";
    }
  })();

  track.browser = browser


  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  track.os = os;


  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    track.device = 'Mobile'
  } else {

    track.device = 'Desktop'
  }
  


var count = 0;
setInterval(function () {
  if (count > 60) { // We check if the timer is in seconds or mins
    var time = ++count; // We get a copy of the time in 'seconds'
    time = parseInt(time / 60); // We convert it to mins
    track.timming = ++count + 'm'
  } else { // Simmilarly we can also add a condition to check hours with s=3600
    track.timming = ++count + 's'
  }
}, 1000);




element.style = (Rules) => {

  // create a style element
  const style = document.createElement('style');

  // add the CSS as a string using template literals
  style.appendChild(document.createTextNode(

    Rules

  ));





  // add it to the head
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);


}




animation.show = 'show'
animation.shake = 'shake'
animation.bounceIn = 'bounce-in'
animation.grow = 'grow'
animation.growDown = 'grow-down'
animation.slideOutBlurredBottom = 'slide-out-blurred-bottom '


page.background = (div,url) =>{

document.querySelector(div).style.backgroundImage = url
document.querySelector(div).style.backgroundRepeat = 'norepeat'
document.querySelector(div).style.backgroundSize = size
}
element.style(`

@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
*, *:before, *:after {
  box-sizing: inherit;
}

.ir {
  display: block;
  /* overflow: visible; */
  padding: 1rem;
  position: relative;
  height: auto;
  width: 24%;
  margin: auto;
}

.ir > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.soc {
  display: flex;
  font-size: 0;
  list-style: none;
  margin: auto;
  padding: 1rem;
  text-align: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.soc li {
  margin: auto;
  width: 100%;
}
.soc a, .soc svg {
  display: block;
}
.soc a {
  /* height: 9.6rem; */
  width: 9.6rem;
}

.icon-32:hover, .icon-31:hover, .icon-30:hover, .icon-29:hover, .icon-28:hover, .icon-27:hover, .icon-26:hover, .icon-25:hover, .icon-24:hover, .icon-23:hover, .icon-22:hover, .icon-21:hover, .icon-20:hover, .icon-19:hover, .icon-18:hover, .icon-17:hover, .icon-16:hover, .icon-15:hover, .icon-14:hover, .icon-13:hover, .icon-12:hover, .icon-11:hover, .icon-10:hover, .icon-9:hover, .icon-8:hover, .icon-7:hover, .icon-6:hover, .icon-5:hover, .icon-4:hover, .icon-3:hover, .icon-2:hover, .icon-1:hover {
/  border-radius: 100%;
  fill: #0e1a25;
  transform: scale(1.25);
  transition: background-color 0.5s, transform 0.5s ease-out;
}

.icon-1 {
  fill: #d94a26;
}
.icon-1:hover {
  background: #d94a26;
}

.icon-2 {
  fill: #d96e26;
}
.icon-2:hover {
  background: #d96e26;
}

.icon-3 {
  fill: #d99126;
}
.icon-3:hover {
  background: #d99126;
}

.icon-4 {
  fill: #d9b526;
}
.icon-4:hover {
  background: #d9b526;
}

.icon-5 {
  fill: #d9d926;
}
.icon-5:hover {
  background: #d9d926;
}

.icon-6 {
  fill: #b5d926;
}
.icon-6:hover {
  background: #b5d926;
}

.icon-7 {
  fill: #91d926;
}
.icon-7:hover {
  background: #91d926;
}

.icon-8 {
  fill: #6ed926;
}
.icon-8:hover {
  background: #6ed926;
}

.icon-9 {
  fill: #4ad926;
}
.icon-9:hover {
  background: #4ad926;
}

.icon-10 {
  fill: #26d926;
}
.icon-10:hover {
  background: #26d926;
}

.icon-11 {
  fill: #26d94a;
}
.icon-11:hover {
  background: #26d94a;
}

.icon-12 {
  fill: #26d96e;
}
.icon-12:hover {
  background: #26d96e;
}

.icon-13 {
  fill: #26d991;
}
.icon-13:hover {
  background: #26d991;
}

.icon-14 {
  fill: #26d9b5;
}
.icon-14:hover {
  background: #26d9b5;
}

.icon-15 {
  fill: #26d9d9;
}
.icon-15:hover {
  background: #26d9d9;
}

.icon-16 {
  fill: #26b5d9;
}
.icon-16:hover {
  background: #26b5d9;
}

.icon-17 {
  fill: #2691d9;
}
.icon-17:hover {
  background: #2691d9;
}

.icon-18 {
  fill: #266ed9;
}
.icon-18:hover {
  background: #266ed9;
}

.icon-19 {
  fill: #264ad9;
}
.icon-19:hover {
  background: #264ad9;
}

.icon-20 {
  fill: #2626d9;
}
.icon-20:hover {
  background: #2626d9;
}

.icon-21 {
  fill: #4a26d9;
}
.icon-21:hover {
  background: #4a26d9;
}

.icon-22 {
  fill: #6e26d9;
}
.icon-22:hover {
  background: #6e26d9;
}

.icon-23 {
  fill: #9126d9;
}
.icon-23:hover {
  background: #9126d9;
}

.icon-24 {
  fill: #b526d9;
}
.icon-24:hover {
  background: #b526d9;
}

.icon-25 {
  fill: #d926d9;
}
.icon-25:hover {
  background: #d926d9;
}

.icon-26 {
  fill: #d926b5;
}
.icon-26:hover {
  background: #d926b5;
}

.icon-27 {
  fill: #d92691;
}
.icon-27:hover {
  background: #d92691;
}

.icon-28 {
  fill: #d9266e;
}
.icon-28:hover {
  background: #d9266e;
}

.icon-29 {
  fill: #d9264a;
}
.icon-29:hover {
  background: #d9264a;
}

.icon-30 {
  fill: #d92626;
}
.icon-30:hover {
  background: #d92626;
}

.icon-31 {
  fill: #d94a26;
}
.icon-31:hover {
  background: #d94a26;
}

.icon-32 {
  fill: #d96e26;
}
.icon-32:hover {
  background: #d96e26;
}
html::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none; 
  scrollbar-width: none;
}

body {
	font-family: Roboto, 'Segoe UI', Tahoma, sans-serif;
	font-size: 81.25%;
	height: 100vh;
}
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number] { 
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
}
  .show {
    animation: show .7s forwards;
  }

  .bounce-in {
    -webkit-animation: bounce-in-top 1.1s ease-in-out both;
            animation: bounce-in-top 1.1s ease-in-out both;
  }

  .shake {
    -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  }
  .grow {
    -webkit-animation: scale-up-center 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: scale-up-center 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }


  .grow-down {
    -webkit-animation: scale-up-ver-top 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: scale-up-ver-top 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .slide-out-blurred-bottom {
    -webkit-animation: slide-out-blurred-bottom 0.3s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
            animation: slide-out-blurred-bottom 0.3s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
  }
 @-webkit-keyframes shake-horizontal {
   0%,
   100% {
     -webkit-transform: translateX(0);
             transform: translateX(0);
   }
   10%,
   30%,
   50%,
   70% {
     -webkit-transform: translateX(-10px);
             transform: translateX(-10px);
   }
   20%,
   40%,
   60% {
     -webkit-transform: translateX(10px);
             transform: translateX(10px);
   }
   80% {
     -webkit-transform: translateX(8px);
             transform: translateX(8px);
   }
   90% {
     -webkit-transform: translateX(-8px);
             transform: translateX(-8px);
   }
 }
 @keyframes shake-horizontal {
   0%,
   100% {
     -webkit-transform: translateX(0);
             transform: translateX(0);
   }
   10%,
   30%,
   50%,
   70% {
     -webkit-transform: translateX(-10px);
             transform: translateX(-10px);
   }
   20%,
   40%,
   60% {
     -webkit-transform: translateX(10px);
             transform: translateX(10px);
   }
   80% {
     -webkit-transform: translateX(8px);
             transform: translateX(8px);
   }
   90% {
     -webkit-transform: translateX(-8px);
             transform: translateX(-8px);
   }
 }
 
 @-webkit-keyframes slide-out-blurred-bottom {
   0% {
     -webkit-transform: translateY(0) scaleY(1) scaleX(1);
             transform: translateY(0) scaleY(1) scaleX(1);
     -webkit-transform-origin: 50% 50%;
             transform-origin: 50% 50%;
     -webkit-filter: blur(0);
             filter: blur(0);
     opacity: 1;
   }
   100% {
     -webkit-transform: translateY(1000px) scaleY(2) scaleX(0.2);
             transform: translateY(1000px) scaleY(2) scaleX(0.2);
     -webkit-transform-origin: 50% 100%;
             transform-origin: 50% 100%;
     -webkit-filter: blur(40px);
             filter: blur(40px);
     opacity: 0;
   }
 }
 @keyframes slide-out-blurred-bottom {
   0% {
     -webkit-transform: translateY(0) scaleY(1) scaleX(1);
             transform: translateY(0) scaleY(1) scaleX(1);
     -webkit-transform-origin: 50% 50%;
             transform-origin: 50% 50%;
     -webkit-filter: blur(0);
             filter: blur(0);
     opacity: 1;
   }
   100% {
     -webkit-transform: translateY(1000px) scaleY(2) scaleX(0.2);
             transform: translateY(1000px) scaleY(2) scaleX(0.2);
     -webkit-transform-origin: 50% 100%;
             transform-origin: 50% 100%;
     -webkit-filter: blur(40px);
             filter: blur(40px);
     opacity: 0;
   }
 }
 



 @-webkit-keyframes bounce-in-top {
   0% {
     -webkit-transform: translateY(-500px);
             transform: translateY(-500px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
     opacity: 0;
   }
   38% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
     opacity: 1;
   }
   55% {
     -webkit-transform: translateY(-65px);
             transform: translateY(-65px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
   }
   72% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
   }
   81% {
     -webkit-transform: translateY(-28px);
             transform: translateY(-28px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
   }
   90% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
   }
   95% {
     -webkit-transform: translateY(-8px);
             transform: translateY(-8px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
   }
   100% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
   }
 }
 @keyframes bounce-in-top {
   0% {
     -webkit-transform: translateY(-500px);
             transform: translateY(-500px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
     opacity: 0;
   }
   38% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
     opacity: 1;
   }
   55% {
     -webkit-transform: translateY(-65px);
             transform: translateY(-65px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
   }
   72% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
   }
   81% {
     -webkit-transform: translateY(-28px);
             transform: translateY(-28px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
   }
   90% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
   }
   95% {
     -webkit-transform: translateY(-8px);
             transform: translateY(-8px);
     -webkit-animation-timing-function: ease-in;
             animation-timing-function: ease-in;
   }
   100% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
     -webkit-animation-timing-function: ease-out;
             animation-timing-function: ease-out;
   }
 }
 











    @keyframes show {
      from {
        opacity: 0;
      }
    
      to {
        opacity: 1;
      }
    }
    
  
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@-webkit-keyframes scale-up-ver-top {
 0% {
   -webkit-transform: scaleY(0.4);
           transform: scaleY(0.4);
   -webkit-transform-origin: 100% 0%;
           transform-origin: 100% 0%;
 }
 100% {
   -webkit-transform: scaleY(1);
           transform: scaleY(1);
   -webkit-transform-origin: 100% 0%;
           transform-origin: 100% 0%;
 }
}
@keyframes scale-up-ver-top {
 0% {
   -webkit-transform: scaleY(0.4);
           transform: scaleY(0.4);
   -webkit-transform-origin: 100% 0%;
           transform-origin: 100% 0%;
 }
 100% {
   -webkit-transform: scaleY(1);
           transform: scaleY(1);
   -webkit-transform-origin: 100% 0%;
           transform-origin: 100% 0%;
 }
}



@media screen and (max-width:769px) {

  .mobile {

    grid-template-columns: auto!important;

}
    
    `)














form.json = (parent, id, tag) => {
  tag = tag.replace('#', '')
  form[parent.replace('#', '')] = {
    [tag]: id
  }
}










page.fetch = (url, name, next) => {
  fetch(url, {

  }).then(d => {
    if (!d.ok) {
      throw new Error(`HTTP error! Status: ${d.status}`);
    }
    return d.json()

  }).then(d => {
    json[name] = d
    if (track.log) {
      console.log('Success: ' + d);
    }
  }).then(d => {
    if (next) {
      page[next]()
    }

  })
    .catch((error) => {
      if(track.log){
      console.error('Error: ' + error);
      }
    });
}











page.abort = (missing) => {
  throw new Error('This is not an error. missing ' + missing);
}









page.message = (div, message, timer) => {



  if (!message) {
    console.log('write variable with comma seperated values')
  }

  message.forEach(el => {
    console.log(el.length)

    setTimeout(function () {
      document.querySelector(div).innerHTML = el

    }, Math.floor(Math.random() * el.length) + timer)
  })



}






page.call = (tagListener, tel) => {
  document.querySelector(tagListener).addEventListener('click', function () {

    for (var key in _dat) {
      track[key] = _dat[key]

    }

    track.subj = 'Called :' + tel.split('tel:').join('')
    track.called = 'Yes'

    window.open(tel, "_self")

  })
}























if (track.code == '') {
  var eq = "not privided";
}
form.id = track._id
const _id = track._id;













element.link = (rel,type,size,href) => {
  var e = document.createElement('link')
  e.rel = rel
  if(type){
  e.type = type
  }
  e.href = href
  if(size){
    e.size = size
  }
  document.head.prepend(e)

}





















element.marquee = (parent, imageFolder,time) => {

  element.style(`
* {
  box-sizing: border-box;
}

.wrap {
  margin: 0 auto;
}
.wrap--text {
  margin-bottom: 50px;
  padding: 0 50px;
  text-align: center;
}
.wrap--logobar {
  height: inherit;
  overflow: hidden;
  position: relative;
  height: 7rem;
}
.list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  margin-left: 0;
}
.list__item {
  /* flex-grow: 0; */
  flex-shrink: 0;
  padding: 20px;
  text-align: center;
  max-width: 136px;
  width: 100%;
  height: 100%;
  margin:auto;
}


`)
if(!time){
  var time = '15'
}
  page.image(imageFolder, 'divs')
  element.div('containerElem', parent, 'wrap wrap--logobar')
  element.ul('list', '#containerElem', 'list')
  page.divs = () => {

    json.image.forEach(el => {
      element.image(el, json.imagesUrl + '/' + el, '#list', 'list__item')
    })




    const items = [...document.getElementsByClassName('list__item')];
    const containerElem = document.getElementById('containerElem');
    const containerElem2 = document.querySelector(parent);
    const leftSideOfContainer = containerElem2.getBoundingClientRect().left;
    const listElem = document.getElementById('list');
    let currentLeftValue = 0;

    window.setInterval(animationLoop, time);
    function animationLoop() {
      const firstListItem = listElem.querySelector('.list__item:first-child');

      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;


      if (rightSideOfFirstItem == leftSideOfContainer) {
        currentLeftValue = -1;
        listElem.appendChild(firstListItem);
      }

      listElem.style.marginLeft = `${currentLeftValue}px`;
      currentLeftValue--;
    }



  }






}




element.form = function (parent, classname) {

  var form = document.createElement('form')
  form.id = track.key;
  if (classname) {
    form.className = classname;
  }
  if (parent) {
    document.querySelector(parent).appendChild(form)
  }


}

element.create = (tag, id, classname, parent, type, text, listener, next, value, name) => {
  var e = document.createElement(tag)

  if (id) {
    e.id = id
  }
  if (classname) {
    e.className = classname
  }
  if (value) {
    e.value = value
  }
  if (type) {
    e.type = type
  }
  if (text) {
    e.textContent = text
  }
  if (listener) {
    e.addEventListener(listener, () => {
      page[next]()
    })

  }

  document.querySelector(parent).appendChild(e)

  var name = e.tagName
  if (id) {
    json[name] = id
  }
}


















page.loop = (tag, parent, next, max) => {
  if (json.text.length >= 6) {
    document.querySelector(parent).setAttribute('class', 'row-3')
  }
  if (json.text.length <= 5) {
    document.querySelector(parent).setAttribute('class', 'row-1')

  }
  if (json.text.length >= 7) {
    document.querySelector(parent).setAttribute('class', 'row-4')


  }





  if (json.text.length > max) {

    var part1 = []
    var part2 = []




    for (var i = 0; i < max; i++) {
      part1.push(json.text[i])
    }

    for (var i = max; i < json.text.length; i++) {
      part2.push(json.text[i])
    }


    if (json.item) {

      part1.forEach(e => {


        element[tag](e[json.item], e[json.item], parent, next)

      })


      part2.forEach(e => {


        element[tag](e[json.item], e[json.item], parent, next, '', 'load')
        document.querySelector('.load').setAttribute('style', 'display:none;')

      });

    } else {

      part1.forEach(e => {
        element[tag](e, e, parent, next)

      })


      part2.forEach(e => {


        element[tag](e, e, parent, next, '', 'displaynone')

      });
    }























    element.li('load_more', 'Load more', parent, 'display')
    page.display = () => {
      document.querySelectorAll('form > ul > li').forEach(el => {
        el.removeAttribute('class', 'load')
      })

    }


  } else {

    if (json.item) {


      json.text.forEach(e => {
        element[tag](e[item], e[item], parent, next)

      });

    } else {
      json.text.forEach(e => {
        element[tag](e, e, parent, next)

      });
    }
  }
}











page.loop_tag = (json, max) => {
  if (json.text.length >= 6) {
    document.querySelector(parent).setAttribute('class', 'row-3')
  }
  if (json.text.length <= 5) {
    document.querySelector(parent).setAttribute('class', 'row-1')

  }
  if (json.text.length >= 7) {
    document.querySelector(parent).setAttribute('class', 'row-4')


  }





  if (json.text.length > max) {

    var part1 = []
    var part2 = []




    for (var i = 0; i < max; i++) {
      part1.push(json.text[i])
    }

    for (var i = max; i < json.text.length; i++) {
      part2.push(json.text[i])
    }


    if (json.item) {

      part1.forEach(e => {

        var e = document.createElement(tag)
        if (json.id) {
          e.id = json.id
        }
        if (json.classname) {
          e.className = json.clasname
        }
        if (json.value) {
          e.value = json.value
        }
        if (type) {
          e.type = json.type
        }

        e.name = json.id




        if (json.tagname == 'input') {
          e.addEventListener('keydown , blur', function () {
            var name = this.name
            track[name] = this.value

          })
        }

        if (json.tagname == 'select') {
          e.addEventListener('change', function () {
            var name = this.name
            track[name] = this.value

          })
        }

        if (json.tagname == 'li') {
          e.addEventListener('click', function () {
            var name = this.name
            track[name] = this.value

          })
        }



        if (json.next) {
          e.addEventListener(listener, function () {
            page[next](id)
          })
        }



        document.querySelector(parent).appendChild(e)

        var name = e.tagName
        json[name] = id
        var name = e.tagName + 1
        tag[name] = _id + 1


        element[tag](e[json.item], e[json.item], parent, next)

      })


      part2.forEach(e => {


        //element[tag](e[json.item],e[json.item],parent,next,'','load')
        //document.querySelector('.load').setAttribute('style','display:none;')

      });

    } else {

      part1.forEach(e => {
        element[tag](e, e, parent, next)

      })


      part2.forEach(e => {


        element[tag](e, e, parent, next, '', 'displaynone')

      });
    }





    element.li('load_more', 'Load more', parent, 'display')
    page.display = () => {
      document.querySelectorAll('form > ul > li').forEach(el => {
        el.removeAttribute('class', 'load')
      })

    }


  } else {

    if (json.item) {


      json.text.forEach(e => {
        element[tag](e[item], e[item], parent, next)

      });

    } else {
      json.text.forEach(e => {
        element[tag](e, e, parent, next)

      });
    }
  }
}










































page.load = (listener, load) => {

  window.addEventListener(listener, function () {
    page[load]()
  });
}

element.prepend = (parent, div_id, classname) => {
  var d = document.createElement('div')
  if (div_id) {
    d.id = div_id
  }
  if (classname) {
    d.className = classname
  }
  document.querySelector(parent).prepend(d)
}









page.slider = (parent, folder, next) => {
  if (window.innerWidth < 769) {
    var x = 2
  } else {
    var x = 5
  }
  var slide = {}

  page.script('../controller/slider.js', 'controller')

  page.controller = () => {
    page.script('../controller/slide-controller.js', 'start_slide')
  }

  page.start_slide = () => {
    element.css('../controller/slider.css')

    element.div('pr', parent, 'splide')
    element.div('ch', '.splide', 'splide__track')
    element.ul('mn', '.splide__track', 'splide__list')
    page.image(folder, 'images')




  }

  page.images = () => {
    var i = 0
    image.forEach(el => {
      var id = el.split('.').join('')
      element.li('sli' + i, '', '#mn', '', '', 'splide__slide')
      element.image(el, folder + '/' + el, '#sli' + i, 'sldi')
      i++
    })
    var spli = new Splide('.splide', {
      type: 'loop',
      drag: false,
      focus: 'center',
      pauseOnHover: false,
      pauseOnFocus: false,
      perPage: x,
      autoScroll: {
        speed: 2,
      },
    })
    spli.mount(window.splide.Extensions);
    if (next) {
      page[next]()
    }
  }

}






element.css = function (url) {
  var s = document.createElement('link')
  s.rel = "stylesheet";
  s.id = css
  s.type = 'text/css';
  s.href = url;
  document.head.appendChild(s)
}






element.redirect =  (param) => {
  window.location.href = param;
}










element.select = function (id, parent, next, param, classname) {
  var e = document.createElement('select')

  e.id = id;
  if (classname) {
    e.className = classname
  }
  e.onchange = function () {

    var name = this.id
    _dat[name] = this.value
    if (next) {
      page[next](param)
    }
  }

  document.querySelector(parent).appendChild(e)

  var name = e.tagName
  json[name] = id
  var name = e.tagName + 1
  tag[name] = _id + 1


}









element.option = function (id, parent, value) {
  var e = document.createElement('option')
  e.id = id;
  e.name = id;


  if (!value) {
    e.textContent = id
  } else {
    e.textContent = value
  }

  document.querySelector(parent).appendChild(e)

  var name = e.tagName
  json[name] = id

}








element.input = function (name, type, placeholder, parent, value, classname, id, text) {
  var e = document.createElement('input')
  if (name) {
    e.name = name;
  }
  e.type = type;

  if (placeholder) {
    e.placeholder = placeholder;
  }
  e.parent = parent;
  if (!id) {
    e.id = name;
  } else {
    e.id = id;
  }

  if (value) {
    e.value = value;
  }
  if (classname) {
    e.className = classname
  }
  if (type == 'tel') {
    e.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    e.addEventListener('keydown', enforceFormat);
    e.addEventListener('keyup', formatToPhone);

  }



  if (text) {
    e.textContent = this.text
  }

  if (type == 'radio' || type == 'checkbox') {

    e.addEventListener('click', () => {
      var nam = e.name;
      _dat[nam] = e.value
    })
  } else {

    e.addEventListener('blur', function () {
      var name = e.name
      track[name] = e.value

      _dat[name] = e.value
    })


  }
  document.querySelector(parent).appendChild(e)

  var nam = e.tagName
  json[nam] = name




}




element.radio = (id, parent, value, name, imgsrc) => {



  if (!document.querySelector('container' + id)) {

    element.div('container' + id, parent, 'container')

  }

  element.div('radio-tile-group' + id, '.container', 'radio-tile-group')

  element.div('input-container' + id, '#radio-tile-group' + id, 'input-container')

  element.input(name, 'radio', '', '#input-container' + id, value, 'radio-button', id,)

  element.div('radio-tile' + id, '#input-container' + id, 'radio-tile')

  element.div('icon' + id, '#radio-tile' + id, 'icon bop-icon')

  if (imgsrc) {
    element.image('', imgsrc, '#icon' + id, 'ico-img')
  }

  element.label(value, '#radio-tile' + id, 'radio-title-label')


}







element.checkbox = (id, parent, value, name, imgsrc) => {




  element.div('radio-tile-group' + id, parent, 'radio-tile-group')

  element.div('input-container' + id, '#radio-tile-group' + id, 'input-container')

  element.input(name, 'radio', '', '#input-container' + id, value, 'radio-button', id,)

  element.div('radio-tile' + id, '#input-container' + id, 'radio-tile')

  element.div('icon' + id, '#radio-tile' + id, 'icon bop-icon')

  if (imgsrc) {
    element.image('', imgsrc, '#icon' + id, 'ico-img')
  }

  element.label(value, '#radio-tile' + id, 'radio-title-label')


}







element.label = function (text, parent, classname) {
  var e = document.createElement('label')
  e.className = classname
  e.textContent = text
  e.title = text
  if (!text) {
    e.id = parent.substring(1) + 'label'

  } else {

    e.id = text.split(' ').join('')
  }
  e.setAttribute('for', parent.substring(1))
  document.querySelector(parent).appendChild(e)



}





element.a = (href,target,parent) => {

var e = document.createElement('a')
if(href){
  e.href = href
}

if(target){
  e.target = target
}
document.querySelector(parent).appendChild(e)

}


element.lottie = (url,parent) => {
  if(!json.lottie){
    import('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')
    json.lottie = true;
  }
var e  = document.createElement('lottie-player')
e.src = url
e.setAttribute('background','transparent')
e.setAttribute('speed','1')
//e.setAttribute('controls','false')
e.setAttribute('autoplay','true')
e.setAttribute('style','style=width:300px;height:300px;')
document.querySelector(parent).appendChild(e)
}



element.div = function (id, parent, classname, text, setattribute) {
  var e = document.createElement('div')
  if (id) {
    e.id = id

  }
  if (classname) {
    e.className = classname;
  } else {
    e.classname = id;
  }
  if (!id && !classname) {
    var obj = parent.split('#').join('')

    e.className = obj + 'f'
  }
  if (text) {
    e.innerHTML = text;
  }

  if (setattribute) {
    e.attribute
  }
  if (parent == 'body') {
    document.body.appendChild(e)

    var name = e.tagName
    json[name] = id

  } else {


    document.querySelector(parent).appendChild(e)

    var name = e.tagName
    json[name] = id


  }
}
element.span = function (id, parent, text) {
  var e = document.createElement('span')
  e.id = id;
  e.textContent = text
  document.querySelector(parent).appendChild(e)

  var name = e.tagName
  json[name] = id

}
element.image = function (id, src, parent, classname) {
  var e = document.createElement('img')
  if (id) {
    e.id = id;

  }
  if (src) {
    e.src = src;
  }
  if (classname) {
    e.className = classname;
  }
  document.querySelector(parent).appendChild(e)

  var name = e.tagName
  json[name] = id

}
element.ul = function (id, parent, classname) {
  var e = document.createElement('ul')
  e.id = id;

  if (classname) {
    e.className = classname;
  }
  if (parent) {
    tag.parent = parent
    document.querySelector(parent).appendChild(e)


    var name = e.tagName
    json[name] = id
  }
},


  element.footer = function (classname, id) {
    var x = document.createElement('footer')
    if (id) {
      x.id = id;
    }
    if (classname) {
      x.className = classname;
    }
    document.getElementsByTagName('body')[0].appendChild(x)


  },

  element.tag = function (ele, id, parent, text, attribute, clasname) {
    var x = document.createElement(ele)
    if (id) {
      x.id = id;

    }
    if (text) {
      x.textContent = text;
    }
    if (attribute) {
      x.setAttribute(attribute)
    }
    if (clasname) {
      x.className = clasname
    }
    if (parent) {
      document.querySelector(parent).appendChild(x)
    }

  },

element.li = function (id, text, parent, next, param, classname) {

  var e = document.createElement('li')
  if (id) {
    e.id = id;
  }
  if (text) {
    e.textContent = text;
  }
  if (classname) {
    e.className = classname;
  }
  e.addEventListener('click', function () {
    e.setAttribute('active', 'true')
    var value = this.id;
    
    var parent = this.parentNode.id;

    _dat[parent] = value;
    //m++
    var i = 0;
    if (next) {
      tag.current = current = [next]

      page[next](param)
      tag.parent = tag.current[i]
      //this.parentNode.remove();

      i++
    }
  })
  form[id] = id
  document.querySelector(parent).appendChild(e)

  var name = e.tagName
  json[name] = id

}



element.range = (min, max, name) => {
  json[name] = []
  for (var i = min; i < max; i++) {
    json[name].push(i)
  }
}




element.range_desc = (min, max, name) => {
  json[name] = []
  for (var i = max; i > min; i--) {
    json[name].push(i)
  }
}






json.delete = (ob) => {
  delete _dat[ob]

}

page.submit = (url,postdata,next) => {


  postdata['functions'] = 'post'
  postdata['code'] = track.code

    var c = [
    "address",
    "city",
    "zip",
    "email",
    "first",
    "last",
    "phone",
    "control",
    "code"
  ]
  c.forEach(e =>{
    if(postdata[e]){
      post[e] = postdata[e]
    }

  })






  page.post(url, post,'',next)

}










element.rootVAR = function (e) {
  // append 'px' to the end of spacing and blur variables
  const suffix = (this.id === 'base' ? '' : 'px');
  document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}


page.mouseTrack =  ()=> {
  var i = 0;
  document.addEventListener('click', function (e) {
    i++

    var position = 'pos' + i
    track[position] = e.screenX + ' X ' + e.screenY;

    var x = document.getElementsByTagName('input')
    if (x) {
      for (var s = 0; s < x.length; s++) {
        var name = x[s].name;
        track[name] = x[s].value
      }
    }
  })





}








  page.background = (folder,) =>{
    var i = 0;

page.image(folder,'change')
    page.change = () => {
      var x = document.getElementsByTagName('body')[0]

      x.style.backgroundImage = 'url(' + image[i] + ')'
      i = (i + 1) % image.length;
    }
    setInterval(page.change, 10000);
  },









element.text = function (id, text) {
  document.querySelector(id).textContent = text;
}



page.remove = (elem) => {
  if (document.querySelector(elem)) {
    document.querySelector(elem).remove()
  }
}

page.removeChildren = (id) => {
  if (document.querySelector(id)) {
    let element = document.querySelector(id);

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}










const isNumericInput = (event) => {
  const key = event.keyCode;
  return ((key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    (
      // Allow Ctrl/Command + A,C,V,X,Z
      (event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
};

const enforceFormat = (event) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
  var name = this.name
  track[name] = this.value
};

const formatToPhone = (event) => {

  var name = this.name
  track[name] = this.value
  if (isModifierKey(event)) { return; }

  // I am lazy and don't like to type things more than once
  const target = event.target;
  const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) { target.value = `(${zip}) ${middle} - ${last}`; }
  else if (input.length > 3) { target.value = `(${zip}) ${middle}`; }
  else if (input.length > 0) { target.value = `(${zip}`; }
};










page.refresh = (url,res,interval) =>{
   
setInterval(function () {
 page.fetch(url,res)
 console.log(url)
}, interval);

}



page.slide = (id, parent, duration, folder) => {
  tag.id = id
  tag.parent = parent

  var obj = parent.split('#').join('')
  json[obj] = []

  element.div(id, parent)

  fetch(folder)
    .then(res => res.text())
    .then(text => {

      var doc = document.createElement("html");
      doc.innerHTML = text;
      var links = doc.getElementsByTagName("a")

      for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href").match(/\.(jpe?g|png|gif)$/)) {
          json[obj].push(links[i].getAttribute("href"));
        }
      }

      element.div('container', '#' + tag.id, 'dsd')


    }).then(function () {



      for (var i = 0; i < json[obj].length; i++) {
        if(track.log){

        console.log(folder + '/'+ json[obj][i])
        }
        // element.div('#container','mySlide')
        var img = folder + '/' + json[obj][i]
        element.image('', img, '#container', 'mySlide')

      }
    }).then(function () {
      var slideIndex = 0;
      function showSlides() {
        var i;
        json.slides = document.querySelectorAll(".mySlide");
        for (i = 0; i < json.slides.length; i++) {
          json.slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > json.slides.length) {
          slideIndex = 1;
        }

        json.slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, duration); // Change image every 2 seconds
      }
      showSlides()
    })


}











page.marquee = (parent, folder) => {
  json.parent = parent;

  page.image(folder)
  page.time('prep', 100)
  page.prep = () => {
    element.div('marquee', json.parent, 'marquee')
    element.ul('marquee-content', 'marquee', 'marquee-content')
    var i;
    for (var i = 0; i < images.length; i++) {
      element.li('image' + i, '', 'marquee-content')
      element.image('', images[i], 'image' + i)
    }
    slideit()
  }
  function slideit() {

    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }
}




page.li = document.createElement('li')
page.ul = document.createElement('ul')
page.div = document.createElement('div')
page.img = document.createElement('img')
page.form = document.createElement('form')



page.appendchild = (parent, child) => {
  document.querySelector(parent).appendChild(child)
}








page.image = (folder, next) => {

  fetch(folder)
    .then(res => res.text())
    .then(text => {



      var doc = document.createElement("html");
      doc.innerHTML = text;
      var links = doc.getElementsByTagName("a")
      json.imagesUrl = folder
      for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href").match(/\.(jpe?g|png|gif)$/)) {
          image.push(links[i].getAttribute("href"));
        }
        json.image = image
      }



    }).then(function () {
      if (next) {
        page[next]()
      }
    })

},








  //section.bar.animate(.2) to animate
  page.progress = (parent, color, size, container_inside_progress, percentage, textcolor, type, heightLevel) => {
    if (!heightLevel) {
      heightLevel = 25
    }
    if (!container_inside_progress) {
      container_inside_progress = 'container_inside_progress'
    }
    percentage = percentage.split('.').join('')
    style[container_inside_progress] = {
      width: '160px',
      margin: 'auto',
      background: 'white',
      borderRadius: '50%',
      height: '160px',
      top: '-' + heightLevel + 'px',
      position: 'relative',
      boxShadow: '#000000a8 0rem 0rem 0.5rem',
      WebkitFontSmoothing: 'antialiased'
    }

    element.div(container_inside_progress, parent)

    if (type || type == 'Line') {
      var jsfile = 'progressbar.js'
    } else {
      var jsfile = 'progressbar.js'

    }
    // import('/scr/'+jsfile).then(function(){    
    import('https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.1.0/progressbar.js').then(function () {
      page.progressbar = new ProgressBar[type]('#' + container_inside_progress, {
        strokeWidth: size,
        easing: 'easeInOut',
        // duration: duration,
        color: color,
        trailColor: '#eee',
        trailWidth: size,
        svgStyle: { width: '100%', height: '100%' },

        text: {
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: textcolor,
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: true
        },
        from: { color: '#FFEA82' },
        to: { color: '#ED6A5A' },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + ' %');
        }
      })


    }).then(function () {
      page.progressbar.animate('.' + percentage)
      if (style != 'Line') {
        page.style('#' + container_inside_progress, style[container_inside_progress])
      }

    })


  }





page.time = (current, next, time_miliseconds,) => {
  page[current]()
  setTimeout(function () {

    page[next]();
  }, time_miliseconds)

}





















element.svg = (parent, box, classname, width, height) => {

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttribute('viewBox', box)
  svg.setAttribute('class', classname)
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  svg.width = width


  if (!height) {
    svg.height = width
  } else {
    svg.height = height
  }


  document.querySelector(parent).appendChild(svg)



}




























page.address_fields = (parent, next) => {
  element.div('street_add', parent)

  element.div('street', '#street_add')
  element.label('Address', '#street')
  element.input('street-address', 'text', 'Street address', '#street')

  element.div('sta', '#street_add')

  element.label('State', '#sta')
  element.input('state', 'text', 'State', '#sta', 'FL')

  element.div('zip', '#street_add')
  element.label('Zip code', '#zip')
  if (_dat.zip) {
    var elem = document.querySelector("#state");
    // it's a good idea to check whether the element exists
    if (elem != null && elem != undefined) {
      elem.disabled = "disabled";
    }
    element.input('postal-code', 'text', 'Zip code', '#zip', _dat.zip)
  } else {

    element.input('postal-code', 'text', 'Zip code', '#zip')
  }
  if (next) {
    element.li(next, next, '#stree_add', page.check('input', next))
  }
}



page.contact = (parent, id, classname) => {

  if (!id) {
    id = 'contact'
  }
  if (!classname) {
    classname = id
  }
  element.div(id, parent)

  element.div('first-container', '#' + id)
  element.label('First name', '#first-container')
  element.input('fname', 'text', 'First name', '#first-container', '', classname)

  element.div('_last', '#' + id)
  element.label('Last name', '#_last')
  element.input('lname', 'text', 'Last name', '#_last', '', classname)

  element.div('_phone', '#' + id)
  element.label('Phone number', '#_phone')
  element.input('phone', 'number', 'Phone number', '#_phone', '', classname)

  element.div('_email', '#' + id)
  element.label('Email address', '#_email')
  element.input('email', 'email', 'Email address', '#_email', '', classname)
  //page.style(input)

  //document.querySelector(parent > id > +'div >input').setAttribute('stile',page.s)

}










action.split = (objName, data_to_split, count) => {
  var name = objName
  var name1 = objName + 1
  json[name] = []
  json[name1] = []
  json[name] = data_to_split.slice(0, count).reverse()
  json[name1] = data_to_split.slice(count).reverse()
}






element.class = (id, classname) => {
  document.querySelector(id).setAttribute('class', classname)
}



element.bar = (parent, color, backgroundcolor, speed, next, time_miliseconds, height) => {
  if (!height) {
    height = '25px'
  }
  background = backgroundcolor.split('#').join('')
  forground = color.split('#').join('')

  element.div(background, parent)
  element.div('bar' + forground, '#' + background)
  var e = document.querySelector('#bar' + forground)
  var s = document.querySelector('#' + background)
  e.style.width = '1%',
    e.style.height = height + 'px',
    e.style.backgroundColor = color
  e.style.transition = 'ease-in-out 1s'
  s.style.width = '100%',
    s.style.backgroundColor = backgroundcolor


  var i = 0;
  page.move = () => {

    if (i == 0) {
      i = 1;
      var elem = document.querySelector('#bar' + forground);
      var width = 1;
      var id = setInterval(frame, speed);

      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;

          elem.style.width = width + "%";

        }
      }
    }
  }
  if (next) {
    page.time('move', next, time_miliseconds)
  }
}






function css(a) {
  a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
  json.o = []
  for (var i = 0; i < document.styleSheets.length; i++) {


    for (var s = 0; s < document.styleSheets[i].cssRules.length; s++) {


      console.log(document.styleSheets[i].cssRules[s].cssText);
    }
  }

}

function getcss(id) {
  json.css = []
  var a = document.querySelector(id)
  var s = '';
  var o = getComputedStyle(a);
  for (var i = 0; i < o.length; i++) {
    json.css.push(o[i] + ':' + o.getPropertyValue(o[i]) + ';');
  }

}




page.slideold = (id, parent, duration, folder, next) => {
  tag.id = id
  tag.parent = parent

  var obj = parent.split('#').join('')
  json[obj] = []

  element.div(id, parent)

  fetch(folder)
    .then(res => res.text())
    .then(text => {

      var doc = document.createElement("html");
      doc.innerHTML = text;
      var links = doc.getElementsByTagName("a")

      for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href").match(/\.(jpe?g|png|gif)$/)) {
          json[obj].push(links[i].getAttribute("href"));
        }
      }

      element.div('mkd', '#' + tag.id, 'dsd')


    }).then(function () {



      for (var i = 0; i < json[obj].length; i++) {
        var img = folder + '/' + json[obj][i]
        element.image('', img, '#mkd', 'mySlide')

      }
    }).then(function () {
      var slideIndex = 0;
      function showSlides() {
        var i;
        json.slides = document.querySelectorAll(".mySlide");
        for (i = 0; i < json.slides.length; i++) {
          json.slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > json.slides.length) {
          slideIndex = 1;
        }

        json.slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, duration); // Change image every 2 seconds
      }
      showSlides()
    }).then(function () {
      if (next) {
        page[next]()
      }
    })






}







page.css = () => {

  var spin = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }



  var spin_after = {
    content: '""',
    width: '80px',
    height: '80px',
    border: '2px solid #f3f3f3',
    borderTop: '3px solid #2f9ee9',
    borderRadius: '100%',
    willChange: 'transform',
    animation: 'spin 1s infinite linear'
  }


  var style = {
    width: '1px',
    height: '1px',
    backgroundColor: 'red',
    transform: 'rotateZ(45deg)',
  }
  var styleToString = (style) => {
    return Object.keys(style).reduce((acc, key) => (
      acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
    ), '');
  };


}

page.delayDiv = (id, parent, text, time) => {

  setTimeout('createBlock', time)
  page.createBlock = () => {
    element.div(id, parent, text)
  }
}

page.timeout = (next, time, parm1, parm2, parm3) => {

  if (parm1) {
    setTimeout(page[next], time, parm1, parm2, parm3)
  } else {
    setTimeout(page[next], time)
  }


  json.time = parseInt(json.time) + parseInt(time)

}


page.spin = () => {

  var spinner = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }



  var spinner_after = {
    content: '""',
    width: '80px',
    height: '80px',
    border: '2px solid #f3f3f3',
    borderTop: '3px solid #2f9ee9',
    borderRadius: '100%',
    willChange: 'transform',
    animation: 'spin 1s infinite linear'
  }







  var style = {
    width: '1px',
    height: '1px',
    backgroundColor: 'red',
    transform: 'rotateZ(45deg)',
  }
  var styleToString = (style) => {
    return Object.keys(style).reduce((acc, key) => (
      acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
    ), '');
  };


}





page.style = (id, css) => {
  page.styleToString = (style) => {
    return Object.keys(style).reduce((acc, key) => (
      acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
    ), '');
  };
  document.querySelector(id).setAttribute('style', page.styleToString(css))
}




page.script = (script, next) => {
  var _id = script.split('.').join('')
  var _id = _id.split('/').join('')



  if (json[_id] != _id) {

    json[_id] = _id



    import(script).then(() => {
      console.log('Loaded')

      if (next) {
        page[next]()
      }
    })
  } else {
    var hd = script.split(' ').join('')
    var hd = hd.split('/').join('')
    var hd = hd.split('.').join('')

    if (document.querySelector('#' + hd)) {
      var js = document.createElement('script');
      js.type = 'text/javascript';
      js.src = script;
      js.id = hd

      document.head.appendChild(js);
    }
    if (next) {
      page[next]()
    }
  }

}



page.check = (tagname, next) => {

  var e = document.getElementsByTagName(tagname)
  for (var i = 0; i < e.length; i++) {
    if (e[i].value == '') {
      alert('Please type ' + e[i].placeholder.toLowerCase())
      e[i].focus()
      break;
    } else {
      page[next]()
      break
    }
  }

}


page.modal = (parent, next, remove, close_button) => {
  json.next = next
  var modal = {}
  modal.s = document.querySelector(parent).parentElement

  if (!document.querySelector('#modal-container')) {

    element.div('cot_mod', parent)
    element.div('modal', '#cot_mod')


    element.div('modal-title', '#modal')
    element.div('modal-body', '#modal')
    element.div('modal-footer', '#modal')


  }
  if (next) {
    page[next]()
  }
  //


  if (close_button) {
    element.div('modal-x', '#modal-footer', '', close_button)
    document.querySelector('#modal-x').addEventListener('click', function () {
      document.querySelector('.elementor-element-c634bea').setAttribute('style', 'display:block;')

      // s.setAttribute('style', 'display:none;')
      page.remove(remove)

    })
  }


}








page.post = (url, dat, name, next) => {


  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({ search: dat }),
  }).then(d => {
    return d.json()

  }).then(d => {
    json[name] = d
    if (track.log) {
      console.log('Success:' + d);
    }

  }).then(d => {
    if (next) {
      page[next]()
    }

  })
    .catch((error) => {
      if(track.log){
       console.error('Error:' + error);
      }
    })
    

}




page.headers = () => {
element.link('apple-touch-icon','','180x180','./img/apple-touch-icon.png')
element.link('icon','image/png','32x32','./img/favicon-32x32.png')
element.link('icon','image/png','16x16','./img/favicon-16x16.png')
element.link('manifest','','','./img/site.webmanifest')

}



element.font = () =>{

import('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif']
  }
});
}

element.jquery = () =>{
  import('https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js')
}



element.fade = (div) => {

  element.style(`
  @keyframes show {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }`)
  document.querySelector(div).style.animation = 'show .5s ease-in-out'

}


animation.div = (div, animationName) => {


  page.myPromise = () => {
    document.querySelector(div).classList.add(animationName);

    setTimeout(() => {
      document.querySelector(div).classList.remove(animationName)

    }, 300);
  };

  page.myPromise()

  



}



page.ip = () => {
  

  page.fetch('https://ip-api.io/api/json','ip','exit')

}




  page.exit = () => {
  console.log('hello')

  track.subj = 'Exit'
  track.control = 'post'
  var url = json.postUrl
  document.addEventListener('mouseleave', e=>{
    if(!json.sent){
    page.post(url, track)
    json.sent = 'sent'
    }
})

document.addEventListener('visibilitychange', e=>{
    if (document.visibilityState === 'visible') {
  //report that user is in focus
   } else {
    page.post(url, track)

   }  
})

}



page.track = (url)=>{
  json.postUrl = url
  if (!track.code) {
    track.code = firstPath
  }
  if(!track.subj){
    track.subj = 'landing'
    }
    track.control = 'post'
    if (!track.page) {
      track.page = firstPath
    }
    
    page.post(json.postUrl, track)
    page.ip()
}



document.addEventListener("DOMContentLoaded", function (event) {
  //domain = _dat.domain.substring(0, _dat.domain.lastIndexOf("."))
  domain = track.domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('.')[0]
import('./content.js')

})

page.path = () => {

  if (firstPath) {
    _dat.selection = firstPath;
    element.script('/script/content.js')
    element.css('/css/vsdg-style.css')
    element.script('/script/' + firstPath + '.js')
    element.css('/css/' + firstPath + '.css')

  }
}
if(!page.track){
console.clear()
}
console.log('%cDeveloped by | David Rodriguez | https://instagram.com/vsdg_group | https://vsdg.net','color: #999; font-size: 20px');
