import getNestedFolders from './getNestedFolders'

const folders: string[] = []

getNestedFolders('/home/shubham/Documents/sample2', folders)
console.log(`folders`, folders.length)