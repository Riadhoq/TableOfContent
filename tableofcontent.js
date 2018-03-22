$(function () {

    var contentSection =
        "<nav role='navigation' class='sections'>" +
        "<ul id='content-menu'>" +
        "<li><h3>Sections</h3></li>";

    var i = 0, id, element, link, newLine, tags = $('.article-body-text h2');

    tags.each(function () {

        id = 'link-' + i++;
        element = $(this);
        link = element.text();

        element.attr("id", id);
        
        newLine =
            "<li>" +
            "<a href='#"+id+"'>" +
            link +
            "</a>" +
            "</li>";

        contentSection += newLine;

    });

    contentSection +=
        "</ul>" +
        "</nav>";
    $('.content-section').prepend(contentSection);

    $(document).on("scroll", onScroll);

    $('.content-section li a').click(function (e) {

        e.preventDefault();
        $(document).off("scroll");

        $('.content-section li.active').removeClass('active');
        $(this).parent().addClass("active");

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 200, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

        
    });
        
});

function onScroll(event) {
    var scrollDistance = $(window).scrollTop() - 600;

    $('.article-body-text h2').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.content-section li.active').removeClass('active');
            $('.content-section a').parent().eq(i).addClass('active');
        }
    });

}

$(window).scroll(function () {
    $(".content-section").css("top", Math.max(50, 450 - $(this).scrollTop()));
});
