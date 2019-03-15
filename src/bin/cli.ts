import * as commander from 'commander'
const pkg = require('../../package.json')
import build from '../build'
import watch from '../watch'

commander
  .version(pkg.version)
  .description("Bundle multiple swagger files")
  .command("build <file>")
  .option("-w, --watch <dir>", "Watch your swagger directory's changes")
  .option("-o, --output <path>", "Output file")
  .action((file: string, options: { watch?: string, output?: string }) => {
    try {
      if (!options.output) {
        throw new Error('Option --output is required')
      }
      if (!options.watch) {
        build(file, options.output)
      } else {
        watch(file, options.output, options.watch)
      }
    } catch (e) {
      console.error(e)
      process.exit(2)
    }
  })

commander.parse(process.argv)
