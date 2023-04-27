const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);

// Input video file path
const inputFilePath = '/home/royaltsp/Public/Kisi Ka Bhai Kisi Ki Jaan 2023 Hindi 1080p HQ S-Print x264 AAC CineVood.mkv';

// Output video file path
const outputFilePath = '/home/royaltsp/Public/kbkj-trim.mp4';

const getTimeInSeconds = (hours: number, minutes: number, seconds: number): number => {
  const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  return totalSeconds;
}

// Start time of the segment in seconds
const startTime = getTimeInSeconds(1, 5, 22);

// Duration of the segment in seconds
const duration = getTimeInSeconds(1, 10, 44) - startTime;

console.log({ startTime, duration })

// Create ffmpeg command
const command = ffmpeg(inputFilePath)
  .seekInput(startTime)
  .duration(duration)
  .output(outputFilePath)
  .on('end', () => {
    console.log('Trimmed video successfully!');
  })
  .on('error', (err) => {
    console.log(`Error trimming video: ${err.message}`);
  });

// Run the command
command.run();
