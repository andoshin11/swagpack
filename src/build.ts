import * as path from 'path'
const merger = require('swagger-merger')

export default function build(entry: string, dist: string) {
  const input = path.resolve(process.cwd(), entry)
  const output = path.resolve(process.cwd(), dist)

  merger({ input, output }).catch((err: Error) => console.log(err))
}
