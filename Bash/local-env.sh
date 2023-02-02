wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi



cd /var/www/html


sudo wp core download  --allow-root
sudo wp core config --dbname=vsdg --dbuser=vsdg --dbpass=vsdg --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=html --title=html --admin_user=adnin --admin_password=password --admin_email=info@vsdg.net --allow-root


  sudo chmod g+w /var/www/html/wp-content
  sudo chmod -R g+w /var/www/html/wp-content/themes
  sudo chmod -R g+w /var/www/html/wp-content/plugins




