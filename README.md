# Журнал выполнения операций при нахождении цистерн с СУГ

## Настройка службы
Если необходимо запустить данный проект как службу в linux, то необходимо собрать service файл и положить его в /etc/systemd/system.

Пример файла:
````
[Unit]
Description=Web-приложение для ведения журнала выполнения операций при нахождение цистерн с СУГ
After=network.target

[Service]
Type=simple
WorkingDirectory=/project/tank-lpg
EnvironmentFile=/project/tank-lpg/.env
ExecStart=/usr/bin/node /project/tank-lpg-test/server.mjs
Restart=always
RestartSec=1

[Install]
WantedBy=multi-user.target
````
После этого необходимо сделать daemon-reload, и в списке служб должна появиться служба, одноименная с файлом.

## Порядок команд для обновления приложения
1) Зайти в папку с проектом: ````cd /project/tank-lpg/````
2) Через IDE запустить команду Git → Pull
3) При необходимости загрузить пакеты: ````npm i````
4) Применить миграции: ````npm run migrate_deploy````
5) Сгенерировать клиента Prisma ORM (необходимо, если изменялись поля существующей таблицы): ````npx prisma generate````
6) Собрать проект: ````npm run build````
7) Перезапустить службу: ````sudo systemctl restart tank_lpg.service````
