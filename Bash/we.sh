
sudo apt update
sudo apt install nginx
sudo service nginx restart
sudo apt-get install php7.4-cli php7.4-fpm php7.4-curl php7.4-gd php7.4-mysql php7.4-mbstring zip unzip
sudo service php7.4-fpm restart

sudo nano /etc/nginx/sites-available/default #index index.php index.html index.htm index.nginx-debian.html &fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;

sudo apt install mariadb-server mariadb-client
sudo mysql_secure_installation


sudo mysql<<MYSQL_SCRIPT
DROP DATABASE vsdg;
DROP USER david;
USE mysql;
CREATE DATABASE vsdg;
CREATE USER 'david'@'localhost' IDENTIFIED BY 'davidv';
GRANT ALL PRIVILEGES ON *.* TO 'david'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT

sudo mysql -u root
sudo mysql -u root -p
sudo mysql_secure_installation
sudo service mysql stop
sudo mysql_secure_installation
sudo service nginx restart
sudo nano /etc/nginx/sites-enabled/default
sudo service nginx restart
sudo nano /etc/php/7.4/fpm/pool.d/www.conf
sudo service nginx restart

wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi



sudo mkdir /var/www/$1
cd /var/www/$1
sudo wp core download  --allow-root
sudo wp core config --dbname=vsdg --dbuser=david --dbpass=davidv --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=$1 --title=$1 --admin_user=$user --admin_password=$password --admin_email=info@vsdg.net --allow-root


  sudo chmod g+w /var/www/$1/wp-content
  sudo chmod -R g+w /var/www/$1/wp-content/themes
  sudo chmod -R g+w /var/www/$1/wp-content/plugins