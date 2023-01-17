

echo $RANDOM | base64 | head -c 20; echo >dbpass
set /p dbpss=<dbpss
sudo mysql -uroot<<MYSQL_SCRIPT
CREATE DATABASE vsdg;
CREATE USER 'vsdg'@'%' IDENTIFIED BY 'vsdg';
GRANT ALL PRIVILEGES ON vsdg.* TO 'vsdg'@'%';
FLUSH PRIVILEGES;
MYSQL_SCRIPT