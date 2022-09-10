# Versión para Windows (falta probarlo)

@echo off

echo "Configuración de usuario | Ingrese la contraseña del usuario root del sistema operativo"
mysql "-u" "root" REM UNKNOWN: {"type":"Redirect","op":{"text":"<","type":"less"},"file":{"text":"./sql-scripts/user-setup.txt","type":"Word"}}
echo "Configuración de base de datos | Ingrese la contraseña del usuario de la base de datos (martir)"
mysql "-u" "expotec" "-p" REM UNKNOWN: {"type":"Redirect","op":{"text":"<","type":"less"},"file":{"text":"./sql-scripts/database-setup.txt","type":"Word"}}
