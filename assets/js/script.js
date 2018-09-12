$(document).ready(function () {
    var experienceContent = {
        test: "Looking for a developer with experience in testing or developing testing frameworks and applications? Having spent two summers at <b>InFlight Corporation</b> developing internal testing tools for enterprise systems, testing serves as my backbone and one of my earliest exposures to software development. At <b>InFlight Corporation</b>, I redesigned the UI of and added Google Chrome support to an internal demoing tool, as well as added new features to an internal Fiddler debugging extension. I also developed an automated client-side black-box web application testing framework, and conducted functional testing of HTTP requests, SSO, JSON objects, and web page elements.",
        web: "Need an experienced and enthusiastic web developer on your team? At the end of my freshman year of university, I worked at <b>CareGo Tek Inc.</b> doing full-stack web development and basic database administration for a web application. On the front-end, I added new pages, styled pages with both static and dynamic layouts, incorporated new interactive elements, created components for tables and forms, and improved mobile responsiveness. On the back-end, I optimized database queries, lowered the number of database calls, reduced web page load times, and improved the efficiency of frequently used data transformations and computations. In my spare time, when I’m not busy developing and maintaining this website, I like to practice my front-end web development skills and make contributions to the web development community through <b>CodePen</b>.",
        game: "Graphics and games have always been two of my greatest interests. In my junior year of high school, my interest in games led me to create a two-player street fighter videogame called <b>Paint Street Fighter</b>. The following year, my interest in low-level graphics drew me to DirectX 12 - reading and working through <b>Frank D. Luna’s 3D Programming with DirectX 12</b>. Throughout my freshman year of university, I worked on a student design team called <b>WATonomous</b> at the University of Waterloo, where I focused on vehicle camera simulation. During this period, I also developed a steganography program, <b>Imgrypt</b>, that encrypts and decrypts messages from image pixel data."
    };

    // populate content in experience section
    for (var exp in experienceContent) {
        $('#' + exp + '-fade-row p').html(experienceContent[exp]);
        $('#' + exp + '-drop p').html(experienceContent[exp]);
    }

    // populate copyright
    $('#copyright').html('&copy ' + (new Date()).getFullYear() + ' Alexander Lipianu');

    $(window).on('scroll', function() {
        // add fade functionality to splash
        var currentScrollTop = $(window).scrollTop();
        var fadeopacity = currentScrollTop / ($('#splash-overlay').height() - 25);
        $('#splash-overlay').css('opacity', fadeopacity);

        // animate elements if on screen
        $('.skill-bar:not(.animated), .phrase:not(.animated)').each(function() {
            if (isElemVisible(this)) $(this).addClass('animated');
        });
    });

    // add functionality to experience section
    $(window).on("load", function () {
        var adjacent = $("#test")['0'].getBoundingClientRect().top == $("#game")['0'].getBoundingClientRect().top;
        var opened = false;

        $(window).resize(function () {
            var stillAdjacent = $("#test")['0'].getBoundingClientRect().top == $("#game")['0'].getBoundingClientRect().top;
            if (adjacent && !stillAdjacent && opened != false) {
                // pc -> mobile
                $('#' + opened + '-drop-row').css('display', 'none');
                $('#' + opened + '-drop').css('display', '');
                $('#' + opened + '-fade-row').toggleClass('colfade');
            } else if (!adjacent && stillAdjacent && opened != false) {
                // mobile -> pc
                $('#' + opened + '-drop').css('display', 'none');
                $('#' + opened + '-drop-row').css('display', '');
                $('#' + opened + '-fade-row').toggleClass('colfade');
            }
            adjacent = stillAdjacent;
        });

        $(document).on('click', '.hitbox', function () {
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
                $(item).css('display', '');
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

    function isElemVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

});