var userAgent = navigator.userAgent.toLowerCase();
var browser = {
    version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
    safari: /webkit/.test(userAgent),
    opera: /opera/.test(userAgent),
    msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
    mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
};

if(userAgent.match(/iphone|ipad|android/i)) {
    var IS_MOBILE = true;
}else{
    var IS_MOBILE = false;
}

var Common = {
    browserCheck: function () {
        var result = '';
        switch (navigator.appName) {
            case 'Netscape':
                result = 'FF';
                break;
            default:
                result = 'IE';
                break
        }
        return result
    },
    int: function (v) {
        return parseInt(v)
    },
    str: function (v) {
        return String(v)
    },
    addEvent: function (obj, evt, fn) {
        switch (__BR__) {
            case 'IE':
                obj.attachEvent(evt, fn);
                break;
            default:
                evt = evt.replace('on', '');
                obj.addEventListener(evt, fn, true);
                break
        }
    },
    delEvent: function (obj, evt, fn) {
        switch (__BR__) {
            case 'IE':
                obj.detachEvent(evt, fn);
                break;
            default:
                evt = evt.replace('on', '');
                obj.removeEventListener(evt, fn, true);
                break
        }
    },
    getObj: function (obj_name, mode) {
        var result = '';
        switch (mode) {
            case 'name':
                result = document.getElementsByName(obj_name);
                break;
            case 'tagname':
                result = document.getElementsByTagName(obj_name);
                break;
            default:
                result = document.getElementById(obj_name);
                break
        }
        return result
    },
    brWidthHeight: function () {
        var result = new Array();
        var win_width = 0;
        var win_height = 0;
        var scroll_width = 0;
        var scroll_height = 0;
        switch (__BR__) {
            case 'IE':
                win_width = document.documentElement.clientWidth;
                win_height = document.documentElement.clientHeight;
                scroll_width = document.body.scrollLeft == 0 ? document.documentElement.scrollLeft : document.body.scrollLeft;
                scroll_height = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
                break;
            case 'FF':
            default:
                win_width = Common.int(self.innerWidth);
                win_height = Common.int(self.innerHeight);
                scroll_width = Common.int(self.pageXOffset);
                scroll_height = Common.int(self.pageYOffset);
                break
        }
        result['win_width'] = win_width;
        result['win_height'] = win_height;
        result['scroll_width'] = scroll_width;
        result['scroll_height'] = scroll_height;
        return result
    },
    rand: function (num) {
        var index = '';
        var result = '';
        var r = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var count = r.length;
        for (var x = 0; x < num; x++) {
            index = this.Common.int(Math.random() * 62);
            if (r[index]) result += r[index]
        }
        return result
    },
    dateCal: function (mode, obj_sname, obj_ename) {
        var edit_date;
        switch (mode) {
            case 'day':
                edit_date = 0;
                break;
            case 'week':
                edit_date = 7;
                break;
            case '1month':
                edit_date = 30;
                break;
            case '3month':
                edit_date = 90;
                break
        }
        var objDate = new Date();
        var now = new Date();
        objDate.setDate(now.getDate() - edit_date);
        var sMonth = now.getMonth() + 1;
        var eMonth = objDate.getMonth() + 1;
        var sMonth = new String(sMonth);
        var eMonth = new String(eMonth);
        var sDay = now.getDate();
        var eDay = objDate.getDate();
        var sDay = new String(sDay);
        var eDay = new String(eDay);
        sMonth = (sMonth.length == 1) ? '0' + sMonth : sMonth;
        eMonth = (eMonth.length == 1) ? '0' + eMonth : eMonth;
        sDay = (sDay.length == 1) ? '0' + sDay : sDay;
        eDay = (eDay.length == 1) ? '0' + eDay : eDay;
        Common.getObj(obj_ename).value = now.getYear() + '-' + sMonth + '-' + sDay;
        Common.getObj(obj_sname).value = objDate.getYear() + '-' + eMonth + '-' + eDay
    },
    number_format: function (number, decimals, dec_point, thousands_sep) {
        var n = number,
            c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point == undefined ? "," : dec_point;
        var t = thousands_sep == undefined ? "," : thousands_sep,
            s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")
    },
    trim: function (str, charlist) {
        var whitespace, l = 0,
            i = 0;
        str += '';
        if (!charlist) {
            whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000"
        } else {
            charlist += '';
            whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1')
        }
        l = str.length;
        for (i = 0; i < l; i++) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(i);
                break
            }
        }
        l = str.length;
        for (i = l - 1; i >= 0; i--) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(0, i + 1);
                break
            }
        }
        return whitespace.indexOf(str.charAt(0)) === -1 ? str : ''
    },
    thisFileName: function () {
        var len = location.href.indexOf('?');
        return location.href.substring(0, len)
    },
    getParam: function (key) {
        var result = null;
        var len = location.href.indexOf(key);
        if (len > 0) {
            var params = location.href.substring(len, location.href.length);
            var ex_params1 = params.split('=');
            if (ex_params1[1].indexOf('&') == 0) {
                result = ''
            } else if (ex_params1[1].indexOf('&') > 0) {
                var ex_params2 = ex_params1[1].split('&');
                result = ex_params2[0]
            } else {
                result = ex_params1[1]
            }
            return result
        }
    },
    setCookie: function (cookieName, cookieVal, time) {
        var date = new Date();
        var lifeTime = 0;
        if (time) {
            lifeTime = date.setDate((date.getTime() + 1000 * 60 * 60 * 24 * 365) + time);
            document.cookie = cookieName + '=' + escape(cookieVal) + '; expires=' + lifeTime
        } else {
            document.cookie = cookieName + '=' + escape(cookieVal)
        }
    },
    getCookie: function (cookieName) {
        var result = null;
        var allCookies = document.cookie.split('; ');
        var cookieArray = null;
        for (i = 0; i < allCookies.length; i++) {
            cookieArray = allCookies[i].split('=');
            if (cookieName == cookieArray[0]) {
                result = cookieArray[1];
                break
            }
        }
        return result
    },
    delCookie: function (cookieName) {
        var date = new Date();
        lifeTime = date.setDate((date.getTime() + 1000 * 60 * 60 * 24 * 365) - 3600);
        document.cookie = cookieName + '=; expires=' + lifeTime
    },
    windowClose: function () {
        if (/MSIE/.test(navigator.userAgent)) {
            if (navigator.appVersion.indexOf("MSIE 7.0") >= 0) {
                window.open("about:blank", "_self").close()
            } else {
                window.opener = self;
                self.close()
            }
        }
    }
};
var __BR__ = Common.browserCheck();
if (typeof (Ajax) != 'Object') {
    var Ajax = {
        init: function (file, param, type, function_name, loding_chk, async) {
            this.file = file;
            this.param = param;
            this.type = type;
            this.async = (async == false) ? false : true;
            this.function_name = (function_name) ? function_name : '';
            this.loding_chk = (!loding_chk) ? false : true;
            return this.ajaxLoding()
        },
        ajaxLoding: function () {
            if (this.loding_chk == true) {
                if (typeof Common.getObj('ajax_loding') == 'object') {
                    this.obj_width = 100;
                    this.obj_height = 100;
                    this.wh = Common.brWidthHeight();
                    this.sc_width = Common.int((this.wh['win_width'] / 2) - (this.obj_width / 2)) + this.wh['scroll_width'];
                    this.sc_height = Common.int((this.wh['win_height'] / 2) - (this.obj_height / 2)) + this.wh['scroll_height'];
                    this.div_html = '<img src="/admin/img/ajax_loading.gif" border="0">';
                    Common.getObj('ajax_loding').style.zIndex = 1000;
                    Common.getObj('ajax_loding').style.position = 'absolute';
                    Common.getObj('ajax_loding').style.top = this.sc_height + 'px';
                    Common.getObj('ajax_loding').style.left = this.sc_width + 'px';
                    Common.getObj('ajax_loding').innerHTML = this.div_html
                }
            }
            this.ajaxCreate();
            return this.ajaxSend()
        },
        ajaxCreate: function () {
            switch (__BR__) {
                case 'IE':
                    this.req = new ActiveXObject("Microsoft.XMLHTTP");
                    break;
                default:
                    this.req = new XMLHttpRequest();
                    break
            }
        },
        ajaxSend: function () {
            if (this.loding_chk == true) {
                if (typeof Common.getObj('ajax_loding') == 'object') {
                    if (Common.getObj('ajax_loding').style.display == 'none') {
                        Common.getObj('ajax_loding').style.display = ''
                    }
                }
            }
            switch (__BR__) {
                case 'IE':
                    if (this.file.indexOf('?') > 0) {
                        this.file += (this.type == 'POST') ? '&charset=utf-8' : '&charset=euc-kr'
                    } else {
                        this.file += (this.type == 'POST') ? '?charset=utf-8' : '?charset=euc-kr'
                    }
                    break;
                default:
                    this.file += (this.file.indexOf('?') > 0) ? '&charset=utf-8' : '?charset=utf-8';
                    break
            }
            this.req.onreadystatechange = function () {
                if (Ajax.req.readyState == 4) {
                    if (Ajax.req.status == 200) {
                        if (Ajax.loding_chk == true) {
                            if (typeof Common.getObj('ajax_loding') == 'object') {
                                if (Common.getObj('ajax_loding').style.display == '') {
                                    Common.getObj('ajax_loding').style.display = 'none'
                                }
                            }
                        }
                        if (Ajax.function_name) {
                            return Ajax.function_name(Ajax.req)
                        }
                    }
                }
            }
            this.req.open(this.type, this.file, this.async);
            if (this.type == 'POST') this.req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
            this.req.send(this.param);
        },
        rltXml: function (req) {
            if (typeof (this.req) != 'undefined') {
                req = this.req
            }
            return req.responseXML
        },
        rltText: function (req) {
            if (typeof (this.req) != 'undefined') {
                req = this.req
            }
            return req.responseText
        },
        rltXmlLoop: function (obj, tag) {
            var xmlObj = obj.getElementsByTagName(tag);
            return xmlObj
        },
        rltXmlOnce: function (obj, tag) {
            var result;
            var obj = obj.getElementsByTagName(tag);
            if (obj[0]) {
                result = obj[0].firstChild.nodeValue
            } else {
                return false
            }
            return result
        },
        encode: function (data) {
            return encodeURIComponent(data)
        },
        decode: function (data) {
            return decodeURIComponent(data)
        },
        value: function (obj_name, num) {
            var result = '';
            if (num) {
                result = Common.getObj(obj_name, 'name')[num - 1].name + '=' + Common.getObj(obj_name, 'name')[num - 1].value + '&'
            } else {
                result = Common.getObj(obj_name).id + '=' + Common.getObj(obj_name).value + '&'
            }
            return result
        },
        post: function (form_name) {
            if (!form_name) {
                alert('폼이름이 없습니다.');
                return false
            }
            var result = '';
            var item = '';
            var item_name = '';
            var obj_form = document.forms[form_name];
            var count = obj_form.length;
            for (var x = 0; x < count; x++) {
                item = obj_form.elements[x];
                item_name = (item.name) ? item.name : item.id;
                if (item_name) {
                    result += item_name + '=' + item.getAttribute('value') + '&'
                }
            }
            return result
        },
        xmlDoc: function (value) {
            var xmlDoc = null;
            switch (__BR__) {
                case 'IE':
                    xmlDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
                    xmlDoc.loadXML(value);
                    break;
                default:
                    xmlDoc = new DOMParser().parseFromString(value, 'application/xml');
                    break
            }
            return xmlDoc
        },
        debug: function (req) {
            if (typeof (this.req) != 'undefined') {
                req = this.req
            }
            var debug = document.createElement('DIV');
            debug.innerHTML = this.rltText();
            document.body.appendChild(debug)
        }
    }
};
var FormCheck = {
    init: function (formName) {
        this.objForm = document.forms[formName];
        this.formName = formName;
        this.count = this.objForm.length;
        this.chk = '';
        this.msg = '';
        this.kind = '';
        this.from = '';
        this.item = '';
        this.len = '';
        this.ex_len = '';
        this.len_chk = '';
        this.len_text = '';
        this.min = '';
        this.max = '';
        this.result = '';
        this.first = '';
        this.checkcount = '';
        this.chk_cnt = '';
        this.on_focus_color = '';
        this.off_focus_color = '';
        this.ret_chk = false;
        return this.check()
    },
    setCheck: function (formName, itemName, chk, msg, kind, len, from, checkcount) {
        this.setFrom = document.forms[formName];
        this.setCount = this.setFrom.length;
        for (var i = 0; i < this.setCount; i++) {
            this.itemName = this.setFrom.elements[i];
            if (this.itemName.name == itemName) {
                if (chk != "") this.itemName.setAttribute("chk", chk);
                if (msg != "") this.itemName.setAttribute("msg", msg);
                if (kind != "") {
                    this.itemName.setAttribute("kind", kind)
                } else {
                    this.itemName.setAttribute("kind", '')
                }
                if (len != "") this.itemName.setAttribute("len", len);
                if (from != "") this.itemName.setAttribute("from", from);
                if (checkcount != "") this.itemName.setAttribute("checkcount", checkcount)
            }
        }
    },
    check: function () {
        for (var x = 0; x < this.count; x++) {
            this.item = this.objForm.elements[x];
            if (this.item.name) {
                if (this.item.getAttribute('chk')) {
                    this.chk = this.item.getAttribute('chk');
                    this.msg = this.item.getAttribute('msg');
                    this.kind = this.item.getAttribute('kind');
                    this.from = this.item.getAttribute('from');
                    this.len = (this.item.getAttribute('len')) ? this.item.getAttribute('len') : '';
                    this.checkcount = this.item.getAttribute('checkcount');
                    if (this.chk == 'y' || this.chk == 'Y') {
                        this.first = "this.item.value == '' || ("
                    } else {
                        this.first = "this.item.value && ("
                    }
                    if (this.len) {
                        if (this.len.indexOf('-') > 0) {
                            this.ex_len = this.len.split('-');
                            this.min = this.ex_len[0];
                            this.max = this.ex_len[1];
                            if (this.min == this.max) {
                                this.len_chk = " || this.item.value.length != " + this.min
                            } else {
                                this.len_chk = " || this.item.value.length < " + this.min + " || this.item.value.length > " + this.max
                            }
                            if (typeof (this.min) != 'undefined' || typeof (this.max) != 'undefined') {
                                this.len_text = " [" + this.min + " ~ " + this.max + " 글자]"
                            }
                        }
                    }
                    if (this.checkcount) {
                        this.chk_cnt = "if(chk < " + this.checkcount + ") {";
                        this.chk_cnt += "alert('" + this.msg + "을(를) " + this.checkcount + "개 이상 선택해주세요.');";
                        this.chk_cnt += "this.ret_chk = true;";
                        this.chk_cnt += "}"
                    } else {
                        this.chk_cnt = "if(chk < 1) {";
                        this.chk_cnt += "alert('" + this.msg + "을(를) 선택해주세요.');";
                        this.chk_cnt += "this.ret_chk = true;";
                        this.chk_cnt += "}"
                    }
                    switch (this.kind) {
                        default: if (this.item.name == 'description') {
                            if (__BR__ == 'IE') {
                                this.result += "if(Common.getObj('description','name')[0].value == '<p></p>') {";
                                this.result += "alert('내용을 입력해주세요.');";
                                this.result += "this.ret_chk = true;";
                                this.result += "}"
                            } else if (__BR__ == 'FF') {
                                if (Common.getObj('descriptionView_TEXTAREA') == '[object HTMLTextAreaElement]') {
                                    this.result += "if(Common.getObj('descriptionView_TEXTAREA').value == '<p><br></p>') {";
                                    this.result += "alert('내용을 입력해주세요.');";
                                    this.result += "this.ret_chk = true;";
                                    this.result += "}"
                                }
                            }
                        } else {
                            this.result = "if(" + this.first + "Common.trim(this.item.value) == ''" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}"
                        }
                        break;
                        case 'float':
                            this.result = "var num_pattern = /(^[0-9]+)\.([0-9]+$)/gi;";
                            this.result += "if(" + this.first + "!num_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 숫자와 소숫점으로만 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'num':
                            this.result = "var num_pattern = /(^[0-9]+$)/gi;";
                            this.result += "if(" + this.first + "!num_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 숫자로만 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'eng':
                            this.result = "var eng_pattern = /(^[a-zA-Z]+$)/gi;";
                            this.result += "if(" + this.first + "!eng_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 영어로만 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'kor':
                            this.result = "var kor_pattern = /(^[가-힣]+$)/gi;";
                            this.result += "if(" + this.first + "!kor_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 한글로만 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'eng+kor+num':
                            this.result = "var eng_kor_num_pattern = /(^[a-zA-Z0-9가-힣]+$)/gi;";
                            this.result += "if(" + first + "!eng_kor_num_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 영어,한글,숫자로만 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'num+eng':
                        case 'eng+num':
                            this.result = "var eng_num_pattern = /(^[a-zA-Z0-9]+$)/gi;";
                            this.result += "if(" + this.first + "!eng_num_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 숫자 및 영어로만 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'num+eng2':
                            this.result = "var eng_num_pattern = /(^[a-z0-9]+$)/gi;";
                            this.result += "if(" + this.first + "!eng_num_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 숫자 및 영어로만 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'email':
                            this.result = "var email_pattern = /([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/;";
                            this.result += "if(" + this.first + "!email_pattern.test(this.item.value)" + this.len_chk + ")) {";
                            this.result += "alert('" + this.msg + "을(를) 정확히 입력하세요." + this.len_text + "');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'checkbox':
                            this.result = "var obj = Common.getObj('" + this.item.name + "', 'name');";
                            this.result += "var count = obj.length;";
                            this.result += "var chk = 0;";
                            this.result += "for(var c=0; c<count; c++) {";
                            this.result += "if(obj[c].checked == true) {";
                            this.result += "chk++;";
                            this.result += "}}";
                            this.result += this.chk_cnt;
                            break;
                        case 'file':
                            this.result = "var obj = Common.getObj('" + this.item.name + "', 'name');";
                            this.result += "var count = obj.length;";
                            this.result += "var fileResult = false;";
                            this.result += "for(var c=0; c<count; c++) {";
                            this.result += "if(obj[c].value.length > 0) fileResult = true;";
                            this.result += "}";
                            this.result += "if(fileResult == false) {";
                            this.result += "alert('" + this.msg + "을(를) 한개 이상 입력해주세요.');";
                            this.result += "this.ret_chk = true;";
                            this.result += "}";
                            break;
                        case 'textbox':
                            var editid = this.item.getAttribute('editid');
                            this.result = "var editVal = builderEditor.Send('" + editid + "');";
                            this.result += "if(editVal == '') {";
                            this.result += "alert('" + this.msg + "을(를) 입력하세요.');";
                            this.result += "}";
                            this.result += "this.ret_chk = false;";
                            break;
                        case 'jumin_number':
                            this.jumin_number_chk = false;
                            this.juminObj = document.getElementsByName(this.from)[0];
                            if (this.chk == 'y' || this.chk == 'Y') {
                                this.jumin_number_chk = true
                            } else {
                                if (this.juminObj.value || this.item.value) this.jumin_number_chk = true
                            }
                            if (this.jumin_number_chk == true) {
                                this.result = "this.jumin_number_check = this.bRegNumberChk('" + this.juminObj.value + "-" + this.item.value + "');";
                                this.result += "if(this.jumin_number_check == false" + this.len_chk + ") {";
                                this.result += "alert('" + this.msg + "을(를) 정확히 입력하세요." + this.len_text + "');";
                                this.result += "this.ret_chk = true;";
                                this.result += "}"
                            }
                            break;
                        case 'personal_number':
                            this.personal_number_chk = false;
                            this.personalObj = document.getElementsByName(this.from)[0];
                            if (this.chk == 'y' || this.chk == 'Y') {
                                this.personal_number_chk = true
                            } else {
                                if (this.personalObj.value || this.item.value) this.personal_number_chk = true
                            }
                            if (this.personal_number_chk == true) {
                                this.result = "this.personal_number_check = this.bRegNumberChk01('" + this.personalObj.value + this.item.value + "');";
                                this.result += "if(this.personal_number_check == false" + this.len_chk + ") {";
                                this.result += "alert('" + this.msg + "을(를) 정확히 입력하세요." + this.len_text + "');";
                                this.result += "this.ret_chk = true;";
                                this.result += "}"
                            }
                            break;
                        case 'company_number':
                            this.company_number_chk = false;
                            this.companyObj = document.getElementsByName(this.from)[0];
                            if (this.chk == 'y' || this.chk == 'Y') {
                                this.company_number_chk = true
                            } else {
                                if (this.companyObj.value || this.item.value) this.company_number_chk = true
                            }
                            if (this.company_number_chk == true) {
                                this.result = "this.company_number_check = this.bRegNumberChk02('" + this.companyObj.value + this.item.value + "');";
                                this.result += "if(this.company_number_check == false" + this.len_chk + ") {";
                                this.result += "alert('" + this.msg + "을(를) 정확히 입력하세요." + this.len_text + "');";
                                this.result += "this.ret_chk = true;";
                                this.result += "}"
                            }
                            break;
                        case 'passport_number':
                            this.passport_number_chk = false;
                            this.passportObj = document.getElementsByName(this.from)[0];
                            if (this.chk == 'y' || this.chk == 'Y') {
                                this.passport_number_chk = true
                            } else {
                                if (this.passportObj.value || this.item.value) this.passport_number_chk = true
                            }
                            if (this.passport_number_chk == true) {
                                this.result = "this.passport_number_check = this.bRegNumberChk03('" + this.passportObj.value + this.item.value + "');";
                                this.result += "if(this.passport_number_check == false" + this.len_chk + ") {";
                                this.result += "alert('" + this.msg + "을(를) 정확히 입력하세요." + this.len_text + "');";
                                this.result += "this.ret_chk = true;";
                                this.result += "}"
                            }
                            break;
                        case 'foreigner_number':
                            this.foreigner_number_chk = false;
                            this.foreignerObj = document.getElementsByName(this.from)[0];
                            if (this.chk == 'y' || this.chk == 'Y') {
                                this.foreigner_number_chk = true
                            } else {
                                if (this.foreignerObj.value || this.item.value) this.foreigner_number_chk = true
                            }
                            if (this.foreigner_number_chk == true) {
                                this.result = "this.foreigner_number_check = this.bRegNumberChk04('" + this.foreignerObj.value + this.item.value + "');";
                                this.result += "if(this.foreigner_number_check == false" + this.len_chk + ") {";
                                this.result += "alert('" + this.msg + "을(를) 정확히 입력하세요." + this.len_text + "');";
                                this.result += "this.ret_chk = true;";
                                this.result += "}"
                            }
                            break
                    }
                    eval(this.result);
                    this.chk = '';
                    this.msg = '';
                    this.kind = '';
                    this.from = '';
                    this.len = '';
                    this.ex_len = '';
                    this.len_chk = '';
                    this.len_text = '';
                    this.min = '';
                    this.max = '';
                    this.result = '';
                    this.first = '';
                    this.checkcount = '';
                    this.chk_cnt = '';
                    if (this.ret_chk == true) {
                        if (__BR__ == 'IE' && this.item.name == 'description') {
                            this.item.style.backgroundColor = this.on_focus_color
                        } else {
                            try {
                                this.item.focus();
                                this.item.style.backgroundColor = this.on_focus_color
                            } catch (e) {}
                        }
                        return false
                    } else {
                        this.item.style.backgroundColor = this.off_focus_color
                    }
                    this.item = ''
                }
            }
        }
        if (x == this.count) return true
    },
    bRegNumberChk: function (number) {
        number = number.replace('-', '');
        var rtnType = this.getRegNoType('ssn');
        if (rtnType > 0) {
            switch (rtnType) {
                case '1':
                    return this.bRegNumberChk01(number);
                    break;
                case '2':
                    return this.bRegNumberChk02(number);
                    break;
                case '3':
                    if (number.length == 9) {
                        return this.bRegNumberChk03(number)
                    } else {
                        return this.bRegNumberChk04(number)
                    }
            }
            return false
        } else {
            if (number.length == 13) {
                if (this.bRegNumberChk01(number) == true) return true;
                if (this.bRegNumberChk02(number) == true) return true
            } else {
                if (this.bRegNumberChk03(number) == true) return true;
                if (this.bRegNumberChk04(number) == true) return true
            }
            return false
        }
    },
    getRegNoType: function (code) {
        var rtnType = "-1";
        var type = document.getElementsByName(code + '_type');
        for (var i = 0; i < type.length; i++) {
            if (type[i].checked == true) {
                rtnType = type[i].value
            }
        }
        return rtnType
    },
    bRegNumberChk01: function (number) {
        if (number == '') return false;
        if (number.length != 13) return false;
        if (isNaN(number)) return false;
        jumin1 = number.substr(0, 6);
        jumin2 = number.substr(6, 13);
        var str_serial1 = jumin1;
        var str_serial2 = jumin2;
        var digit = 0;
        for (var i = 0; i < str_serial1.length; i++) {
            var str_dig = str_serial1.substring(i, i + 1);
            if (str_dig < '0' || str_dig > '9') {
                digit = digit + 1
            }
        }
        if ((str_serial1 == '') || (digit != 0)) {
            return false
        }
        var digit1 = 0;
        for (var i = 0; i < str_serial2.length; i++) {
            var str_dig1 = str_serial2.substring(i, i + 1);
            if (str_dig1 < '0' || str_dig1 > '9') {
                digit1 = digit1 + 1
            }
        }
        if ((str_serial2 == '') || (digit1 != 0)) {
            return false
        }
        if (str_serial1.substring(2, 3) > 1) {
            return false
        }
        if (str_serial1.substring(4, 5) > 3) {
            return false
        }
        if (str_serial2.substring(0, 1) > 4 || str_serial2.substring(0, 1) == 0) {
            return false
        }
        var a1 = str_serial1.substring(0, 1);
        var a2 = str_serial1.substring(1, 2);
        var a3 = str_serial1.substring(2, 3);
        var a4 = str_serial1.substring(3, 4);
        var a5 = str_serial1.substring(4, 5);
        var a6 = str_serial1.substring(5, 6);
        var check_digit = a1 * 2 + a2 * 3 + a3 * 4 + a4 * 5 + a5 * 6 + a6 * 7;
        var b1 = str_serial2.substring(0, 1);
        var b2 = str_serial2.substring(1, 2);
        var b3 = str_serial2.substring(2, 3);
        var b4 = str_serial2.substring(3, 4);
        var b5 = str_serial2.substring(4, 5);
        var b6 = str_serial2.substring(5, 6);
        var b7 = str_serial2.substring(6, 7);
        var check_digit = check_digit + b1 * 8 + b2 * 9 + b3 * 2 + b4 * 3 + b5 * 4 + b6 * 5;
        check_digit = check_digit % 11;
        check_digit = 11 - check_digit;
        check_digit = check_digit % 10;
        if (check_digit != b7) {
            return false
        }
        return true
    },
    bRegNumberChk02: function (number) {
        if (number.length != 13) return false;
        if (number == '0000000000000') return false;
        var szChkDgt = new Array(1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2);
        var szCoNo = number;
        var lV1 = 0;
        var nV2 = 0;
        var nV3 = 0;
        for (var i = 0; i < 12; i++) {
            lV1 = parseInt(szCoNo.substring(i, i + 1)) * szChkDgt[i];
            if (lV1 >= 10) {
                nV2 += lV1 % 10
            } else {
                nV2 += lV1
            }
        }
        nV3 = nV2 % 10;
        if (nV3 > 0) {
            nV3 = 10 - nV3
        } else {
            nV3 = 0
        }
        if (szCoNo.substring(12, 13) != nV3) {
            return false
        } else {
            return true
        }
    },
    bRegNumberChk03: function (number) {
        if (number.length != 9) return false;
        var zone = number.substring(0, 1);
        var no1 = number.substring(1, 9);
        var no2 = number.substring(2, 9);
        if (isNaN(no1) && isNaN(no2)) {
            return false
        } else {
            return true
        }
        return false
    },
    bRegNumberChk04: function (number) {
        if (number.length != 13) return false;
        var sum = 0;
        var odd = 0;
        var buf = new Array(13);
        for (i = 0; i < 13; i++) {
            buf[i] = parseInt(number.charAt(i))
        }
        odd = buf[7] * 10 + buf[8];
        if (odd % 2 != 0) {
            return false
        }
        if ((buf[11] != 6) && (buf[11] != 7) && (buf[11] != 8) && (buf[11] != 9)) {
            return false
        }
        var multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
        for (i = 0, sum = 0; i < 12; i++) {
            sum += (buf[i] *= multipliers[i])
        }
        sum = 11 - (sum % 11);
        if (sum >= 10) sum -= 10;
        sum += 2;
        if (sum >= 10) sum -= 10;
        if (sum != buf[12]) {
            return false
        } else {
            return true
        }
    }
};
var Payment = {};
Payment.main = function (form_name, url) {
    if (typeof (Common.getObj('iframe_payment', 'name')[0]) == 'object') {
        this.form = document.forms[form_name];
        this.form.action = url;
        this.form.target = 'iframe_payment';
        if (typeof (gRelay) != "undefined") {
            gRelay.relayForm(this.form)
        }
        this.form.submit()
    } else {
        alert('결제시 필요한 iframe 태그가 없습니다. 관리자에게 문의 하세요.');
        return false
    }
};

function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                if (typeof callback == 'undefined') return;
                callback()
            }
        }
    } else {
        script.onload = function () {
            if (typeof callback == 'undefined') return;
            callback()
        }
    }
    script.src = url;
    document.body.appendChild(script)
}
var SSL = {
    oForm: null,
    aElement: null,
    bCheckSend: false,
    sPostName: null,
    'send': function (oSSLParams) {
        if (typeof Array.prototype.search == 'function') delete Array.prototype.search;
        if (oSSLParams.formName) {
            this.oForm = eval('document.' + oSSLParams.formName)
        } else if (oSSLParams.idName) {
            this.oForm = document.getElementById(oSSLParams.idName)
        }
        this.aElement = oSSLParams.elementName;
        this.sPostName = oSSLParams.postName;
        var self = this;
        loadScript('https://blogin.simplexi.com/authssl/crypt/AuthSSLManager.js', function () {
            try {
                AuthSSLManager.weave({
                    'auth_mode': 'encrypt',
                    'aEleId': self.aElement,
                    'auth_callbackName': 'SSL.encrypt'
                })
            } catch (e) {
                alert('body 태그가 없습니다. 고객센터에 문의해 주시기 바랍니다.');
                return false
            }
        })
    },
    'encrypt': function (sEncrypt) {
        if (AuthSSLManager.isError(sEncrypt) == true) {
            alert('SSL 전송을 하지 못했습니다. 고객센터에 문의해 주시기 바랍니다.');
            return false
        } else {
            var count = this.aElement.length;
            for (var x = 0; x < count; x++) {
                try {
                    eval('this.oForm.' + this.aElement[x] + '.value = "";')
                } catch (e) {
                    try {
                        if(this.oForm.name == 'hiddenPaymentForm') {
                            $('input[name="' + this.aElement[x] + '"]').val('');
                        }
                    } catch(e) {}
                }
            }
            var oEncode = document.createElement('input');
            oEncode.type = 'hidden';
            oEncode.name = this.sPostName;
            oEncode.value = sEncrypt;
            this.oForm.appendChild(oEncode);
            this.oForm.submit()
        }
    }
};
var BannerPlayer = {
    interval: 2000,
    timer: null,
    loop: true,
    current: 0,
    els: null,
    data: null,
    start: function (els, data) {
        if (els) this.els = document.getElementById(els);
        if (data) this.data = data;
        this.timer = setInterval(BannerPlayer.imgmove, this.interval)
    },
    imgmove: function () {
        banner = BannerPlayer.data[BannerPlayer.current];
        if (banner) {
            BannerPlayer.changeImag(banner);
            if (BannerPlayer.data.length == BannerPlayer.current) {
                BannerPlayer.current = 0;
                if (!BannerPlayer.loop) {
                    BannerPlayer.end()
                }
            }
        } else {
            BannerPlayer.current = 0
        }
    },
    changeImag: function (img) {
        this.els.src = img.src;
        this.els.code = img.code;
        this.current++
    },
    end: function () {
        clearInterval(this.timer, 0)
    }
};

function imgError(el) {
    var obj = document.getElementById(el);
    obj.innerHTML = "이미지가 존재하지 않습니다."
}
var ObjectPlace = {
    getTop: function (obj) {
        var top = obj.offsetTop;
        var parent = obj.offsetParent;
        while (parent) {
            top += parent.offsetTop;
            parent = parent.offsetParent
        }
        return top
    },
    getLeft: function (obj) {
        var left = obj.offsetLeft;
        var parent = obj.offsetParent;
        while (parent) {
            left += parent.offsetLeft;
            parent = parent.offsetParent
        }
        return left
    }
};

function lightBoxView(element, element_width, element_height, alpha) {
    var wh = Common.brWidthHeight();
    try {
        typeof (Common.getObj('divback').id)
    } catch (e) {
        if (Common.getObj('member_idx').value == '') {
            var obj_div_back = document.createElement('div');
            obj_div_back.id = 'divback';
            obj_div_back.style.top = '0px';
            obj_div_back.style.left = '0px';
            obj_div_back.style.position = 'absolute';
            obj_div_back.style.zIndex = 100;
            obj_div_back.style.backgroundColor = 'black';
            obj_div_back.style.filter = 'alpha(opacity=' + alpha + ')';
            obj_div_back.style.width = wh['win_width'] + 'px';
            obj_div_back.style.height = wh['win_height'] + wh['scroll_height'] + 'px';
            document.body.appendChild(obj_div_back);
            Common.addEvent(window, 'onscroll', lightBox);
            Common.addEvent(window, 'onresize', lightBox)
        }
    }
    var sc_width = Common.int(wh['win_width'] / 2 - element_width / 2) + wh['scroll_width'];
    var sc_height = Common.int(wh['win_height'] / 2 - element_height / 2) + wh['scroll_height'];
    Common.getObj(element).style.position = 'absolute';
    Common.getObj(element).style.top = sc_height + 'px';
    Common.getObj(element).style.left = sc_width + 'px';
    Common.getObj(element).style.zIndex = 200;
    Common.getObj(element).style.display = 'block';
    var obj_div_back = Common.getObj('divback');
    obj_div_back.style.width = wh['win_width'] + 'px';
    obj_div_back.style.height = wh['win_height'] + wh['scroll_height'] + 'px'
}
function ajaxRunCeck() {
    var importAjax = new Array("poll.js", "member.js", "board.js", "formmail.js");
    var k = 0;
    var runAjax = Array();
    var script_tags = document.getElementsByTagName('script');
    if (script_tags) {
        if (script_tags.length > 0) {
            for (var i = 0; i < script_tags.length; i++) {
                var txt = script_tags[i].src;
                for (var j = 0; j < importAjax.length; j++) {
                    var intValue = txt.indexOf(importAjax[j]);
                    if (intValue > 0) {
                        runAjax[k] = importAjax[j].replace(/.js/, '');
                        k++
                    }
                }
            }
        }
    }
    var f = 0;
    for (var t = 0; t < runAjax.length; t++) {
        if (runAjax[t] == 'formmail') {
            f++
        } else {
            try {
                eval('ajax' + runAjax[t] + 'Process();')
            } catch (e) {}
        }
    }
    if (f > 0) {
        ajaxformmailProcess()
    }
}

function private_info_agreement()
{
    try {
        if(document.getElementById('private_info_agreement').checked == false) {
            alert('개인정보의 수집 및 이용목적에 대한 동의를 하셔야 합니다.');
            return false;
        }
    }
    catch (e) {}
    return true;
}