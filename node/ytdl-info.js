const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')
const readline = require('readline');

const dataDir = path.join(__dirname, 'data')

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = (question) => new Promise(resolve => {
  rl.question(question, (answer) => {
    resolve(answer)
  });
})


const main = async () => {
  const videoId = await input('Enter Video ID: ')

  try {
    const result = await ytdl.getInfo(videoId)
    const videos = []
    const { formats } = result
    for (let i = 0; i < formats.length; i++) {
      try {
        const format = formats[i];
        const { mimeType, width, height, fps, url, audioBitrate } = format
        videos.push({ type: mimeType, width, height, fps, url, audioBitrate })
        console.log(`${i}. ${width} x ${height} | fps: ${fps} | audioBitrate: ${audioBitrate} | ${mimeType}`)
      } catch (error) {
        console.log(`error`, error)
      }
    }

    fs.writeFileSync(
      path.join(dataDir, `${result.videoDetails.title}.json`),
      JSON.stringify(videos, undefined, 1),
      // JSON.stringify(formats, undefined, 1),
      'utf-8'
    )
    
    const videoQualityIndex = await input('Choose Quality: ')
    const url = videos[videoQualityIndex].url
    console.log(url)
    const clipboardy = (await import('clipboardy')).default;
    clipboardy.writeSync(url);
  } catch (error) {
    console.log(`error`, error)
  }

  rl.close()
}

main()

