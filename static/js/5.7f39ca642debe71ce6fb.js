webpackJsonp([5],{"7TS9":function(n,t,r){var i=r("CQqU");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);r("rjj0")("b286d5d8",i,!0,{})},"9/ui":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("kZyE"),a=r("tbqU"),e={data:function(){return{questionnaireList:[],iconList:[]}},mounted:function(){var n=this;Object(i.a)().then(function(t){n.questionnaireList=t.data});this.iconList=[{icon:""},{icon:""},{icon:""}],console.log(this.iconList)},methods:{StartAnswer:function(n){var t=this;console.log(n),Object(a.a)(n,"1,3,8").then(function(r){20705==r.status_code||20003==r.status_code?alert("问卷即将发布，请稍后再试"):t.$router.push({path:"/EssentialInformation",query:{id:n}})})},backHome:function(){this.$router.push({path:"/"})}}},o={render:function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{attrs:{id:"dialeCtical"}},[r("div",{staticClass:"topHome"},[r("span",{staticClass:"pulseOne"}),n._v(" "),r("span",{staticClass:"pulseTwo"}),n._v(" "),r("span",{staticClass:"pulseThree"}),n._v(" "),r("span",{staticClass:"pulseFour"}),n._v(" "),r("img",{staticClass:"topImage",attrs:{src:"/static/images/topImg.png"}}),n._v(" "),r("h3",{staticClass:"top-title"},[n._v("辨证")]),n._v(" "),r("h1",{staticClass:"title"},[n._v("开启您的智能辨证吧！")]),n._v(" "),n._l(n.questionnaireList,function(t,i){return r("div",{key:i,staticClass:"BasicProblems"},[r("div",{staticClass:"Basic-bord"},[r("div",{staticClass:"round"},[r("i",{staticClass:"Answer iconfont"},[n._v(n._s(n.iconList[i].icon))])]),n._v(" "),r("div",{staticClass:"Answer-cont"},[r("span",{staticClass:"Answer-topic"},[n._v(n._s(t.title))]),n._v(" "),r("div",{staticClass:"Start-Writing",on:{click:function(r){return n.StartAnswer(t.id)}}},[n._v("\n                        开始问卷\n                        "),n._m(0,!0)])])])])}),n._v(" "),r("div",{staticClass:"back_btn",on:{click:n.backHome}},[r("i",{staticClass:"backIcon iconfont iconfanhui"}),n._v(" "),r("span",{staticClass:"back"},[n._v("返回")])])],2)])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"triangle_border_right"},[t("span")])}]};var s=r("VU/8")(e,o,!1,function(n){r("7TS9"),r("ElB8")},"data-v-ad732d60",null);t.default=s.exports},CQqU:function(n,t,r){(n.exports=r("FZ+f")(!1)).push([n.i,"/* 气泡1 */\n.pulseOne {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 15%;\r\n    width:94px;\r\n    height:94px;\r\n    background: #93d5df;\r\n    border-radius: 50%;\r\n    opacity: 0.3;\r\n    z-index: 2;\r\n    /* 动画属性名，也就是我们前面keyframes定义的动画名 */\r\n    -webkit-animation-name:'one';\r\n            animation-name:'one';\r\n    /* 动画持续时间 */\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n    /* 动画频率，和transition-timing-function是一样的 */\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out; \r\n    /* 动画延迟时间 */\r\n    -webkit-animation-delay: 0;\r\n            animation-delay: 0;\r\n    /* 定义循环资料，infinite为无限次 */\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    /* 定义动画方式 */\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate; \r\n    /* animation:ripple 6s linear 0 infinite normal; */\n}\n@-webkit-keyframes one {\n0% {\r\n        opacity:0.0;\r\n        width:5px;\r\n        height:5px;\n}\n100% {\r\n        opacity: 0.2;\r\n        width:94px;\r\n        height:94px;\n}\n}\n@keyframes one {\n0% {\r\n        opacity:0.0;\r\n        width:5px;\r\n        height:5px;\n}\n100% {\r\n        opacity: 0.2;\r\n        width:94px;\r\n        height:94px;\n}\n}\r\n/* 气泡2 */\n.pulseTwo{\r\n    position: absolute;\r\n    top: 71%;\r\n    left: 5%;\r\n    width:123px;\r\n    height:123px;\r\n    background: #93d5df;\r\n    border-radius: 50%;\r\n    opacity: 0.3;\r\n    z-index: 2;\r\n    /* 动画属性名，也就是我们前面keyframes定义的动画名 */\r\n    -webkit-animation-name:'two';\r\n            animation-name:'two';\r\n    /* 动画持续时间 */\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n    /* 动画频率，和transition-timing-function是一样的 */\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out; \r\n    /* 动画延迟时间 */\r\n    -webkit-animation-delay: 0;\r\n            animation-delay: 0;\r\n    /* 定义循环资料，infinite为无限次 */\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    /* 定义动画方式 */\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate; \r\n    /* animation:ripple 6s linear 0 infinite normal; */\n}\n@-webkit-keyframes two {\n0% {\r\n            opacity:0.0;\r\n            width:5px;\r\n            height:5px;\n}\n100% {\r\n            opacity: 0.2;\r\n            width:123px;\r\n            height:123px;\n}\n}\n@keyframes two {\n0% {\r\n            opacity:0.0;\r\n            width:5px;\r\n            height:5px;\n}\n100% {\r\n            opacity: 0.2;\r\n            width:123px;\r\n            height:123px;\n}\n}\r\n/* 气泡3 */\n.pulseThree{\r\n    position: absolute;\r\n    top: 26px;\r\n    right: 15%;\r\n    width:189px;\r\n    height:189px;\r\n    background: #fff;\r\n    border-radius: 50%;\r\n    opacity: 0.5;\r\n    /* 动画属性名，也就是我们前面keyframes定义的动画名 */\r\n    -webkit-animation-name:'Three';\r\n            animation-name:'Three';\r\n    /* 动画持续时间 */\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n    /* 动画频率，和transition-timing-function是一样的 */\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out; \r\n    /* 动画延迟时间 */\r\n    -webkit-animation-delay: 0;\r\n            animation-delay: 0;\r\n    /* 定义循环资料，infinite为无限次 */\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    /* 定义动画方式 */\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\n}\n@-webkit-keyframes Three {\n0% {\r\n        opacity:0.0;\r\n        width:5px;\r\n        height:5px;\n}\n100% {\r\n        opacity: 0.2;\r\n        width:123px;\r\n        height:123px;\n}\n}\n@keyframes Three {\n0% {\r\n        opacity:0.0;\r\n        width:5px;\r\n        height:5px;\n}\n100% {\r\n        opacity: 0.2;\r\n        width:123px;\r\n        height:123px;\n}\n}\r\n/* 气泡4 */\n.pulseFour{\r\n        position: absolute;\r\n        bottom: 26px;\r\n        right: 15%;\r\n        width:76px;\r\n        height:76px;\r\n        background: #fff;\r\n        border-radius: 50%;\r\n        opacity: 0.5;\r\n        /* 动画属性名，也就是我们前面keyframes定义的动画名 */\r\n        -webkit-animation-name:'Four';\r\n                animation-name:'Four';\r\n        /* 动画持续时间 */\r\n        -webkit-animation-duration: 6s;\r\n                animation-duration: 6s;\r\n        /* 动画频率，和transition-timing-function是一样的 */\r\n        -webkit-animation-timing-function: ease-in-out;\r\n                animation-timing-function: ease-in-out; \r\n        /* 动画延迟时间 */\r\n        -webkit-animation-delay: 0;\r\n                animation-delay: 0;\r\n        /* 定义循环资料，infinite为无限次 */\r\n        -webkit-animation-iteration-count: infinite;\r\n                animation-iteration-count: infinite;\r\n        /* 定义动画方式 */\r\n        -webkit-animation-direction: alternate;\r\n                animation-direction: alternate;\n}\n@-webkit-keyframes Four {\n0% {\r\n            opacity:0.0;\r\n            width:5px;\r\n            height:5px;\n}\n100% {\r\n            opacity: 0.2;\r\n            width:76px;\r\n            height:76px;\n}\n}\n@keyframes Four {\n0% {\r\n            opacity:0.0;\r\n            width:5px;\r\n            height:5px;\n}\n100% {\r\n            opacity: 0.2;\r\n            width:76px;\r\n            height:76px;\n}\n}\r\n/* 图片移动 */\n.TipsImage {\r\n\t-webkit-animation: 'gt' 2s infinite linear;\r\n\t        animation: 'gt' 2s infinite linear;\n}\n@-webkit-keyframes gt {\n0% {\r\n        margin-top: 5px;\r\n        /* opacity: 0; */\n}\n50% {\r\n        margin-top: 30px;\r\n        /* opacity: 0; */\n}\n100% {\r\n        margin-top: 5px;\r\n        /* opacity: 1; */\n}\n}\n@keyframes gt {\n0% {\r\n        margin-top: 5px;\r\n        /* opacity: 0; */\n}\n50% {\r\n        margin-top: 30px;\r\n        /* opacity: 0; */\n}\n100% {\r\n        margin-top: 5px;\r\n        /* opacity: 1; */\n}\n}\r\n/*  */\r\n/* 健康方案图片动画   */\n.imgOne{\r\n    position: absolute;\r\n    bottom: -6%;\r\n    left: -3%;\r\n    width: 16%;\r\n    -webkit-animation:iOne 4s;\r\n            animation:iOne 4s;\n}\n@-webkit-keyframes iOne {\nfrom {\r\n        width:1%;\r\n        left: 30%;\r\n        bottom: 50%;\n}\nto{\r\n        width: 16%;\r\n        bottom: -6%;\r\n        left: -3%;\n}\n}\n@keyframes iOne {\nfrom {\r\n        width:1%;\r\n        left: 30%;\r\n        bottom: 50%;\n}\nto{\r\n        width: 16%;\r\n        bottom: -6%;\r\n        left: -3%;\n}\n}\n.imgTwo{\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 14%;\r\n    width: 10vw;\r\n    -webkit-animation:iTwo 4s;\r\n            animation:iTwo 4s;\n}\n@-webkit-keyframes iTwo {\nfrom {\r\n        width:1vw;\r\n        left: 30%;\r\n        top: 50%;\n}\nto{\r\n        width: 10vw;\r\n        top: 20%;\r\n        left: 14%;\n}\n}\n@keyframes iTwo {\nfrom {\r\n        width:1vw;\r\n        left: 30%;\r\n        top: 50%;\n}\nto{\r\n        width: 10vw;\r\n        top: 20%;\r\n        left: 14%;\n}\n}\n.imgThree{\r\n    position: absolute;\r\n    top: -3%;\r\n    left: 48%;\r\n    width: 10vw;\r\n    -webkit-animation:iThree 4s;\r\n            animation:iThree 4s;\n}\n@-webkit-keyframes iThree {\nfrom {\r\n        width:1vw;\r\n        left: 30%;\r\n        top: 50%;\n}\nto{\r\n        width: 10vw;\r\n        top: -3%;\r\n        left: 48%;\n}\n}\n@keyframes iThree {\nfrom {\r\n        width:1vw;\r\n        left: 30%;\r\n        top: 50%;\n}\nto{\r\n        width: 10vw;\r\n        top: -3%;\r\n        left: 48%;\n}\n}\n.imgFour{\r\n    position: absolute;\r\n    top: -6%;\r\n    right: -2%;\r\n    width: 16vw;\r\n    -webkit-animation:iFour 4s;\r\n            animation:iFour 4s;\n}\n@-webkit-keyframes iFour {\nfrom {\r\n        width:1vw;\r\n        right: 70%;\r\n        top: 40%;\n}\nto{\r\n        width: 16vw;\r\n        top: -6%;\r\n        right: -2%;\n}\n}\n@keyframes iFour {\nfrom {\r\n        width:1vw;\r\n        right: 70%;\r\n        top: 40%;\n}\nto{\r\n        width: 16vw;\r\n        top: -6%;\r\n        right: -2%;\n}\n}\n.imgFive{\r\n    position: absolute;\r\n    bottom: 15%;\r\n    right: 25%;\r\n    width: 6vw;\r\n    -webkit-animation:iFive 4s;\r\n            animation:iFive 4s;\n}\n@-webkit-keyframes iFive {\nfrom {\r\n        width:1vw;\r\n        bottom: 55%;\r\n        right: 55%;\n}\nto{\r\n        width: 6vw;\r\n        bottom: 15%;\r\n        right: 25%;\n}\n}\n@keyframes iFive {\nfrom {\r\n        width:1vw;\r\n        bottom: 55%;\r\n        right: 55%;\n}\nto{\r\n        width: 6vw;\r\n        bottom: 15%;\r\n        right: 25%;\n}\n}\r\n/* 二维码旋转 */\n@-webkit-keyframes QR {\n51% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg)\n}\n75% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg)\n}\n}\n@keyframes QR {\n51% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg)\n}\n75% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg)\n}\n}\n@-webkit-keyframes DottedLine {\n0% {\r\n        opacity: 0.0;\n}\n50% {\r\n        opacity: 0.0;\n}\n100% {\r\n        opacity: 1;\n}\n}\n@keyframes DottedLine {\n0% {\r\n        opacity: 0.0;\n}\n50% {\r\n        opacity: 0.0;\n}\n100% {\r\n        opacity: 1;\n}\n}\n@-webkit-keyframes dashedImg {\n75% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg)\n}\n100% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg)\n}\n}\n@keyframes dashedImg {\n75% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg)\n}\n100% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg)\n}\n}",""])},ElB8:function(n,t,r){var i=r("oEnc");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);r("rjj0")("aafb2a16",i,!0,{})},kZyE:function(n,t,r){"use strict";t.a=function(){return Object(i.a)({url:"/terminal/healthSurveyList",method:"get",headers:{"Content-type":"application/json;charset=utf-8"}})};var i=r("vLgD")},oEnc:function(n,t,r){(n.exports=r("FZ+f")(!1)).push([n.i,"\n#dialeCtical[data-v-ad732d60]{\r\n    width: 100%;\r\n    height: 100%;\n}\n.topHome[data-v-ad732d60]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute; /* Safari 5.1 - 6.0 */ /* Opera 11.1 - 12.0 */ /* Firefox 3.6 - 15 */ \r\n    background: -webkit-gradient(linear, left top, right top, from(#19a2ce) , to(#46bea3)); \r\n    background: linear-gradient(to right, #19a2ce , #46bea3); /* 标准的语法 */\n}\n.topImage[data-v-ad732d60]{\r\n    width: 16%;\r\n    height: 17%;\r\n    float: left;\r\n    margin-left: 0%;\r\n    margin-top: -2%;\r\n    z-index: 10;\n}\n.top-title[data-v-ad732d60]{\r\n    width: 30%;\r\n    float: left;\r\n    font-size: 2vw;\r\n    margin-left: -10%;\r\n    margin-top: 1%;\r\n    z-index: 30;\n}\n.title[data-v-ad732d60]{\r\n    margin-left: 38%;\r\n    margin-top: 5%;\r\n    color: #fff;\n}\n.TipsImage[data-v-ad732d60]{\r\n    position: absolute;\r\n    right: 10%;\r\n    top: 56%;\r\n    width: 7%;\n}\r\n/* 返回按钮 */\n.back_btn[data-v-ad732d60]{\r\n    position: absolute;\r\n    width: 8vw;\r\n    height: 8vw;\r\n    border-radius: 10vw;\r\n    background: radial-gradient( #528c45,  #47b333); /* 标准的语法 */\r\n    bottom: 2%;\r\n    right: 2%;\r\n    text-align: center;\n}\n.back[data-v-ad732d60]{\r\n    display: inline-block;\r\n    width: 4vw;\r\n    font-size: 1.6vw;\r\n    color: #fff;\r\n    margin-top: -5%;\n}\n.backIcon[data-v-ad732d60]{\r\n    font-size: 5.5vw;\r\n    color: #fff;\r\n    line-height: 5vw;\n}\r\n/* 基础问卷 */\n.BasicProblems[data-v-ad732d60]{\r\n    width: 52%;\r\n    height: 20%;\r\n    background: rgba(255,255,255, 0.7);\r\n    margin-left: 26%;\r\n    margin-top: 2%;\r\n    border-radius: 100px;\r\n    position: relative;\n}\n.Basic-bord[data-v-ad732d60]{\r\n    width: 89%;\r\n    height: 82%;\r\n    background: rgb(255,255,255);\r\n    margin-left: 5.2%;\r\n    border-radius: 100px;\r\n    display: inline-block;\r\n    margin-top: 1.5%;\r\n    position: relative;\n}\n.round[data-v-ad732d60]{\r\n   width: 7vw;\r\n    height: 7vw;\r\n    border-radius: 5vw;\r\n    background: -webkit-gradient(linear, left top, right top, from(#ffcfd7) , to(#ff726e));\r\n    background: linear-gradient(to right, #ffcfd7 , #ff726e);\r\n    position: absolute;\r\n    left: 1%;\r\n    top: 1vw;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\n}\n.Answer[data-v-ad732d60]{\r\n    font-size: 5vw !important;\r\n    /* text-align: center; */\r\n    color: #fff;\r\n    /* margin-left: 1.2vw; */\r\n    /* margin-top: 0.8vw; */\r\n    line-height: 7vw;\r\n    display: inline-block;\n}\n.Answer-cont[data-v-ad732d60]{\r\n    position: absolute;\r\n    right: 8%;\r\n    top: 0;\r\n    width: 24%;\r\n    height: 100%;\n}\r\n/* 右三角 */\n.triangle_border_right[data-v-ad732d60]{\r\n    border-width: 0.6vw 0 0.6vw 0.7vw;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #000;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 26%;\r\n    right: 8%;\n}\r\n/* 基础问卷 */\n.Answer-topic[data-v-ad732d60]{\r\n    display: block;\r\n    height: 44%;\r\n    font-size: 1.2vw;\r\n    line-height: 3.5vw;\r\n    font-weight: 600;\r\n    text-align: right;\r\n    border-bottom: 4px solid #000;\r\n    position: relative;\n}\r\n/* .开始答题 */\n.Start-Writing[data-v-ad732d60]{\r\n    width: 82%;\r\n    height: 28%;\r\n    line-height: 2.5vw;\r\n    font-size: 1.1vw;\r\n    font-weight: 550;\r\n    text-align: center;\r\n    border: 4px solid #f8b62d;\r\n    border-radius: 14px;\r\n    margin-left: 14%;\r\n    position: relative;\r\n    margin-top: 8%;\n}\r\n/* 体质辨识 */\n.Constitution[data-v-ad732d60]{\r\n    width: 52%;\r\n    height: 20%;\r\n    background: rgba(255,255,255, 0.7);\r\n    margin-left: 26%;\r\n    margin-top: 8%;\r\n    border-radius: 100px;\r\n    position: relative;\n}\n.Identification[data-v-ad732d60]{\r\n    width: 82%;\r\n    height: 28%;\r\n    line-height: 2vw;\r\n    font-size: 1.1vw;\r\n    font-weight: 550;\r\n    text-align: center;\r\n    border: 4px solid #8fc31f;\r\n    border-radius: 14px;\r\n    margin-left: 14%;\r\n    position: relative;\r\n    margin-top: 8%;\n}\r\n\r\n",""])},tbqU:function(n,t,r){"use strict";t.a=function(n,t){return Object(i.a)({url:"/terminalSurvey/healthSurveyQuestions/"+n+"/"+t,method:"get",headers:{"Content-type":"application/json;charset=utf-8"}})};var i=r("vLgD")}});