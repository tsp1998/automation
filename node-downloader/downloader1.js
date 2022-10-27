const fs = require('fs')
const Downloader = require("nodejs-file-downloader");

const blackListUrls = {}

async function main() {
  const data = fs.readFileSync('links1.txt', 'utf-8')
  const links = data.split('\n')
  if (!Array.isArray(links) || !links.length) {
    return;
  }
  for (const link of links) {
    if (!link.trim()) {
      continue
    }
    const downloader = new Downloader({
      url: link,
      directory: "./downloader1", //This folder will be created, if it doesn't exist.
    });
    console.log('Downloading', link)
    try {
      const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.
      console.log("File downloaded", filePath);
      const data = fs.readFileSync('links1.txt', 'utf-8')
      fs.writeFileSync('links1.txt', data.replace(link, ''), 'utf-8')
    } catch (error) {
      blackListUrls[link] = blackListUrls[link] ? blackListUrls[link]++ : 0
      if (blackListUrls[link] === 3) { // 3tries
        fs.appendFileSync('blackListUrls1.txt', link, 'utf-8')
        delete blackListUrls[link]
      }
      console.log("Download failed", error);
    }
  }
  setInterval(() => {
    main()
  }, 1000 * 3)
}

main()