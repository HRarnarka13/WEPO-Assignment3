# WEPO-Assignment3
Skilaverkefni 3 í Vefforritun 2

##Synopsis

A web programming project about teaching evaluations for Web programming at Reykjavik University.

##Folder structure
*   |-Gruntfile.js
*   |-LICENSE
*   |-README.md
*   |-index.html
*   |-coverage
*   |---Chrome 41.0.2272 (Mac OS X 10.10.2)
*   |-----js
*   |-------controllers
*   |-------dest
*   |-------directives
*   |-------factories
*   |-package.json
*   |-src
*   |---css
*   |---js
*   |-----controllers
*   |-----dest
*   |-----directives
*   |-----factories
*   |---views
*   |-----directives
*   |-start-client.sh
*   |-tests

##Installation and running

In root of project

In root of project\n
>`bower install`\n
>`npm install`

To start server for client, be at root

>`./start.client.sh`

The client runs on port 8000

>`http://localhost:8000/`

##API Reference

See *http://dispatch.ru.is/demo/Help*

##Tests

Grunt is used to run tests

>`grunt test`

it's also used for pre-compiling less to css, to run jshint, concat and uglify using

>`grunt`

following are more possible grunt tasks\n
to run jshint
>`grunt checkjs`
to uglify
>`grunt minify` 
to concat
>`grunt makeonefile`
to concat and uglify
>`grunt makejs` 

To see code coverage go to index.html file in `coverage/"name of browser"`

##Authors
Arnar Kári arnarka13@ru.is \n
Freyr freyr12@ru.is \n
Sara Á saraa12@ru.is
