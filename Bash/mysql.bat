

echo $RANDOM | base64 | head -c 20; echo >dbpass
set /p dbpss=<dbpss
sudo mysql -uroot<<MYSQL_SCRIPT
CREATE DATABASE vsdg;
CREATE USER 'david'@'%' IDENTIFIED BY 'davidv';
GRANT ALL PRIVILEGES ON vsdg.* TO 'david'@'%';
FLUSH PRIVILEGES;
MYSQL_SCRIPT