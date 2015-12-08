# gulp kss template

メインサイトのStyleとの衝突を防ぐためにプレフィクスをつけてる
$kssPrefix: 'kss-';

<link rel="stylesheet" href="public/kss.css" />
<link rel="stylesheet" href="generic.css" /> <==  Change your site's dist css

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
