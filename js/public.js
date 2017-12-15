$(function(){
	//左边菜单
	$("#nav").find("p").click(function(){
		var that = $(this);
		if(!that.parent().children("ul").hasClass("hide")){
            that.next().addClass("hide");
            that.parent().removeClass("turn");
		}else{
			
            that.next().removeClass("hide");
            that.parent().addClass("turn");
		}
		$("#nav").find("div").removeClass("bg-active");
        that.parent().addClass("bg-active");
	});
	//左边菜单的子菜单
	$("#nav").children("div").find("li").click(function(){
		$("#nav").children("div").find("ul li").removeClass("child-active");
		$(this).addClass("child-active");
	})
    //顶部右边的菜单鼠标移入
    $(".header-top-con-r,.header-head-menu").mouseover(function(){
    	$(".header-head-menu").removeClass("hide");
    });
    //顶部右边的菜单鼠标移出
    $(".header-top-con-r,.header-head-menu").mouseout(function(){
    	$(".header-head-menu").addClass("hide");
    });
    //顶部右边的菜单点击
    $(".header-head-menu li").click(function(){
    	alert($(this).index());
    })

})
