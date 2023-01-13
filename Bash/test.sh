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

  sudo mv hosts /etc/

  --apache -d vsdg.net -d www.vsdg.net --non-interactive --agree-tos --no-redirect -m vsdg@vsdg.net





  
if [ $(dpkg-query -W -f='${Status}' sendmail-bin 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install sendmail-bin;
  fi
  if [ $(dpkg-query -W -f='${Status}' mailutils 2>/dev/null | grep -c "ok installed") -eq 0 ];
  then
    yes | sudo apt install mailutils;
  fi
