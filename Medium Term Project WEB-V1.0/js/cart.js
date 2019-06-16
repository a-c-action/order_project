$(function (){
	$(".checkAll").click(function (){
		if($(this).attr("checked")){
			$(this).removeAttr("checked").attr("src","./images/product_normal.png");
		}else{
			$(this).attr("checked","true").attr("src","./images/product_true.png");
		}
	})
})