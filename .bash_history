docker run -v liteseed:/data edge generate
sudo apt update -y && sudo apt upgrade -y
sudo apt install docker.io -y
git clone https://github.com/liteseed/edge
cd ./edge
docker build -t edge .
sudo docker volume create liteseed
docker run -v liteseed:/data edge generate
docker run -v liteseed:/data edge migrate
screen -S liteseed
docker run -v liteseed:/data edge balance
screen -r
sudo apt install -y certbot nginx
sudo certbot certonly --manual --preferred-challenges dns --email cmdexe66@gmail.com -d liteseed.cmdexe1.xyz
sudo nano /etc/nginx/sites-available/default
sudo nginx -t
sudo service nginx restart
sudo docker run -v liteseed:/data edge stake -u "liteseed.cmdexe1.xyz"
sudo docker run -v liteseed:/data edge balance
screen -r
cd edge
docker build -t edge .
sudo docker run -p 8080:8080 -v liteseed:/data edge start
cd ./edge
cd
cd ./edge
sudo docker run -p 8080:8080 -v liteseed:/data edge start
cd
cd edge
gitpull
cd
screen -r
sudo docker run -v liteseed:/data edge balance
screen -r
df -h
screen -r
cd /var/lib/docker/volumes/liteseed/_data
ls
signer.json
nano signer.json
screen -r
sudo docker run -v liteseed:/data edge balance
sudo docker run -v liteseed:/data edge stake -u "liteseed.cmdexe1.xyz"
screen -r
df -h
screen -S titanedge
df -h
sudo apt update
sudo apt install nodejs npm -y
df -h
mkdir oasis
cd oasis
nano update_token.js
nano oasis_terminal.js
node update_token.js
cd
screen -r
screen -S oasis
df -h
screen -r
screen -r titanedge
screen -r
screen -r liteseed
df -h
screen -r
screen -r titanedge
df -h
screen -r
screen -r titanedge
