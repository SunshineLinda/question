require("./main");
require("../css/main.css");
var $=require("jquery");
$(".question").on("click","span",function(){
	$(this).addClass("active").siblings().removeClass("active")
	
})
$(".btn").on("click",function(){
	location.href="status.html"
})
$.ajax("../data/data.json")
	.done(function(data){
		var str="";
		for(var i=0;i<data.length;i++){
			str+='<dl class="feel_dl">'
					+'<dt>'+data[i].qName+'</dt>'
					+'<dd><span>没有</span><span>很少</span><span>有时</span><span>经常</span><span>总是</span></dd>'
				+'</dl>'
		}
		$(".question").html(str);
	})