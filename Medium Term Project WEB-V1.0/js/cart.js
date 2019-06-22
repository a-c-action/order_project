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
	$(".inputVer").click(function(){
		var now = new Date();
		console.log(now)
		var i=60;
		var timer=setInterval(function(){
			$(".inputVer").html(i+"s后可再获取")
			$(".inputVer").css("background","gray")
			i--;
			if(i<0){
				clearInterval(timer);
				$(".inputVer").html("获取验证码")
				$(".inputVer").css("background","#2020f9e6")
				$(".inputVer").attr("disabled",false)	
			}
		},1000)	
		$(".inputVer").attr("disabled",true)		
	})

	$(".userInput").blur(function(){
		var userinput = $(".userInput").val()
		if(userinput.length==0){
			confirm("用户名不可为空");
			return false;
		}
		var regex = /^[a-zA-Z0-9_-]{4,16}$/;
		if(!regex.test(userinput)){
			confirm("用户名格式不正确");
			return false;
		}
		return true;
	})

	$(".emailInput").blur(function(){
		var input=$(".emailInput").val()
		if(input.length==0){
			confirm("邮箱不可为空");
			return false;
			}
		//邮箱正则表达式
		var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		//判断
		if(!regex.test(input)){
			confirm("邮箱格式不正确");
			return false;
		}
		return true;
	})

	$(".passwordInput").blur(function(){
		var pswdinput=$(".passwordInput").val()
		if(pswdinput.length==0){
			confirm("密码不可为空");
			return false;
			}
		var regex = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
		//最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
		if(!regex.test(pswdinput)){
			confirm("密码强度不够，最少6位，请包含至少1个大写字母，1个小写字母，1个数字，1个特殊字符");
			return false;
		}
		return true;
	})

	$(".teleInput").blur(function(){
		var teleinput=$(".teleInput").val()
		if(teleinput.length==0){
			confirm("手机号不可为空");
			return false;
			}
		var regex = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
		if(!regex.test(teleinput)){
			confirm("手机号非法");
			return false;
		}
		return true;
	})

	$(".restartpasswordInput").blur(function(){
		var restartInput = $(".restartpasswordInput").val()
		var passwordinput = $(".passwordInput").val()
		if(restartInput != passwordinput){
			confirm("两次密码输入不一致");
			return false;
		}
		return true;
	})
})
