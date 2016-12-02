require("./main");
require("../css/main.css");
var $=require("jquery");
$(".choose").on("click","span",function(){
	$(this).addClass("active").siblings().removeClass("active");
	if($(this).index()==1){
		$(".items").show()
	}else{
		$(".items").hide()
	}
})
$(".items").on("click","span",function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active")
	}else{
		$(this).addClass("active");
	}
	
})
$(".illnessBtn").on("click",function(){
	location.href="allergy.html";
})