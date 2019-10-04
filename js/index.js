$(function(){
	$(".wrapper").load("./pages/business.html");
	// 为导航添加事件
	$("#nav li").on("click","a",function(){
		if($(this).attr("data-name") == "business"){       //顾客管理
			$("#wrapper").load("./pages/business.html");
		}else if($(this).attr("data-name") == "recruit"){  //招聘管理
			$("#wrapper").load("./pages/recruit.html");
		}else if($(this).attr("data-name") == "user"){     //用户管理
			$("#wrapper").load("./pages/user.html");
		}else if($(this).attr("data-name") == "job"){  //求职联系管理
			$("#wrapper").load("./pages/job.html");
		// }else if($(this).attr("data-name") == "module"){   //模块管理
		// 	$("#wrapper").load("./pages/module.html");
		// }else if($(this).attr("data-name") == "check"){    //审核模块
		// 	$("#wrapper").load("./pageseck.html");
		// }else if($(this).attr("data-name") == "recruit"){  //
		// 	$("#wrapper").load("./pages/recruit.html");
		// }else if($(this).attr("data-name") == "recruit"){  //
		// 	$("#wrapper").load("./pages/recruit.html");
		// }else if($(this).attr("data-name") == "recruit"){  //
		// 	$("#wrapper").load("./pages/recruit.html");
		}
	});
});