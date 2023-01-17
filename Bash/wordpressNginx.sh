

if $1 == ""(
  goto EOF
)

if $2 == ""(
read -p 'Type database password :' $2=${2}
)

#First update
sudo apt-get update
#Install lamp
sudo apt install nginx
sudo service nginx restart

sudo apt install mariadb-server  php-fpm php-common php-mysql php-gmp php-curl php-intl php-mbstring php-xmlrpc php-gd php-xml php-cli php-zip
 
 sudo mysql -uroot<<MYSQL_SCRIPT
 ALTER USER 'root'@'localhost' IDENTIFIED BY "${2}";
 flush privileges;
MYSQL_SCRIPT


sudo service nginx restart


#Set firewall
sudo ufw app list


#Create Site directory
mkdir /var/www/$1
#Set directory permissions
sudo chown -R $USER:$USER /var/www/$1
sudo chgrp -R www-data /var/www/$1
sudo find /var/www/$1 -type d -exec chmod g+rx {} +
sudo find /var/www/$1 -type f -exec chmod 755 {} +


#Add host name to Hostfile
  cp /etc/hosts hosts
  echo "127.0.0.1 $1" >>hosts
  echo "127.0.0.1 localhost.localdomain localhost. $1 $1." >>hosts
  sudo mv hosts /etc/

#restart apache

sudo mysql -uroot<<MYSQL_SCRIPT
CREATE DATABASE vsdg;
CREATE USER 'vsdg'@'%' IDENTIFIED BY 'vsdgv';
GRANT ALL PRIVILEGES ON vsdg.* TO 'vsdg'@'%';
FLUSH PRIVILEGES;
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



sudo service nginx restart
