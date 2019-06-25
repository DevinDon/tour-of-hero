docker build -t tour-of-heroes-server server
docker stack deploy -c docker-compose.yml tour-of-heroes
