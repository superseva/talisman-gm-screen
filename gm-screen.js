(function () {
    $(document).ready(function () {
        // CLICK NAVIGATION
        $(".nav-link").click(function (e) {
            e.preventDefault();
            var $scroller = $(".main-wrapper");
            let pageId = $(e.currentTarget).data("page");
            var scrollTo = $("#" + pageId).position().left;
            $scroller.animate({ scrollLeft: scrollTo }, 200);
        });
        // CLICK PLAYER ACTION BUTTON
        $(".player-action").click(function (e) {
            e.preventDefault();
            let contentId = $(e.currentTarget).data("content");
            let contentDiv = $("#" + contentId).html();
            console.log(contentDiv);
            $("#action-description").html(contentDiv);
        });

        $("#action-description").html($("#cont-melee").html());
    });
})();
