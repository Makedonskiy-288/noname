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

// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: 59.32947653701787, lng: 18.068500752641246 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map1"), {
//         zoom: 14,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//         animation: google.maps.Animation.DROP,
//     });
// }

// $.getJSON("/js/map-style_colored.json", function (data) {
//     map.setOptions({ styles: data });
// });

var coordinates = { lat: 47.212325, lng: 38.933663 },
    popupContent = this.$popupContent.html(),
    markerImage = "images/marker.png",
    zoom = 15,
    map = new google.maps.Map(document.getElementById("map1"), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true,
    }),
    infowindow = new google.maps.InfoWindow({
        content: popupContent,
    }),
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage,
    });

$.getJSON("/js/map-style_colored.json", function (data) {
    map.setOptions({ styles: data });
});
