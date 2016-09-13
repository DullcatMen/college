$(".btns").click(function() {
	$(this).addClass("clickOn").siblings().removeClass("clickOn");
});

$(".btns").eq(0).click(function() {
	$(".all-mes").addClass("liShow").siblings().removeClass("liShow");
});

$(".btns").eq(2).click(function() {
	$(".st-com-mes").addClass("liShow").siblings().removeClass("liShow");
});