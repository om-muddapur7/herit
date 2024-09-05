document.addEventListener("DOMContentLoaded", function () {
    var homeLink = document.querySelector("nav ul li:first-child a");
    var templesLink = document.querySelector("nav ul li:nth-child(2) a");
    var aboutLink = document.querySelector("nav ul li:nth-child(4) a");
    var exploreButton = document.querySelector(".content a");

    var content2 = document.querySelector(".content2");
    var temples = document.querySelector(".cards");
    var about = document.querySelector(".footer");

    var items = document.querySelectorAll('.item'); 

    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        content2.scrollIntoView({ behavior: "smooth" });
    });

    templesLink.addEventListener("click", function (event) {
        event.preventDefault();
        temples.scrollIntoView({ behavior: "smooth" });
    });

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        about.scrollIntoView({ behavior: "smooth" });
    });

    exploreButton.addEventListener("click", function (event) {
        event.preventDefault();
        content2.scrollIntoView({ behavior: "smooth" });
    });

    const cardLinks = {
        'c1': 'kedarnath.html',
        'c2': 'murudeshwar.html',
        'c3': 'somanath.html',
        'c4': 'jaganath.html',
        'c5': 'nageshwar.html',
        'c6': 'dwarka.html',
        'c7': 'padmanabhaswamy.html',
        'c8': 'rameshwaram.html',
        'c9': 'golden_temple.html',
        'c10': 'badrinath.html',
        'c11': 'dharmasthala.html',
        'c12': 'kandariya_mahadev.html'
    };

    
    Object.keys(cardLinks).forEach(function(cardClass) {
        const card = document.querySelector(`.${cardClass}`);
        if (card) {
            card.addEventListener('click', function() {
                window.location.href = cardLinks[cardClass];
            });
        }
    });

    const sections = {
        'i1': '',
        'i2': '',
        'i3': '',
        'i4': '',
        'i5': 'p_arts.html',
        'i6': '',
        'i7': '',
        'i8': '',
        'i9': '',
        'i10': '',
        'i11': '',
        'i12': ''
    };

    
    Object.keys(sections).forEach(function(cardClass) {
        const sec = document.querySelector(`.${cardClass}`);
        if (sec) {
            sec.addEventListener('click', function() {
                window.location.href = sections[cardClass];
            });
        }
    });

});

