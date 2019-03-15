# Swagpack
A simple CLI to bundle your swagger files.

# Install

```sh
$ yarn add swagpack
```

# How to use
Swagpack uses [swagger-merger](https://www.npmjs.com/package/swagger-merger) to bundle your swagger files.

If you want to know details about syntax and reference formats, please read the [document](https://github.com/WindomZ/swagger-merger/blob/master/README.md)

To bundle your files:

```sh
$ swagpack build entry.yml -o output.yaml
```

You can use watch mode by giving target directory path

```sh
$ swagpack build entry.yml -o output.yaml -w ./src
```

# CLI Options

```
Usage: swagpack [options] [command]

Bundle multiple swagger files

Options:
  -w, --watch <dir>       watch your swagger directory's changes
  -o, --output <path>     output file
  -V, --version           output the version number
  -h, --help              output usage information

Commands:
  build [options] <file>
```

# License
MIT
