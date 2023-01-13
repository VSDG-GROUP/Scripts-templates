#!/bin/sh

d=$(date +%m-%d-%Y)

mkdir $d

directory () {
        DIR=/etc/httpd/conf.d/
            if [[ ! -d $DIR ]]; then
              DIR=/etc/apache2/sites-enabled
              fi
              grep -nRh "ServerName" $DIR | awk -FServerName '{print $2}' | sed 's/[[:space:]]//g'

}

backup-all () {
    for b in $(grep -nRhH "DocumentRoot" $DIR | awk -F: '{print $1}' | xargs echo -n)
    do
        url=$(grep -nRh "ServerName" $b | awk -FServerName '{print $2}' | sed 's/[[:space:]]//g')
          loc=$(grep -nRh "DocumentRoot" $b | awk -FDocumentRoot '{print $2}' | sed 's/[[:space:]]//g')
            if [ -z "$url" ]
              then
                url=html
                fi
                mkdir -p ~/${d}/$url
              sudo wp db export --path=$loc ~/${d}/$url/$url.sql --allow-root
          cp -r $loc/* ~/${d}/$url/
      tar -cf ~/$url.tar.gz -C ~/${d}/$url/ .
    sudo rm -r ~/${d}/$url

done
}

backup () {
  read -p "Enter site name or press enter to backup all: " domain
    if [ -z "$domain" ]
      then
        backup-all
      else
        grep -nRh "ServerName" $DIR | awk -FServerName '{print $2}' | sed 's/[[:space:]]//g'
        hostfile=$(grep -nRhH "$domain" $DIR | awk -F: '{print $1}' | head -n 1)
          domain=$(grep -nRh "ServerName" $hostfile | awk -FServerName '{print $2}' | sed 's/[[:space:]]//g')
            loc=$(grep -nRh "DocumentRoot" $hostfile | awk -FDocumentRoot '{print $2}' | sed 's/[[:space:]]//g')
              if [ -z $domain ]
            then
              domain=html
            fi
              mkdir -p ~/${d}/$domain
            sudo wp db export --path=$loc ~/${d}/$domain/$domain.sql --allow-root
              cp -r $loc/* ~/${d}/$domain/
          tar -cf ~/${d}/$domain.tar.gz -C ~/${d}/$domain/ .
sudo rm -r ~/${d}/$domain
fi
}

lamp () {
  yes | sudo apt-get update
    yes | sudo apt-get install apache2
      sudo apache2ctl configtest
        sudo systemctl restart apache2
          sudo ufw app list
            sudo ufw app info "Apache Full"
            #ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'

              #  yes | sudo apt-get install curl
                #  curl http://icanhazip.com
                  yes | sudo apt-get install mysql-server
                    mysql -e "UPDATE mysql.user SET Password = PASSWORD('davidv') WHERE User = 'root'"
                      mysql -e "DROP USER ''@'localhost'"
                        mysql -e "DROP USER ''@'$(hostname)'"
                      mysql -e "DROP DATABASE test"
                    mysql -e "FLUSH PRIVILEGES"
                  yes |  sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql
                echo "<IfModule mod_dir.c>" > ~/dir.conf
              sudo   echo  DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm >> ~/dir.conf
            sudo echo "</IfModule>" >> ~/dir.conf
            sudo mv ~/dir.conf /etc/apache2/mods-enabled/dir.conf
          sudo systemctl restart apache2
        yes | sudo apt-get install libnet-libidn-perl php-all-dev php-cgi php-cli php-common php-curl php-dev php-gd php-gmp 2> /dev/null
  sudo chgrp -R www-data /var/www/html
  sudo find /var/www/html -type d -exec chmod g+rx {} +
    sudo find /var/www/html -type f -exec chmod 755 {} +
      sudo chown -R $USER:$USER /var/www/html
        sudo apt install libapache2-mod-php7.2 libapache2-mod-php
      sudo a2enmod proxy_fcgi setenvif
    sudo a2enmod php
restart
}

ssl () {
  crtb=/usr/local/bin/certbot-auto
  if [ ! -f $crtb ]; then
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
sudo mv certbot-auto /usr/local/bin
fi
#certbot-auto --noninteractive --os-packages-only
directory
read -p "enter domain to secure or press enter for all: " domain
if [ -z "$domain" ];
then
  for b in $(grep -nRhH "DocumentRoot" $DIR | awk -F: '{print $1}' | xargs echo -n)
    do
        url=$(grep -nRh "ServerName" $b | awk -FServerName '{print $2}' | sed 's/[[:space:]]//g')
          loc=$(grep -nRh "DocumentRoot" $b | awk -FDocumentRoot '{print $2}' | sed 's/[[:space:]]//g')
          sudo certbot-auto --apache -d $url -d www.${url} --non-interactive --agree-tos --no-redirect -m webmaster@${url}
redirect
done
else
sudo certbot-auto --apache -d $domain -d www.$domain --non-interactive --no-redirect
redirect
fi
}

remove () {
domain
sudo a2dissite $domain 2>/dev/null
ETC_HOSTS=~/hosts
IP=$(hostname -I)
HOSTN=$domain
rmh=$(grep $HOSTN ~/hosts)
       if [ -z "$rmh" ];
    then
        echo "$HOSTN Found in your $ETC_HOSTS, Removing now...";
        cp /etc/hosts ~/ 2>/dev/null
        sudo sed -i".bak" "/$HOSTN/d" $ETC_HOSTS
        sudo cp $ETC_HOSTS /etc/hosts 2>/dev/null
        dat=$(sudo wp eval --path=/var/www/$domain 'echo DB_NAME;' --allow-root) 2>/dev/null
        echo "DROP DATABASE $dat;" | mysql -uroot -pdavidv 2>/dev/null

    else
        echo "$HOSTN was not found in your $ETC_HOSTS";
    fi
sudo rm -r /var/www/$domain 2>/dev/null
sudo rm -r /var/www/$domain 2>/dev/null
restart
}

host () {
  if [ -z "$domain" ]
  then
    domain
  fi
  restart
  echo "<VirtualHost *:80>">~/$domain.conf
  echo "ServerAdmin webmaster@$domain">>~/$domain.conf
  echo "ServerName $domain" >>~/$domain.conf
  echo "ServerAlias www.$domain" >>~/$domain.conf
  echo "DocumentRoot /var/www/$domain/">>~/$domain.conf
  echo 'ErrorLog ${APACHE_LOG_DIR}/error.log'>>~/$domain.conf
  echo 'CustomLog ${APACHE_LOG_DIR}/access.log combined'>>~/$domain.conf
  echo "</VirtualHost>">>~/$domain.conf
  sudo cp ~/$domain.conf /etc/apache2/sites-available/$domain.conf
  rm ~/$domain.conf
  sudo a2ensite $domain.conf
  cp /etc/hosts hosts
  echo "127.0.0.1 $domain" >>hosts
  echo "127.0.0.1 localhost.localdomain localhost. $domain $domain." >>hosts

  sudo mv hosts /etc/
}

database () {
  if [ $(dpkg-query -W -f='${Status}' pwgen 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install pwgen;
  fi
  if [ $(dpkg-query -W -f='${Status}' whois 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install whois;
  fi
  if [ $(dpkg-query -W -f='${Status}' sendmail-bin 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install sendmail-bin;
  fi
  if [ $(dpkg-query -W -f='${Status}' mailutils 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install mailutils;
  fi

  if [ $(dpkg-query -W -f='${Status}' xkcdpass 2>/dev/null | grep -c "ok installed") -eq 0 ];
    then
      yes | sudo apt install xkcdpass;
    fi



    b=$(xkcdpass -n 1)



if [[ $b =~ .*"'s"* ]]
  then
     b=$(echo $b | rev | cut -c3- | rev)
     echo "$b"
  else
     echo "$b"
  fi
  if [ -z "$b" ];
  then
  b=`pwgen -s 6 1`
  fi
  PASS=`pwgen -s 8 1`
  read -p "enter database user: " datuser
  read -p "enter database password: " datpass
mysql -u$datuser -p$datpass<<MYSQL_SCRIPT
CREATE DATABASE $b;
CREATE USER '$b'@'localhost' IDENTIFIED BY '$PASS';
GRANT ALL PRIVILEGES ON $b.* TO '$b'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT
}

redirect () {
  if [ -z "$loc" ]
  then
    domain
fi
  echo "<VirtualHost *:80>">~/$domain.conf
  echo "ServerAdmin webmaster@$domain">>~/$domain.conf
  echo "ServerName $domain" >>~/$domain.conf
  echo "ServerAlias www.$domain" >>~/$domain.conf
  echo "DocumentRoot /var/www/$domain/">>~/$domain.conf
  echo "RewriteEngine On">>~/$domain.conf
  echo 'RewriteCond %{HTTPS} !=on'>>~/$domain.conf
  echo 'RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]'>>~/$domain.conf
  echo 'ErrorLog ${APACHE_LOG_DIR}/error.log'>>~/$domain.conf
  echo 'CustomLog ${APACHE_LOG_DIR}/access.log combined'>>~/$domain.conf
  echo "</VirtualHost>">>~/$domain.conf
  sudo cp ~/$domain.conf /etc/apache2/sites-available/$domain.conf
  rm ~/$domain.conf
}

wordpress () {
  domain
  host
  database
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
a=$domain
b=${a%.*}
echo "$b"
sudo wp core install --url=$domain --title=$domain --admin_user=admin --admin_password=$b --admin_email=vsdg@vsdg.net --allow-root
sudo wp scaffold _s $b --theme_name=$b --author=VSDG --author_uri=https://vsdg.net --sassify --force --allow-root
sudo wp theme activate $b --allow-root
sudo wp site empty --yes --allow-root --quiet
sudo wp plugin delete akismet --allow-root
sudo wp plugin delete hello --allow-root
sudo wp plugin install elementor --activate --allow-root
sudo wp plugin install essential-addons-for-elementor-lite --activate --allow-root
sudo wp plugin install premium-addons-for-elementor --activate --allow-root
sudo wp plugin install recent-posts-widget-with-thumbnails --activate --allow-root
sudo wp widget delete meta-2 --allow-root
sudo wp widget delete search-2 --allow-root
sudo wp widget delete recent-comments-2 --allow-root
sudo wp widget delete archives-2 --allow-root
sudo wp widget delete categories-2 --allow-root
sudo wp search-replace 'Just another WordPress site' 'Power by VSDG' --allow-root
sudo wp plugin install addon-elements-for-elementor-page-builder --allow-root
sudo wp plugin install ht-mega-for-elementor --allow-root
sudo wp plugin install cf7-conditional-fields --allow-root
sudo wp plugin install powerpack-lite-for-elementor --allow-root
sudo wp plugin install slide-anything --allow-root
sudo wp plugin install elementor-addon-widgets --allow-root
sudo wp plugin install contact-form-7 --allow-root
sudo wp plugin install cf7-grid-layout --allow-root
sudo wp plugin install cf7-widget-elementor --allow-root
sudo wp plugin install drift --allow-root
sudo wp plugin install megamenu --allow-root
sudo wp plugin install navmenu-addon-for-elementor --allow-root
sudo sed "/wordpress.org/d" /var/www/$domain/wp-content/themes/$b/footer.php > ~/1.php
sudo sed "/WordPress/d" ~/1.php > ~/2.php
sudo cp ~/2.php /var/www/$domain/wp-content/themes/$b/footer.php
echo # BEGIN WordPress > ~/htaccess
echo        ErrorDocument 404 /index.php >> ~/htaccess
echo # END WordPress  >> ~/htaccess
}

theme () {
a=$domain
b=${a%.*}
sudo wp scaffold child-theme vsdg --parent_theme=$b --force --activate --allow-root
}

html () {
  domain
  host
  permission
}

domain () {
      domain=`cat domain`
      if [ -z "$domain" ]
      then
      grep -nRh "ServerName" $DIR | awk -FServerName '{print $2}' | sed 's/[[:space:]]//g'
      read -p "Enter Domain name: " domain
      if [[ $domain =~ .*www.* ]]
      then
         echo "Removing www in ${domain}."
         url=$(echo $domain | cut -c5-)
       echo $domain
      fi
    fi

}

transfer () {
domain
ssh -p 5857 vsdg@vsdg.gq mkdir -p ${servername}
sudo scp -P 5857 ${domain}.tar.gz vsdg@vsdg.gq:~/${servername}
sudo rm ${domain}.tar.gz

}

clone () {
  domain
  wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi
  ls | grep gz
  read -p "Enter tar name: " name
  mkdir ~/$name
  cd $name
  tar -xf ~/$name.tar.gz -C ./ .
  host
  database
  mv wp-config.php wp-config.php.old
  sudo wp config create --dbname=$b --dbuser=$b --dbpass=$PASS --allow-root
  find ./ -type f -iname "*.sql" -exec sudo wp db import {} --allow-root \;
  sudo mkdir -p /var/www/$domain
  sudo cp -a ./* /var/www/$domain/
  permission
  old=$(sudo wp option get home --allow-root)
  sudo wp search-replace "$old" "http://${domain}" --allow-root
  cd
  sudo rm -r ~/$name
}

permission () {
  sudo adduser $USER www-data
  sudo chown root:root /var/www
  sudo chown -R $USER:www-data /var/www/*
  if [ -z "$domain" ]
  then
    domain
  fi
  sudo chgrp -R www-data /var/www/$domain
  sudo chown -R www-data:www-data /var/www/$domain
  sudo find /var/www/$domain -type d -exec chmod g+rx {} +
  sudo find /var/www/$domain -type d -exec chmod g+s {} \;
  sudo find /var/www/$domain -type f -exec chmod g+r {} +
  sudo find /var/www/$domain -type f -exec chmod 755 {} +
  sudo chmod g+w /var/www/$domain/wp-content
  sudo chmod -R g+w /var/www/$domain/wp-content/themes
  sudo chmod -R g+w /var/www/$domain/wp-content/plugins
  restart
}

restart () {
if service --status-all | grep -Fq 'apache2'; then
sudo service apache2 reload
fi
if service --status-all | grep -Fq 'httpd'; then
sudo  service httpd reload
fi
if service --status-all | grep -Fq 'nginx'; then
sudo   service nginx reload
fi
}

user () {
  grep -c '^vsdg:' /etc/passwd

  if [ $? -eq 0 ]; then
      echo "user exists"
      cp s /home/vsdg/
      su vsdg
      exit
  else
    read -p "Enter tar password: " PASS
    adduser vsdg --gecos "First Last,RoomNumber,WorkPhone,HomePhone" --disabled-password --force-badname
    echo "vsdg:$PASS" | chpasswd
    usermod -aG sudo vsdg
    cp s /home/vsdg/
    su vsdg
  fi

}

clear
df -H | grep -vE '^Filesystem|tmpfs|cdrom' | awk '{ print $5 " " $1 }'
servername=$(hostname)
$1
echo "$1" | mail -s "$1" drodriguez@safeguardcasualty.com
if [ -z "$1" ]
then
  clear
echo select function
echo directory
echo backup
echo database
echo wordpress
echo permission
echo ssl
echo lamp
echo transfer
echo clone
echo restart
echo user
echo redirect
fi






read -p "Enter Domain password: " domain
read -p "Enter wordpress database name: " database
read -p "Enter wordpress database user: " user
read -p "Enter wordpress database password: " password

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
sudo a2enmod rewrite expires vhost_alias 
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
  echo "127.0.0.1 localhost.local1 localhost. $1 $1." >>hosts
  cp /etc/hosts hosts

 systemctl reload apache2
 service apache2 restart
sudo /etc/init.d/mysql start
sudo apt-get remove --purge mysql*
sudo apt-get autoremove
sudo apt-get autoclean
sudo apt-get install mysql-server mysql-client
 sudo apt install certbot python3-certbot-apache
 ln -s /var/lib/mysql/mysql.sock /tmp/mysql.sock
 service mysql start or service mysql start
 systemctl stop mysql
 sudo usermod -d /var/lib/mysql/ mysql
 systemctl start mysql
 sudo /etc/init.d/mysql start
sudo mysql<<MYSQL_SCRIPT
CREATE DATABASE David;
CREATE USER 'David'@'localhost' IDENTIFIED BY 'davidv';
GRANT ALL PRIVILEGES ON David.* TO 'David'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT



wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi



sudo mkdir /var/www/$1

  sudo chgrp -R www-data /var/www/$domain
  sudo chown -R www-data:www-data /var/www/$domain
  sudo find /var/www/$domain -type d -exec chmod g+rx {} +
  sudo find /var/www/$domain -type d -exec chmod g+s {} \;
  sudo find /var/www/$domain -type f -exec chmod g+r {} +
  sudo find /var/www/$domain -type f -exec chmod 755 {} +
  sudo chmod g+w /var/www/$domain/wp-content
  sudo chmod -R g+w /var/www/$domain/wp-content/themes
  sudo chmod -R g+w /var/www/$domain/wp-content/plugins
cd /var/www/$1
sudo wp core download  --allow-root
sudo wp core config --dbname=David --dbuser=David --dbpass=davidv --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=$1 --title=$1 --admin_user=admin --admin_password=David --admin_email=vsdg@vsdg.net --allow-root











read -p "Enter Domain : " domain
read -p "Enter wordpress database name: " database
read -p "Enter wordpress database user: " user
read -p "Enter wordpress database password: " password

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
sudo a2enmod rewrite expires vhost_alias 
    mkdir /var/www/$domain

  sudo chgrp -R www-data /var/www/$domain
  sudo chown -R www-data:www-data /var/www/$domain
  sudo find /var/www/$domain -type d -exec chmod g+rx {} +
  sudo find /var/www/$domain -type d -exec chmod g+s {} \;
  sudo find /var/www/$domain -type f -exec chmod g+r {} +
  sudo find /var/www/$domain -type f -exec chmod 755 {} +
  sudo chmod g+w /var/www/$domain/wp-content
  sudo chmod -R g+w /var/www/$domain/wp-content/themes
  sudo chmod -R g+w /var/www/$domain/wp-content/plugins
  sudo chgrp -R www-data /var/www/$domain


  
  sudo find /var/www/$domain -type d -exec chmod g+rx {} +
    sudo find /var/www/$domain -type f -exec chmod 755 {} +
echo "<VirtualHost *:80>">~/$domain.conf
  echo "ServerAdmin webmaster@$domain">>~/$domain.conf
  echo "ServerName $domain" >>~/$domain.conf
  echo "ServerAlias www.$domain" >>~/$domain.conf
  echo "DocumentRoot /var/www/$domain/">>~/$domain.conf
  echo 'ErrorLog ${APACHE_LOG_DIR}/error.log'>>~/$domain.conf
  echo 'CustomLog ${APACHE_LOG_DIR}/access.log combined'>>~/$domain.conf
  echo "</VirtualHost>">>~/$domain.conf
  sudo cp ~/$domain.conf /etc/apache2/sites-available/$domain.conf
  rm ~/$domain.conf
  sudo a2ensite $domain.conf
  cp /etc/hosts hosts
  echo "127.0.0.1 $domain" >>hosts
  echo "127.0.0.1 localhost.local1 localhost. $domain $domain." >>hosts
sudo cp /etc/hosts hosts

 sudo systemctl reload apache2
 sudo service apache2 restart
sudo /etc/init.d/mysql start
sudo apt-get remove --purge mysql*
sudo apt-get autoremove
sudo apt-get autoclean
sudo apt-get install mysql-server mysql-client
 sudo apt install certbot python3-certbot-apache
 ln -s /var/lib/mysql/mysql.sock /tmp/mysql.sock
 sudo service mysql start or service mysql start
 sudo systemctl stop mysql
 sudo usermod -d /var/lib/mysql/ mysql
 sudo systemctl start mysql
 sudo /etc/init.d/mysql start
sudo mysql<<MYSQL_SCRIPT
DROP DATABASE ${database};
DROP USER ${user};
USE mysql;
CREATE DATABASE ${database};
CREATE USER '$user'@'localhost' IDENTIFIED BY '${password}';
GRANT ALL PRIVILEGES ON *.* TO '${user}'@'localhost';
UPDATE user SET plugin='auth_socket' WHERE User='${user}';
FLUSH PRIVILEGES;
MYSQL_SCRIPT




wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi



sudo mkdir /var/www/$domain
cd /var/www/$domain
sudo wp core download  --allow-root
sudo wp core config --dbname=${database} --dbuser=${user} --dbpass=${password} --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=$domain --title=$domain --admin_user=$user --admin_password=$password --admin_email=${user}@${domain} --allow-root






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
sudo a2enmod rewrite expires vhost_alias 
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
  echo "127.0.0.1 localhost.local1 localhost. $1 $1." >>hosts
  cp /etc/hosts hosts

 systemctl reload apache2
 service apache2 restart
sudo /etc/init.d/mysql start
sudo apt-get remove --purge mysql*
sudo apt-get autoremove
sudo apt-get autoclean
sudo apt-get install mysql-server mysql-client
 sudo apt install certbot python3-certbot-apache
 ln -s /var/lib/mysql/mysql.sock /tmp/mysql.sock
 service mysql start or service mysql start
 systemctl stop mysql
 sudo usermod -d /var/lib/mysql/ mysql
 systemctl start mysql
 sudo /etc/init.d/mysql start
sudo mysql<<MYSQL_SCRIPT
CREATE DATABASE David;
CREATE USER 'David'@'localhost' IDENTIFIED BY 'davidv';
GRANT ALL PRIVILEGES ON David.* TO 'David'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT



wp_com=/usr/local/bin/wp
  if [ ! -f $wp_com ]; then
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    sudo mv wp-cli.phar /usr/local/bin/wp
fi



sudo mkdir /var/www/$1
cd /var/www/$1
sudo wp core download  --allow-root
sudo wp core config --dbname=David --dbuser=David --dbpass=davidv --extra-php --allow-root <<PHP
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_MEMORY_LIMIT', '256M');
PHP

  
sudo wp core install --url=$1 --title=$1 --admin_user=admin --admin_password=David --admin_email=vsdg@vsdg.net --allow-root









CREATE DATABASE coalitiontest;
CREATE USER 'coalitiontest'@'localhost' IDENTIFIED BY 'wordpresstest';
GRANT ALL PRIVILEGES ON David.* TO 'coalitiontest'@'localhost';
FLUSH PRIVILEGES;