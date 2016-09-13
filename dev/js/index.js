var minImg = $(".minImg");
var bigImg = $(".bigImg");
var index = 0;
bigImg.eq(index).addClass("show");

function autoChange(){
	timer = setInterval(function(){
		index = index < 2 ? index + 1 : 0;
		bigImg.eq(index).addClass("show").siblings().removeClass("show");
		minImg.eq(index).find(".resultBox").addClass("relative");
		var prevIndex = index > 0 ? index - 1 : 2;
		minImg.eq(prevIndex).find(".resultBox").removeClass("relative");
	}, 4000);
}
autoChange();

minImg.click(function(){
	// console.log($(this).index());
	var resultBox = $(this).find(".resultBox");
	resultBox.addClass("relative");
	var siblingResultBox =  $(this).siblings().find(".resultBox");
	siblingResultBox.removeClass("relative");

	var bigImg = $(".bigImg");
	index = $(this).index();
	bigImg.eq(index).addClass("show");
	bigImg.eq(index).siblings().removeClass("show");
});
