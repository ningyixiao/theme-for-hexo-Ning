function page_num_init() {
    // 获取当前页面
    var current_page = parseInt($(".btn-default").data("page"));
    // 获取页面总数
    var total = parseInt($(".page_num").data("total"));
    // 如果页面总数大于5，则进行下面的转变
    if (total > 5) {
        if (current_page < 4) {
            // 先将大于等于6的按钮display:none
            for (var i = 6; i <= total; i++) {
                $("[data-page=" + i + "]").css("display", "none");
            }
            // 再将.goto_last_page显示display:inline-block
            $(".goto_last_page").css("display", "inline-block");
        } else if (current_page > (total - 3)) {
            // 先将小于等于total-5的按钮display:none
            for (var i = total - 5; i >= 1; i--) {
                $("[data-page=" + i + "]").css("display", "none");
            }
            // 再将.goto_first_page显示display:inline-block
            $(".goto_first_page").css("display", "inline-block");
        } else {
            for (var i = 1; i <= total; i++) {
                if (i > current_page + 2 || i < current_page - 2) {
                    $("[data-page=" + i + "]").css("display", "none");
                }
            }
            $(".goto_first_page").css("display", "inline-block");
            $(".goto_last_page").css("display", "inline-block");
        }
    }
}

$(function() {
    page_num_init();
    // 阻止文章列表栏里面的a的默认行为
    $(".list-group-item.has-box-shadow").on("click", "a", function(e) {
        e.preventDefault();
    });
    // 文章列表中的文章点击跳转事件
    $(".list-group-item.has-box-shadow").click(function() {
        var that = $(this);
        var post_url = that.data("url");
        window.location.href = post_url;
    });
    // 监听除首页外的其他文章的顶部返回按钮的点击事件
    $(".return_btn").on("click", "i", function(e) {
        var target = $(e.target);
        if (e.target.tagName == "I") {
            window.location.href = target.data("url");
        } else {
            return;
        }
    });

    // 判断是否为post页面
    if ($(".main_body").data("ispost") == true) {
        var title = $(".post_title>h3").html();
        $("title").html(title + " - " + "宁一笑的博客");
    }
})
