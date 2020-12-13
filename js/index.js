$(document).ready(function(){
	var button_status = 1;
	$(".button").on("click",function(){
		if (button_status == 0) {
		$(".cube").css("transform", "rotate3d(15deg,44deg,-10deg)")
		button_status = 1;
		} else if
			(button_status == 1) {
				$(".cube").css("transform", "rotate3d(0deg,0deg,0deg)")
				button_status = 0;
			}
	})
})