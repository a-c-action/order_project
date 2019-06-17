$(function (){
	$(".togg").click(function(){
		if($(".TeamServices").css("display") == "none"){
			$(".TeamServices").css("display","block");
		}else{
			$(".TeamServices").css("display","none");
		}
	})
	$(".checkAll").click(function (){
		if($(this).attr("checked")){
			$(this).removeAttr("checked").attr("src","./images/product_normal.png");
		}else{
			$(this).attr("checked","true").attr("src","./images/product_true.png");
		}
	})
})
