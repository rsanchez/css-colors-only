#!/usr/bin/env node

var usage = 'Usage: colorsOnly <inputFile> ' +
    '<outputFile?> [-g|--without-grey] [-m|--without-monochrome]';

var argv = require('yargs')
    .usage(usage)
    .demand(1)
    .alias('g', 'without-grey')
    .alias('m', 'without-monochrome')
    .argv;

var cssColorsOnly = require('./');

cssColorsOnly(
    argv._[0],
    argv._[1] || null,
    {
        withoutGrey: argv.g,
        withoutMonochrome: argv.m
    }
);
