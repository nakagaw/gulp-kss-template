(function() {
    'use strict';

    // Knockout.js
    // ==================================

    define(['knockout'], function(ko){

        // Toggle class / How to : http://goo.gl/ojHOnY
        // ==================================
        var viewModel = function(){
            var self = this;

            // Side navigation
            // self.toggleNavActive = ko.observable(false);
            // self.toggleNav = function(data, event){
            //     var onOff1 = !self.toggleNavActive();
            //     self.toggleNavActive(onOff1);
            // }

        }
        ko.applyBindings(new viewModel());

        // Set and Get Cookie
        // ==================================
        //クッキーを登録するsetCookie関数
        function setCookie(name, value, expires) {
            var newCook= ''; //クッキー文字列をいれる変数
            //name=valueとして追加
            newCook += name + '=' + encodeURIComponent(value);
            if(expires) { //有効期限があれば設定
                var exp = new Date();
                exp.setDate(exp.getDate() + expires);
                newCook += '; expires=' + exp.toGMTString();
            }
            document.cookie = newCook; //クライアントに書き込む
        }
        //指定されたクッキー値を取得するgetCookie関数
        function getCookie(name) {
            var cList = document.cookie.split(';'); //取得したクッキーを分割
            for (var i = 0; i < cList.length; i++) {
                //名前を順番に確認
                var cName = cList[i].split('=');
                //＝でクッキー情報を分割、名前が引数nameと同じなら
                //デコードして返す
                if(cName[0] == name) { return decodeURIComponent(cName[1]); }
            }
            return null; //該当する名前のクッキーがない場合、空で返す
        }


    });


    // jQuery
    // ==================================

    define(['jquery'], function($){

        // prettify.js
        // ==================================
        require('./modules/prettify');
        $(function(){
            prettyPrint();
        });
    });

})();