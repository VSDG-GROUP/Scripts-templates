

if [ $(dpkg-query -W -f='${Status}' sendmail-bin 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install sendmail-bin;
  fi
  if [ $(dpkg-query -W -f='${Status}' mailutils 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install mailutils;
  fi

sudo apt -y install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt install lamp-server^ php7.4
sudo apt-get install -y php7.4-cli php7.4-json php7.4-common php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-xml php7.4-bcmath
            sudo ufw app info "Apache Full"
        sudo systemctl restart apache2
echo "<IfModule mod_dir.c>" > ~/dir.conf
              sudo   echo  DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm >> ~/dir.conf
            sudo echo "</IfModule>" >> ~/dir.conf
            sudo mv ~/dir.conf /etc/apache2/mods-enabled/dir.conf
          sudo systemctl restart apache2
    sudo a2enmod php

    mkdir /var/www/$1

          sudo chgrp -R www-data /var/www/$1
  sudo find /var/www/$1 -type d -exec chmod g+rx {} +
    sudo find /var/www/$1 -type f -exec chmod 755 {} +
echo "<VirtualHost *:80>">~/$1.conf
  echo "ServerAdmin webmaster@$1">>~/$1.conf
  echo "ServerName $1" >>~/$1.conf
  echo "ServerAlias www.$1" >>~/$1.conf
  echo "DocumentRoot /var/www/$1/">>~/$1.conf
  echo 'ErrorLog ${APACHE_LOG_DIR}/error.log'>>~/$1.conf
  echo 'CustomLog ${APACHE_LOG_DIR}/access.log combined'>>~/$1.conf
  echo "</VirtualHost>">>~/$1.conf
  sudo cp ~/$1.conf /etc/apache2/sites-available/$1.conf
  rm ~/$1.conf
  sudo a2ensite $1.conf
  cp /etc/hosts hosts
  echo "127.0.0.1 $1" >>hosts
  echo "127.0.0.1 localhost.localdomain localhost. $1 $1." >>hosts
 systemctl reload apache2
 service apache2 restart
 sudo apt install certbot python3-certbot-apache
 sudo certbot --apache -d $1 -d www.$1 --non-interactive --agree-tos --no-redirect -m webmaster@$1
  sudo mv hosts /etc/

read -p "enter database user: " datuser
  read -p "enter database password: " datpass
mysql -u$datuser -p$datpass<<MYSQL_SCRIPT
CREATE DATABASE David;
CREATE USER 'David'@'localhost' IDENTIFIED BY 'davidv';
GRANT ALL PRIVILEGES ON David.* TO 'David'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT
}


wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi



sudo mkdir /var/www/$domain
cd /var/www/$domain
sudo wp core download  --allow-root
sudo wp core config --dbname=$b --dbuser=$b --dbpass=$PASS --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=$domain --title=$domain --admin_user=admin --admin_password=$b --admin_email=vsdg@vsdg.net --allow-root