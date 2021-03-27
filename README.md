# Swagpack [![npm version](https://badge.fury.io/js/swagpack.svg)](https://badge.fury.io/js/swagpack)
A simple CLI to merge multiple swagger files.

# Install

```sh
$ yarn add -D swagpack
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
Usage: swagpack build [options] <file>

Options:
  -w, --watch <dir>    Watch your swagger directory's changes
  -o, --output <path>  Output file
  -h, --help           display help for command
```

# License
MIT
