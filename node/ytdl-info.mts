import fs from 'fs'
import ytdl from 'ytdl-core';

const videoId = 'ua-CiDNNj30'

ytdl.getInfo(videoId).then((result: any) => {
  fs.writeFileSync(`${result.videoDetails.title}.json`, JSON.stringify(result, undefined, 1), 'utf-8')
  console.log(result.videoDetails.title)
}).catch((error: Error) => console.log(`error`, error))
