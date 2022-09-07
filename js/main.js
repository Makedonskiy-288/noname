const swup = new Swup({
    plugins: [new SwupScrollPlugin()],
    animateScroll: {
        betweenPages: true,
        samePageWithHash: true,
        samePage: true,
    },
});

let navLinks = document.querySelectorAll(".header-nav__list-link");

$(document).on("click", ".nav__list-link", function (e) {
    let id = $(this).attr("id");
    navLinks.forEach((a) => {
        if ($(a).attr("id") == id) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });
});

$(document).on("click", ".active-page__link, .logo, .policy", function (e) {
    navLinks.forEach((a) => a.classList.remove("active"));
});

$(document).on("click", ".active-page__link", function (e) {
    navLinks.forEach((a) => {
        if ($(a).attr("id") == 1) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });
});

$(document).on("click", ".product-list-item__link", function (e) {
    navLinks.forEach((a) => {
        if ($(a).attr("id") == 2) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });
});

const $header = $(".header");
const $goTop = $(".goTop-button");
let screenHeight = window.screen.height;
let prevScroll;
let lastShowPos;

$(window).on("scroll", function () {
    const scrolled = $(window).scrollTop();

    if (scrolled > screenHeight && scrolled > prevScroll) {
        $header.addClass("header-out");
        lastShowPos = scrolled;
    } else if (scrolled <= Math.max(lastShowPos - screenHeight / 4, 0)) {
        $header.removeClass("header-out");
    }

    if (scrolled > screenHeight / 2) {
        $goTop.removeClass("goTop-button--hidden");
    } else {
        $goTop.addClass("goTop-button--hidden");
    }

    prevScroll = scrolled;
});
