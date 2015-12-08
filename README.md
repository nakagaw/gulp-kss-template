# gulp kss template

Please copy files to gulp-kss template directory below:
```
├── styleguide.md - overview
└── _template - templateDirectory
       ├── index.html
       └── public
```

&lt;link rel=&quot;stylesheet&quot; href=&quot;public/kss.css&quot; /&gt;  
&lt;link rel=&quot;stylesheet&quot; href=&quot;generic.css&quot; /&gt;  <==  Change your site's dist css


## How to Develop

### pre installed below

- node.js
- gulp
- sass

### npm install

```
npm install
```
jQuery  
/Users/nakagawa/Git/new_ui/node_modules/jquery/dist

_normalize.scss is include to generic.css on header.  
/Users/nakagawa/Git/new_ui/node_modules/normalize-scss/sass

google code-prettify  
https://github.com/google/code-prettify/blob/master/docs/getting_started.md#serving-your-own-js--css

### gulp tasks

```
gulp
```
※ Not comp css

#### Build

```
gulp build --env comp
```
※ Minify to: js, css

#### Server & watch

```
gulp sv
```
