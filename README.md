# gulp kss template

Please copy files to gulp-kss template directory below:
```
└── template - templateDirectory
       ├── overview.md - overview
       ├── index.html
       └── public
```

And, change css path to your compiled css name on template/index.html.
```
<link rel="stylesheet" href="public/kss.css" />
<link rel="stylesheet" href="generic.css" /> <==  Change your site's dist css

```

Settings options on gulp.js
```
    .pipe(gulpkss({
        overview: __dirname + '/template/overview.md', // スタイルガイドのトップページ
        templateDirectory: __dirname + '/template/' // スタイルガイドのテンプレを絶対パスで。なかったらkss-node default
    }))
```

## How to Develop

### pre installed below

- node.js
- gulp
- sass

### npm install

```
npm install
```

- _normalize.scss is include to generic.scss.  
- google code-prettify  
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

## Reference
- [kss-node](https://github.com/kss-node/kss-node)
- [Using custom templates · kss-node/kss-node Wiki](https://github.com/kss-node/kss-node/wiki/Using-custom-templates)
- [kss-node/helpers.js at master · kss-node/kss-node](https://github.com/kss-node/kss-node/blob/master/generator/handlebars/helpers.js)