import fs from 'fs'
import ytdl from 'ytdl-core';

const videoId = 'ua-CiDNNj30'

ytdl.getInfo(videoId).then((result: any) => {
  const title = result.videoDetails.title
  const url = `https://www.youtube.com/watch?v=${videoId}`  
  const fileName = title.toLowerCase().replace(/ /g, '-')
  let width = result.player_response.streamingData.adaptiveFormats[0].width
  let itag = result.player_response.streamingData.adaptiveFormats[0].itag
  const adaptiveFormats = result.player_response.streamingData.adaptiveFormats
  console.log(`adaptiveFormats`, adaptiveFormats)
  for (let i = 1; i < adaptiveFormats.length; i++) {
    if (adaptiveFormats[i].width > width) {
      width = adaptiveFormats[i].width
      itag = adaptiveFormats[i].itag
    }
  }
  ytdl(url, { quality: itag })
  .pipe(fs.createWriteStream(fileName));
}).catch((error: Error) => console.log(`error`, error))