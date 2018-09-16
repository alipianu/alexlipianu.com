// Before you read through my code (hi stranger!):
// - I used very minimal use of jQuery, wanted to stick as close as possible to vanilla JS
// - my site uses very basic dom manipulation and searching, so I'd prefer not having to load any extra unneccessary
//   bloated dependencies to do things that can be easily accomplished with vanilla JS
// - however, with that being said, but for the time being I still need to include the jQuery dependency anyway
//   for Bootstrap 4
// - because I used very minimal jQuery, in the future, if I decide to remove Bootstrap and go with pure CSS,
//   then simultaneously removing the jQuery dependency would be very easy

$(document).ready(function () {
    // return true if experience section is vertically displayed
    function isExpVertical() {
        var exp = document.getElementsByClassName("collapsable");
        return exp[0].getBoundingClientRect().top == exp[exp.length-1].getBoundingClientRect().top;
    }

    // returns true if element is visible by used
    function isElemVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    // toggles the class on or off (equivalent to $(elem).toggle(className))
    function toggleClass(elem, className) {
        if (elem.classList) {
            elem.classList.contains(className) ? elem.classList.remove(className) : elem.classList.add(className);
        } else {
            if (new RegExp(className).test(elem.className))
                elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            else
                elem.className += ' ' + className;
        }
    }

    // animates all animatable elements that are visible by the user
    function animateOnScreen() {
        // add fade functionality to splash
        var splashOverlay = document.querySelector('#splash > div');
        splashOverlay.style.opacity = window.pageYOffset / (splashOverlay.offsetHeight);

        // add animation to skill bars and phrase
        if (!isAllAnimated) {
            var animateElems = document.querySelectorAll('.skill-bar:not(.animated), .phrase:not(.animated)');
            for (i = 0; i < animateElems.length; ++i) {
                if (isElemVisible(animateElems[i])) toggleClass(animateElems[i], 'animated');
            }
            isAllAnimated = animateElems.length === 0;
        }
    }

    // taken straight form stack overflow:
    //    https://stackoverflow.com/questions/6927637/addeventlistener-in-internet-explorer
    function addEvent(evnt, elem, func) {
        console.log('a');
        if (elem.addEventListener)  // W3C DOM
           elem.addEventListener(evnt,func,false);
        else if (elem.attachEvent) { // IE DOM
           elem.attachEvent("on"+evnt, func);
        }
        else { // Not much to do
           elem[evnt] = func;
        }
     }

    var isAllAnimated = false;
    var displayVertical = isExpVertical();
    var openedId = null; // id of html element currently opened

    var experienceContent = {
        test: "Looking for a developer with experience in testing or developing testing frameworks and applications? Having spent two summers at <b>InFlight Corporation</b> developing internal testing tools for enterprise systems, testing serves as my backbone and one of my earliest exposures to software development. At <b>InFlight Corporation</b>, I redesigned the UI of and added Google Chrome support to an internal demoing tool, as well as added new features to an internal Fiddler debugging extension. I also developed an automated client-side black-box web application testing framework, and conducted functional testing of HTTP requests, SSO, JSON objects, and web page elements.",
        web: "Need an experienced and enthusiastic web developer on your team? At the end of my freshman year of university, I worked at <b>CareGo Tek Inc.</b> doing full-stack web development and basic database administration for a web application. On the front-end, I added new pages, styled pages with both static and dynamic layouts, incorporated new interactive elements, created components for tables and forms, and improved mobile responsiveness. On the back-end, I optimized database queries, lowered the number of database calls, reduced web page load times, and improved the efficiency of frequently used data transformations and computations. In my spare time, when I’m not busy developing and maintaining this website, I like to practice my front-end web development skills and make contributions to the web development community through <b>CodePen</b>.",
        game: "Graphics and games have always been two of my greatest interests. In my junior year of high school, my interest in games led me to create a two-player street fighter videogame called <b>Paint Street Fighter</b>. The following year, my interest in low-level graphics drew me to DirectX 12 - reading and working through <b>Frank D. Luna’s 3D Programming with DirectX 12</b>. Throughout my freshman year of university, I worked on a student design team called <b>WATonomous</b> at the University of Waterloo, where I focused on vehicle camera simulation. During this period, I also developed a steganography program, <b>Imgrypt</b>, that encrypts and decrypts messages from image pixel data."
    };

    animateOnScreen();

    // populate content in experience section
    for (var exp in experienceContent) {
        document.querySelector('#' + exp + '-drop p').innerHTML = experienceContent[exp];
        document.querySelector('#' + exp + '-fade-row p').innerHTML = experienceContent[exp];
    }

    // populate copyright
    document.getElementById('copyright').innerHTML = '&copy ' + (new Date()).getFullYear() + ' Alexander Lipianu';

    // add onclick to experience section
    var collapsable = document.getElementsByClassName('collapsable');
    for (i = 0; i < collapsable.length; ++i) {
        collapsable[i].addEventListener("click", function() {
            var idSuffix = displayVertical ? '-row' : '';

            if (openedId) {
                document.getElementById(openedId + '-drop' + idSuffix).style.display = 'none';
                if (openedId !== this.id) {
                    toggleClass(document.getElementById(openedId), 'hovlight');
                    if (displayVertical) toggleClass(document.getElementById(openedId + '-fade'), 'colfade');
                    toggleClass(document.getElementById(openedId + '-fade' + idSuffix), 'colfade');
                    document.getElementById(this.id + '-drop' + idSuffix).style.display = '';
                    openedId = this.id;
                } else {
                    openedId = null;
                }
            } else {
                console.log(document.getElementById(this.id + '-drop' + idSuffix));
                document.getElementById(this.id + '-drop' + idSuffix).style.display = '';
                openedId = this.id;
            }

            toggleClass(this, 'hovlight');
            toggleClass(document.getElementById(this.id + '-fade'), 'colfade');
            if (displayVertical) toggleClass(document.getElementById(this.id + '-fade' + idSuffix), 'colfade');
        });
    };

    // add onscroll functionality
    addEvent('scroll', window, function() {
        animateOnScreen();
    });

    // add on resize functionality to experience section
    addEvent('resize', window, function () {
        animateOnScreen();
        var x = isExpVertical();
        if (openedId && x !== displayVertical) {
            document.getElementById(openedId + '-drop-row').style.display = !x ? 'none' : '';
            document.getElementById(openedId + '-drop').style.display = !x ? '' : 'none';
            toggleClass(document.getElementById(openedId + '-fade-row'), 'colfade');
        }
        displayVertical = x;
    });
});