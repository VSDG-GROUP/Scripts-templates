"use strict";

el.div('.header', 'brand');
el.create('p');
el.text("{ VSDG-GROUP }");
el.append('.brand');
el.div('.container', 'top-hero');
el.div('.top-hero', 'logo');
el.img('.logo', '/public/logo.svg');
el.par = document.querySelector('.top-hero');

el.block = function () {
  el.par.id = 'reverse';

  if (document.querySelector('.contact')) {
    document.querySelector('.contact').remove();
  }

  if (!document.querySelector('.right-block-top')) {
    el.div('.top-hero', 'right-block-top');
    el.div('.right-block-top', 'right-block');
    el.create('h1');
    el.text("Network Administration ");
    el.append('.right-block');
    el.create('h1');
    el.text("Web Development");
    el.append('.right-block');
    el.create('h1');
    el.text("Mobile Development");
    el.append('.right-block');
  }
};

el.div('.container', 'right-column');
el.ul('.right-column', 'left');
el.li('.right-column > .left', 'Connect', 'Connect');
el.btn = document.querySelector('.right-column > ul > li');
el.btn.addEventListener('click', function () {
  if (document.querySelector("body > div.container > div.top-hero > div.right-block-top")) {
    document.querySelector("body > div.container > div.top-hero > div.right-block-top").remove();
    el.btn.textContent = 'Send';
    el.par.id = 'row';
    el.ct();
  } else {
    if (document.querySelector("body > div.container > div.top-hero > div.contact")) {
      el.connect();
      document.querySelector("body > div.container > div.top-hero > div.contact").remove();
      el.btn.textContent = 'Connect';
      el.par.id = 'column';
      el.net();
    }
  } //el.contact()

}); //el.create('el.btn')
//el.class('connect')
//el.text('Connect')
//el.append('.right-column')
//el.div('.right-column','connect')
//el.div('.right-column','right-row')

el.ul('.right-column', 'social');
var se = ['Linkedin', 'Instagram', 'Dribbble', 'Github'];
se.forEach(function (elem) {
  el.li('.social', elem);
  el.img('#' + elem, '/public/' + elem + '.svg');
  el.e.addEventListener('click', function () {
    el.social(elem);
  });
}); //el.div('.right-row','social')
//el.div('.right-row','social')
//el.div('.right-row','social')
//el.div('.right-row','social')

el.div('.footer', 'bottom-row');
el.create('p');
el.text('< We bring your ideas to reality />');
el.append('.bottom-row');

el.social = function (e) {
  if (e == 'Linkedin') {
    window.open('https://www.linkedin.com/in/vsdg-group/');
    el.connect();
  }

  console.log(e);
};

el.connect = function () {
  fetch('/connect', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_json)
  }).then(function (r) {
    r.json();
  }).then(function (data) {
    console.log(data);
  });
};

el.contact = function () {
  el.par.id = 'row'; //setAttribute('style','flex-direction: row-reverse;')

  if (document.querySelector('.right-block-top')) {
    el.par.removeChild('.right-block-top');
  } //el.btn.removeEventListener('click', () => { el.contact })


  document.querySelector('.right-block-top').remove();

  if (!document.querySelector('.contact')) {
    el.div('.top-hero', 'contact');
    el.imput('text', 'Name', '.contact');
    el.imput('text', 'Email', '.contact');
    el.textArea('message', '.contact');
    el.btn.textContent = 'Send';
    el.btn.addEventListener('click', function () {
      //el.connect()
      el.btn.textContent = 'Connect';
      el.block();
    });
  }
};

el.net = function () {
  el.div('.top-hero', 'right-block-top');
  el.div('.right-block-top', 'right-block');
  el.create('h1');
  el.text("Network Administration ");
  el.append('.right-block');
  el.create('h1');
  el.text("Web Development");
  el.append('.right-block');
  el.create('h1');
  el.text("Mobile Development");
  el.append('.right-block');
};

el.ct = function () {
  el.div('.top-hero', 'contact');
  el.imput('text', 'Name', '.contact');
  el.imput('text', 'Email', '.contact');
  el.textArea('message', '.contact');
};

el.net();