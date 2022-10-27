Wait I'll automate everything...

Download files in background without worry.
Created this utility cause I know the pain of waiting for download to complete.

Prerequiite:
Node - download & install nodejs
PM2 - install pm2 with => npm i -g pm2

Run:
run command => pm2 start downloader1.js
logs command => pm2 logs
monitor command => pm2 monit
process list => pm2 list
stop command => pm2 stop process id

Download files:
Paste download link in links1.txt or links2.txt file as per your downloader file

Modules:
1. downloader1 - read download links from links1.txt file and downloads files in downloader1 folder
1. downloader2 - read download links from links2.txt file and downloads files in downloader2 folder