require("./main");
require("../css/main.css");
var $=require("jquery");
$(".bot_arrow").on("click",function(){
	$(this).parent().next().slideDown(1000).parent().siblings().find("dd").slideUp(1000);
})
$(".right_arrow").on("click",function(){
	$(".describe").toggle()
})
$(".wholeArticleBtn").on("click","span",function(){

	if($(this).html()=="阅读全文"){
		$(this).html("收起全文");
		$(".wholeArticle").show();
	}else if($(this).html()=="收起全文"){
		$(this).html("阅读全文");
		$(".wholeArticle").hide();
	}
	
})