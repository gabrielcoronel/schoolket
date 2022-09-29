@echo off

set PATH=%PATH%;C:\Program Files\MariaDB 10.9\bin\

mysql -u root < ./sql-scripts/user-setup.txt
mysql -u expotec -p < ./sql-scripts/database-setup.txt

mkdir student_avatars
mkdir product_pictures
