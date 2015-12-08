var path = require("path");
var webpack = require("webpack");
var bourbon = require('node-bourbon');

// @file config.js
var www  = './template'; // ルートディレクトリ
var dest = www + '/public'; // 出力先ディレクトリ
var src  = './_src';  // ソースディレクトリ
var current = process.cwd(); // node_modules のルートディレクトリ指定用

module.exports = {

    // webserverの設定
    webserver: {
        www: www,
        option: {
            host: 'localhost',
            port: '3000',
            livereload: true,
            //directoryListing: true //ディレクトリ一覧を強制表示、ハマりポイント
            open: true
        },
    },

    // jsのビルド設定
    js: {
        src: src + '/javascript/**',
        dest: dest,
        preserveComments: 'some'
    },

    // webpackの設定
    webpack: {
        entry: {
            kss: src + '/javascript/kss.js'
        },
        output: {
            filename: '[name].js'
        },
        resolve: {
            root: path.join(current , 'node_modules'), // package.json でmainに指定してあるものはこれでrequireできる
            alias: {
                // npm installしたjqueryプラグインとかで以下にaliasを貼るとrequire('xxx');のようにパス無しでつかえる
                // chosen: current + '/node_modules/chosen-npm/public/chosen.jquery.min.js'
            }
        },
        plugins: [
            new webpack.optimize.DedupePlugin(),  // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
            new webpack.optimize.AggressiveMergingPlugin(), //ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
            // // new webpack.optimize.CommonsChunkPlugin('app','app.js'), // 共通関数を出力する先を限定するやつ
            new webpack.ProvidePlugin({ // JQueryをグローバルに出す設定。これでrequireせず使えるのでjqueryプラグインもそのまま動く。
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery'
            }),
            new webpack.optimize.UglifyJsPlugin({ //gulp-uglify的なやつ
                compress: { //warning OFF
                    warnings: false
                }
            })
        ],
        devtool: "source-map"
    },

    // sassのビルド設定
    sass: {
        src: src + '/scss/**/*.scss' ,
        dest: dest,
        option: {
            includePaths: bourbon.includePaths, // node-bourbon settings
            indentedSyntax: true,
            outputStyle: 'expanded'
        },
        sourcemaps: {
            includeContent: false, //インラインじゃなく別ファイルに
            sourceRoot: '../../_src/scss/' // .mapからみた相対scssの場所
        },
        autoprefixer: {
            'browsers': ['last 2 versions']
        }
    }
};