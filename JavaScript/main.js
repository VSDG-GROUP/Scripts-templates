

console.log('Developed by | David Rodriguez | @vsdg_group | https://vsdg.net' );

var _dat = {};
var track = {};
var json = {};
var html = {};
var images = {}
var page = {}
var tag = {}

track.agent = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(track.agent);

if ( isIE ) {
  document.body.innerHTML = '<h1>Please Update your browser or switch to chrome</h1>'
}








page.cssLink = (url) =>{
  
  var css = url.split(' ').join('')
  var css = css.split('.').join('')
  var css = css.split('/').join('')
  
      var s = document.createElement('link')
      s.rel = "stylesheet";
      s.id = css
      s.type = 'text/css';
      s.href = url;
      document.head.appendChild(s)
  
      
              
}












page.script = (script,next) => {
  var _id = script.split('.').join('')
  var _id = _id.split('/').join('')
  
  
  
  if(json[_id] != _id){
  
  json[_id] = _id
  
  
      
      import(script).then(() => { 
        console.log('Loaded')
        page[next]()
      })
      } else {
  var hd = script.split(' ').join('')
  var hd = hd.split('/').join('')
  var hd = hd.split('.').join('')
  
        if(document.querySelector('#'+hd)){
        var js = document.createElement('script');
  js.type = 'text/javascript';
  js.src = script;
  js.id = hd 
  
  document.head.appendChild(js);
        }
        page[next]()
      }
  
    }  









    page.fetch = (url,name,next,dat) => {
      fetch(url, {
        if(dat){
          body: JSON.stringify({search: dat})
          },
        
      }).then(d => {
        return d.json()
       
      }).then(d =>{
        json[name] = d
      //  console.log('Success:', d);
       if(next){
         page[next]()
       }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  






    page.post = (url,dat,name,next) =>{

      fetch(url, {
                   method: 'POST',
                   credentials: 'same-origin',
                   mode: 'same-origin',
                   headers: {
                     'Accept':       'application/json',
                     'Content-Type': 'application/json',
     
                   },
                   if(dat){
                   body: JSON.stringify({search: dat})
                   },
               }).then(d => {
                return d.json()
         
              }).then(d =>{
                json[name] = d
                console.log('Success:', d);
               if(next){
                 page[next]()
               }
              })
              .catch((error) => {
               // console.error('Error:', error);
              });
            } 
  
     
     










tag.makeid = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}









tag.id = (json_id) =>{
if(!json_id){
  json_id = (Math.random() + 1).toString(36).substring(7);
}
  json[json_id] = 'vsdg'+new Date().getTime().toString()
  return json[json_id]

}


tag.class =(json_class)=> {
  if(!json_class){
    json_class = (Math.random() + 1).toString(36).substring(7);
  }
 
json[json_class] = 'vsdg_'+Math.floor(Math.random() * 1000) + 100;
return json[json_class]
}


tag.year = () =>{

var date = new Date(); // date object
return date.getFullYear()
}


if (track.cookie){

    for(var key in track.cookie) {
      track[key] = track.cookie[key]
      
        }
  
  }

track.redi = document.referrer;
track.url = window.location.href;

track.dimentions = window.innerWidth + ' X '+ window.innerHeight;
track.string = window.location.search;
track.code = track.string.substring(1, 5)
track.domain = window.location.hostname
track.cookie = document.cookie.split(";").reduce( (ac, cv, i) => Object.assign(ac, {[cv.split('=')[0]]: cv.split('=')[1]}), {});
track.path = window.location.pathname.split('/')[1];
track.facebook = window.is_fb_loggedin
track.google = window.is_google_loggedin




 var browser = (function() {
    var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
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

track.browser=browser

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
 
    track.device='Mobile'
 } else {
   
   track.device='Desktop'
 }
page.track = (url) => {
  page.fetch('http://ip-api.com/json','ip','exit')

}

 page.exit = () => {

track.code = 'Landing'
if(!json.postUrl){
console.log('missing json.postUrl')
}
//page.post(json['postUrl'],track)
page.fetch(json['postUrl'])  


if(!track.file){
    console.log('Missing post file')
  }
 
    document.body.onmouseleave = () => {
  
      
  
  
    for(var key in _dat) {
      track[key] = _dat[key]
      
        }
    }
    var count = 0;
  setInterval(function() {
    if (count > 60) { // We check if the timer is in seconds or mins
      var time = ++count; // We get a copy of the time in 'seconds'
      time = parseInt(time / 60); // We convert it to mins
      track.timming =  ++count + 'm'
    } else { // Simmilarly we can also add a condition to check hours with s=3600
    track.timming =  ++count + 's'
    }
  }, 1000);
  
  document.addEventListener('visibilitychange', function logData() {
    
      track.code = 'Exit'
    
    //let blob = new Blob([JSON.stringify(track)]);
    if (document.visibilityState === 'hidden') {
      page.post('../script/index.php',track)
      //navigator.sendBeacon(track.file, track);
    }
  });
  
  
  
  }



  
  


          html.tag = (tag,id,classname,parent,type,text,next,value,style) => {
            var e = document.createElement(tag)
            
            if(id){
              e.id = id
            }
            
            if(classname){
              e.className = classname
            }
            if(style){
              e.setAttribute('style',style)
            }
            
            if(tag == 'input'){
              var lis = 'keyup'
              e.addEventListener('keyup',function(){
                var s = this.id
                json[s] = this.value
              })
            e.type = type
            e.name = id
            
            }
            
            
            
            
            if(tag == 'li'){
              var lis = 'click'

              e.addEventListener('click',function() {

                if(e.parentElement.id){
                  var na = e.parentElement.id
                } else {
                  var na = e.id
                }
                json[na] = e.textContent

               console.log(json[na])
              })
            }











            if(tag == 'select' || type == 'checkbox'){
              var lis = 'change'
              e.addEventListener('change',function(){
              var s = this.id
              json[s] = this.value
              console.log(this.value)
            })
            }
            










            if(next){
              e.addEventListener(lis,function(){
                page[next]()
              })
            }
            







            if (text){
              e.textContent = text
            }





            if(value){
              e.value = value
            }

          
            document.querySelector(parent).appendChild(e)
            
            
            
            
            }


            page.style = (id,css) => {
              page.styleToString = (style) => {
                  return Object.keys(style).reduce((acc, key) => (
                      acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
                  ), '');
              };
              document.querySelector(id).setAttribute('style',page.styleToString(css))
              }
              page.styleToString = (style) => {
                return Object.keys(style).reduce((acc, key) => (
                    acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
                ), '');
            };


            