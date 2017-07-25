/* spig.js */
//右键菜单
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("",100);
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "哎呀，快把手拿开！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜猫子呀？还不睡觉吗？早点休息对身体好哦！', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，祝你开心一整天哦！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 中午了，你吃饭了么？不要饿着了，饿死了谁来跟我玩呀！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 午后的时光真难熬呀！还好有你在呢！', 6000);
        } else {
            showMessage(visitor + ' 快来逗我玩吧！', 6000);
        }
    }
    else {
        showMessage('欢迎' + visitor + '来到09电竞平台下载专题页面' + title + '》', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
	{
	    queue: false,
	    duration: 1000
	});
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('#switch-to-wap').mouseover(function(){
        showMessage('点击可以切换到手机版博客版面');
    });
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = [ "小碎步跑咯！", "我飘过来了！~", "我飘过去了", "我飘走啦！~飘！~", "趁你没注意，赶快转移~","哎呀，好无聊哦，你都不跟我玩了..."];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
        },
            {
                duration: 2000,
                complete: showMessage(msgs[i])
            });
    }, 45000);
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 7) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga" ,"歪，妖妖零吗？有个坏家伙摸我..." , "QQ群:130330806妹纸多，你可以去挑逗她们呀！","QQ群:242881524妹纸多，你可以去挑逗她们呀！" ,"这个家伙已经超越神棍啦！！拜托谁去终结他吧！","咿咿呀呀，我要告诉我妈妈，让他打你屁股~"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["我跑啦，快来追我呀！", "我跑呀跑呀跑~~", "别摸我，人家刚画好妆呢！", "惹不起你，我还躲不起你么？", "不要摸我呀，再摸就叫人打你哦！", "干嘛动我呀！小心我咬你哦！" , "你再这样我就不理你啦！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});