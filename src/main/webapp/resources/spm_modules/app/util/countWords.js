define(function (require, exports) {
    'use strict';
    var $ = require('jquery');

    function escape(string) {
        //这里还得考虑将制表符等换成空格
        var str = ('' + string).replace(/[\u0000-\u0020]/g, ' ');
        return ('' + str).replace(/["'\\\n\r\u2028\u2029]/g, function (character) {
            // Escape all characters not included in SingleStringCharacters and
            // DoubleStringCharacters on
            // http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
            switch (character) {
                case '"':
                case "'":
                case '\\':
                    return '\\' + character
                // Four possible LineTerminator characters need to be escaped:
                case '\n':
                    return ' '
                case '\r':
                    return ' '
                case '\u2028':
                    return '\\u2028'
                case '\u2029':
                    return '\\u2029'
            }
        })
    }

    function wordCount(word) {
        if (!word || 0 === word.length) return 0;
        word = word.replace(/^\s+|\s+$/gm, '');
        if (!word || 0 === word.length) return 0;
        var char, i, len = word.length, count = 0;
        var before = false;
        for (i = 0; i < len; ++i) {
            //此处算法为：1.如果是英文字母，则需要看一下字符，直到遇到一个其他语言字符，此时前面字数加1，如果到单词尾也加一
            //中、日、韩分别区间，三者标点符号为相应区间，都算一个字
            //英语、法语、俄语、葡萄牙语处理一样，所以这里就不判断了
            //汉语
            var char = word.charCodeAt(i);
            //为了扩展每种语言单独处理
            //中文
            if ((char >= 0x2e80 && char <= 0x2fdf) || (char >= 0x3100 && char <= 0x312f) ||
                (char >= 0x3400 && char <= 0x4dbf) || (char >= 0x4e00 && char <= 0x9fa5) ||
                (char >= 0xf900 && char <= 0xfaff) || (char >= 0x2600 && char <= 0x27bf) ||
                (char >= 0x2800 && char <= 0x28ff)) {
                if (before) {
                    ++count;
                    before = false;
                }
                ++count;
                //日语
            } else if ((char >= 0x3040 && char <= 0x30ff) || (char >= 0x31f0 && char <= 0x31ff)) {
                if (before) {
                    ++count;
                    before = false;
                }
                ++count;
                //韩语
            } else if ((char >= 0x1100 && char <= 0x11ff) || (char >= 0x3130 && char <= 0x318f)
                || (char >= 0xac00 && char <= 0xd7af)) {
                if (before) {
                    ++count;
                    before = false;
                }
                ++count;
                //其他中日韩补充，如符号、音标
            } else if ((char >= 0xff00 && char <= 0xffef) ||
                (char >= 0x3000 && char <= 0x303f) || (char >= 0x31c0 && char <= 0x31ef) ||
                (char >= 0x2ff0 && char <= 0x2fff) || (char >= 0x31a0 && char <= 0x31bf) ||
                (char >= 0x1d300 && char <= 0x1d35f) || (char >= 0x4dc0 && char <= 0x4dff) ||
                (char >= 0xa000 && char <= 0xa48f) || (char >= 0xa490 && char <= 0xa4cf) ||
                (char >= 0x3200 && char <= 0x33ff) || (char >= 0xfe10 && char <= 0xfe1f) ||
                (char >= 0xfe30 && char <= 0xfe4f)) {
                if (before) {
                    ++count;
                    before = false;
                }
                ++count;

            } else if ((char >= 0x0000 && char <= 0x0020) || (char >= 0x007f && char <= 0x009f)) {
                //需要处理掉一些特殊符号，不算字
            } else {
                //俄语、法语、西班牙语和英语相同，以空格分隔
                //说明前面有字母
                before = true;
            }
        }
        //最后判定一下
        if (before)
            ++count;
        return count;

    }

    exports.count = function (input) {
        var _this = this;
        //first judge is null
        if (!input || 0 === input.length) return 0;
        //start split
        var intTmp = escape(input);
        var words = intTmp.split(' ');
        var total = 0;
        for (var i = 0; i < words.length; i++) {
            total = total + wordCount(words[i]);
        }
        return total;
    }
});

