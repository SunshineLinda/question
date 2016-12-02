require("./main");
require("../css/main.css");
var $=require("jquery");
$(".foodList").on("click","i",function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active")
	}else{
		$(this).addClass("active");
	}
	
})
$(".btn").on("click",function(){
	$(".mask").show();
	// location.href="howFeel.html"

})
$(".mask").on("click",".close",function(){
		$(".mask").hide();
})
$(".test_btn").on("click",function(){
	location.href="howFeel.html"
})