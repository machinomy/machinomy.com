$(document).foundation();
$(function () {
    $("pre code").each(function(i, node) {
        hljs.highlightBlock(node);
    });

    $("span.data-nav-li").each(function (i, node) {
        var id = $(node).data("li-id");
        $("#main-menu ul.menu.nav li#" + id).addClass("active");
    });
});
