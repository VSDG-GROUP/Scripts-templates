
wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi



sudo mkdir /var/www/$1
cd /var/www/$1
sudo wp core download  --allow-root
sudo wp core config --dbname=vsdg --dbuser=vsdg --dbpass=vsdg --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=$1 --title=$1 --admin_user=$user --admin_password=$password --admin_email=info@vsdg.net --allow-root


  sudo chmod g+w /var/www/$1/wp-content
  sudo chmod -R g+w /var/www/$1/wp-content/themes
  sudo chmod -R g+w /var/www/$1/wp-content/plugins

   T9ogfm#z**t!TcTslw