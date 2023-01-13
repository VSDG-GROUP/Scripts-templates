mkdir $1
cd $1
npm init
npm install express

mkdir src
mkdir src/views
mkdir routes
mkdir public
mkdir public/js
mkdir public/img
mkdir public/css
touch public/css/vsdg.css
touch public/js/vsdg.js
echo "const express = require('express')">app.js
echo "var path = require('path');">>app.js

echo "const app = express()">>app.js
echo "var _dat = {};">>app.js
echo "const fs = require('fs');">>app.js
echo "let rawdata = fs.readFileSync('package.json');">>app.js
echo "let json = JSON.parse(rawdata);">>app.js
echo "var keywords = json.keywords;">>app.js
echo "_dat.title = json.name.toUpperCase()">>app.js
echo "app.set('view engine', 'pug')">>app.js
echo "app.set('views', 'src/views')">>app.js
echo "app.use(express.static(path.join(__dirname, 'src/views')))">>app.js
echo "app.use(express.static(path.join(__dirname, 'public')))">>app.js
echo "app.use('/favicon.ico', express.static('src/views/favicon.ico'));">>app.js

echo "app.get('/', (req,res) => {">>app.js
echo "res.render('index',{title:_dat.title, author: json.author, words: keywords})">>app.js
echo "})">>app.js
echo "app.listen(3000, () => console.log('Listening on port 3000'))">>app.js

npm install nodemon
npm pkg set 'scripts.start'='nodemon app.js'
npm install pug
mkdir src
mkdir src/views
mkdir public/js
mkdir public/img
mkdir public/css

echo "doctype html" > src/views/index.pug
echo "html(lang='en')">> src/views/index.pug
echo "   head">> src/views/index.pug
echo "      meta(charset='UTF-8')">> src/views/index.pug
echo "      meta(http-equiv='X-UA-Compatible', content='IE=edge')">> src/views/index.pug
echo "      meta(name='viewport', content='width=device-width, initial-scale=1.0')">> src/views/index.pug
echo "      meta(name=description content:Developer=author, Categories=words)">> src/views/index.pug
echo "      meta(name='robots' content='noindex,nofollow')">> src/views/index.pug
echo "      title=title +'IT Web Developer'">> src/views/index.pug
echo "      link(rel='stylesheet', href='css/vsdg.css')">> src/views/index.pug

echo "   body">> src/views/index.pug
#npm install @sendgrid/mail
#echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
#echo "sendgrid.env" >> .gitignore
#source ./sendgrid.env
#npm install -g pm2
#pm2 startup
#pm2 start app.js
 