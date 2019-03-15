import * as fs from 'fs'
import * as path from 'path'
import { watch as chokidar } from 'chokidar'
import build from './build'

export default function watch (entry: string, dist: string, dir: string) {
  const watchTarget = path.resolve(process.cwd(), dir)
  if (!fs.existsSync(watchTarget)) {
    throw new Error('Watch target director does not exist.')
  }

  console.log('Start watching ' + watchTarget)
  const watcher = chokidar(watchTarget)
  watcher
    .on('ready', () => {
      build(entry, dist)
      console.log(`Output bundle: ${ path.resolve(process.cwd(), dist) }`)
    })
    .on('error', (error: Error) => {throw error})
    .on('add', () => {
      build(entry, dist)
    })
    .on('addDir', () => {
      build(entry, dist)
    })
    .on('change', () => {
      build(entry, dist)
      console.log(`Output bundle: ${ path.resolve(process.cwd(), dist) }`)
    })
    .on('unlink', () => {
      build(entry, dist)
      console.log(`Output bundle: ${ path.resolve(process.cwd(), dist) }`)
    })
    .on('unlinkDir', () => {
      build(entry, dist)
      console.log(`Output bundle: ${ path.resolve(process.cwd(), dist) }`)
    })
}
