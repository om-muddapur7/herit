document.addEventListener("DOMContentLoaded", function () {
    var homeLink = document.querySelector(".navigation a:nth-child(1)");
    var eventsLink = document.querySelector(".navigation a:nth-child(2)");
    var loginLink = document.querySelector(".navigation a:nth-child(3)");
    var joinButton = document.querySelector(".content a:nth-of-type(1)");
    var donateButton = document.querySelector(".content a:nth-of-type(2)");

    var content = document.querySelector(".content");
    var events = document.querySelector(".sec");

    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();
            content.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (eventsLink) {
        eventsLink.addEventListener("click", function (event) {
            event.preventDefault();
            events.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (loginLink) {
        loginLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("login.html", "_blank"); 
        });
    }

    if (joinButton) {
        joinButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("login.html", "_blank"); 
        });
    }

    if (donateButton) {
        donateButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("donate.html", "_blank"); 
        });
    }
});
