window.onload = function () {
    function start(callback) {
        setTimeout(() => {
        document.querySelector(".loader").classList.remove("loader--active");
        //callback();
        }, 100);
    };
    start();

    function pageClick() {
        document.querySelectorAll(".page__click").forEach((elem) => {
            elem.addEventListener("click", (e) => {
                e.preventDefault();
                const dataName = elem.getAttribute('href');
                document.querySelector(".loader").classList.add("loader--active");
                document.querySelector("#header").classList.add("show");
                setTimeout(() => {
                    window.location.href = dataName;
                }, 2000);
            });
        });
    };
    pageClick();
    
};

// function pageClick() {
//     document.querySelectorAll(".page__click").forEach((elem) => {
//         elem.addEventListener("click", (e) => {
//             e.preventDefault();
//             const dataName = elem.getAttribute('href');
//             document.querySelector(".animation").classList.add("show");
//             document.querySelector("#header").classList.add("show");
//             setTimeout(() => {
//                 window.location.href =
//                     "http://fejoy95.dothome.co.kr/port_react/" + dataName;
//             }, 2000);
//         });
//     });a
// }
// pageClick();

//반응형 네비
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

};
navSlide();