$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", ".delete", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input[type=\"text\"]").on("keypress", function(event){
	if(event.which === 13){
		$("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash-alt\"></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

$("h1").on("click", "[data-fa-i2svg]", function(){
	$("input[type=\"text\"]").fadeToggle();
});