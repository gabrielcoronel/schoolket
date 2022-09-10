echo "Configuración de usuario | Ingrese la contraseña del usuario root del sistema operativo"
sudo mysql -u root < ./sql-scripts/user-setup.txt

echo "Configuración de base de datos | Ingrese la contraseña del usuario de la base de datos (martir)"
mysql -u expotec -p < ./sql-scripts/database-setup.txt
