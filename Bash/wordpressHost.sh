

#First update
sudo apt-get update
#Install lamp
sudo apt install lamp-server^ php mariadb-server mariadb-client
sudo /etc/init.d/mysql start
#Set firewall
sudo ufw app list
sudo ufw allow in "Apache"
sudo ufw app info "Apache Full"
sudo systemctl restart apache2

#set php in apache module 
echo "<IfModule mod_dir.c>" > ~/dir.conf
echo  DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm >> ~/dir.conf
echo "</IfModule>" >> ~/dir.conf
sudo mv ~/dir.conf /etc/apache2/mods-enabled/dir.conf

#Enable PHP module
sudo a2enmod php
#restart
sudo systemctl restart apache2

#Create Site directory
mkdir /var/www/$1
#Set directory permissions
sudo chown -R $USER:$USER /var/www/$1
sudo chgrp -R www-data /var/www/$1
sudo find /var/www/$1 -type d -exec chmod g+rx {} +
sudo find /var/www/$1 -type f -exec chmod 755 {} +



#Create virtual host
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
  
  #Enable virtual host
  sudo a2ensite $1

#Add host name to Hostfile
  cp /etc/hosts hosts
  echo "127.0.0.1 $1" >>hosts
  echo "127.0.0.1 localhost.localdomain localhost. $1 $1." >>hosts
  sudo mv hosts /etc/
sudo a2dissite 000-default

#restart apache
 systemctl reload apache2
 service apache2 restart

 #Install certbot and get cert
 sudo apt install certbot python3-certbot-apache
 sudo certbot --apache -d $1 -d www.$1 --non-interactive --agree-tos --no-redirect -m webmaster@$1

sudo mysql -uroot<<MYSQL_SCRIPT
CREATE DATABASE vsdg;
CREATE USER 'vsdg'@'%' IDENTIFIED BY 'vsdgv';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'vsdgv';
GRANT ALL PRIVILEGES ON vsdg.* TO 'vsdg'@'%';
MYSQL_SCRIPT


#Download wordpress CLI
wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi


#Go into directory to perform the wordpress installation
cd /var/www/$domain
sudo wp core download  --allow-root
sudo wp core config --dbname=vsdg --dbuser=vsdg --dbpass=vsdgv --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=$domain --title=$1 --admin_user=admin --admin_password=$1.password --admin_email=admin@$1 --allow-root