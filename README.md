# [Front-End Compilator](https://github.com/Shaneen31/Front-End-Compilator)

[![Build Status](https://travis-ci.org/Shaneen31/Front-End-Compilator.svg)](https://travis-ci.org/Shaneen31/Front-End-Compilator)
[![Code Climate](https://codeclimate.com/github/Shaneen31/Front-End-Compilator/badges/gpa.svg)](https://codeclimate.com/github/Shaneen31/Front-End-Compilator)

Version: 0.3.0


## About
This compilator is made to automate repetive task webdeveloppement, especially front-end.
This scipt is made using  [node.js](https://nodejs.org/), [gulp](http://gulpjs.com/) and [libsass](http://libsass.org/).

## Features

 * SASS files compilation to CSS3.
 * CSS3 minification.
 * Automatic reload of pages on different browsers and devices.

## Install

 * Copy gulpfile.js and package.json at root of your project.
 * In a termimal type npm install.

## Usage
Before starting to use this script, you have to set it's configuration to suite your project needs. Default
configuration is set for a standard Django project.

General settings section:

production: this variable can be set to false (default) or true and tells the script how to compile the source file. If
set to true, during compilation the script will minify your source file (sass and js).

devServerAdress: this variable tells the script witch adress to use to communicate with your developement server. The
script will start a proxy that automatically refresh your page after every compilation or modification to html files.

Path settings section:

In this section you have to specify for each file type where you source file are locate and where you want the compiled
files to be placed. Path have to be relative to the gulpfile.js file.


To start using the script, open a terminal, browse to your project folder and use the command gulp. This will start the
the proxy and the watcher to auto-compile your sourcefiles. The script will automatically open your default browser to
the home page of your website. Compilation will be made each time you modify and save one of your source file and reload
the page for you.

## Copyright and license

Code and documentation copyright 2015 Shaneen31.

Released under [the MIT license](https://github.com/Shaneen31/Front-End-Compilator/blob/master/LICENSE.md).