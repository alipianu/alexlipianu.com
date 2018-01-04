$(window).on("load", function () {
    var adjacent = $("#test")['0'].getBoundingClientRect().top == $("#game")['0'].getBoundingClientRect().top;
    var opened = false;

    $(window).resize(function () {
        var stillAdjacent = $("#test")['0'].getBoundingClientRect().top == $("#game")['0'].getBoundingClientRect().top;
        if (adjacent && !stillAdjacent && opened != false) {
            // pc -> mobile
            $('#' + opened + '-drop-row').css('display', 'none');
            $('#' + opened + '-drop').css('display', 'initial');
            $('#' + opened + '-fade-row').toggleClass('colfade');
        } else if (!adjacent && stillAdjacent && opened != false) {
            // mobile -> pc
            $('#' + opened + '-drop').css('display', 'none');
            $('#' + opened + '-drop-row').css('display', 'initial');
            $('#' + opened + '-fade-row').toggleClass('colfade');
        }
        adjacent = stillAdjacent;
    });

    $(function () {
        $(window).scroll(function () {
            var currentScrollTop = $(window).scrollTop();
            $('#darkfade').css('opacity', currentScrollTop / ($('#darkfade').height() - 25));

        });
    });

    $('.hitbox').on('click', function () {
        toggleHovlight(this);
        toggleGrow(this);

        if ($("#test")['0'].getBoundingClientRect().top == $("#game")['0'].getBoundingClientRect().top) {
            toggleColfade(this, false);
            toggleDrop(this, '-drop-row');
        } else {
            toggleColfade(this, true);
            toggleDrop(this, '-drop');
        }
    });

    function toggleDrop(target, idSuffix) {
        var item = $('#' + $(target).attr('id') + idSuffix);

        if (opened == $(target).attr('id')) {
            $(item).css('display', 'none');
            opened = false;
        } else {
            if (opened != false)
                $('#' + opened + idSuffix).css('display', 'none');
            $(item).css('display', 'initial');
            opened = $(target).attr('id');
        }
    }

    function toggleHovlight(target) {
        $(target).toggleClass('hovlight');
        if (opened != false && opened != $(target).attr('id')) {
            $('#' + opened).toggleClass('hovlight');
        }
    }

    function toggleGrow(target) {
        $(target).toggleClass('grow');
        if (opened != false && opened != $(target).attr('id')) {
            $('#' + opened).toggleClass('grow');
        }
    }

    function toggleColfade(target, isScreenSmall) {
        if (!isScreenSmall) {
            $('#' + $(target).attr('id') + '-fade-row').toggleClass('colfade');
            if (opened != false && opened != $(target).attr('id')) {
                $('#' + opened + '-fade').toggleClass('colfade');
                $('#' + opened + '-fade-row').toggleClass('colfade');
            }
        } else {
            if (opened != false && opened != $(target).attr('id')) {
                $('#' + opened + '-fade').toggleClass('colfade');
            }
        }
        $('#' + $(target).attr('id') + '-fade').toggleClass('colfade');
    }
});