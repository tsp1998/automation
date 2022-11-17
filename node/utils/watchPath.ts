import fs, { WatchListener } from 'fs'

export default function watchPath(filePath: string, callback: WatchListener<string>): boolean {
  try {
    fs.watch(filePath, callback)
    return true
  } catch (error) {
    return false
  }
}
