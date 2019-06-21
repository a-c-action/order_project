$(function (){
	//选择支付方式
	$(".check_1").click(function (){
		//判断当前元素为选中状态
		if($(".check_1").attr("checked")){
			//修改为取消选中
			$(".check_1").removeAttr("checked")
				.attr("src","images_pay/pay_1.png");

		}else{
			$(".check_1").attr("checked","true")
				.attr("src","images_pay/pay_2.png");
			$(".check_2").attr("checked",'true')
				.attr("src","images_pay/pay_3.png")
		}
	})

	//
    $(".check_2").click(function (){
		//判断当前元素为选中状态
		if($(".check_2").attr("checked")){
			//修改为取消选中
			$(".check_2").removeAttr("checked")
				.attr("src","images_pay/pay_3.png");

		}else{
			$('.check_2').attr("checked","true")
				.attr("src","images_pay/pay_4.png");
			$('.check_1').attr("checked","true")
				.attr("src","images_pay/pay_1.png");

		}
	})

    //结算
    $(".qr_code").click(function(){
//        if($(".check_1").attr("checked")){
//            $("div#qr_code").css("display",'block');
//        }else{
//            window.alert("请选择支付方式")
//
//        }
//        window.alert("请选择支付方式")
//          if ($(".check_1").attr("checked")){
//              $('#qr_code').removeClass("qr_codeNone")
//          }
        $('#qr_code').removeClass("qr_codeNone");


    })





})