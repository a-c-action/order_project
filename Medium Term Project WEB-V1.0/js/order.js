$(".contentorder .ordera").click(function (){
		//移除整个商品记录
		console.log($(".ordera"))
		$(this).parents(".contentorder").remove();
	})