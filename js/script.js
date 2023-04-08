
// navbar //

// $(document).ready(function () {
//     var scroll_start = 0;
//     var startchange = $('#startchange');
//     var offset = startchange.offset();
//     if (startchange.length) {
//         $(document).scroll(function () {
//             scroll_start = $(this).scrollTop();
//             if (scroll_start > offset.top) {
//                 $(".navbar").css('background-color', '#0106a3');
//             } else {
//                 $('.navbar').css('background-color', 'transparent');
//             }
//         });
//     }
//     $(".navbar").click(function () {
//         $(".navbar").css('background-color', '#0106a3');
//     });
// });

const myNav = document.querySelector(".navbar")
const toggleBtn = document.querySelector(".navbar-toggler")
const scrollBtn = () => {
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        myNav.classList.add("navbar-bg-color");
    }
    else if (toggleBtn.classList.contains('collapsed') && (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0)) {
        myNav.classList.remove("navbar-bg-color");
    }
}
const navBtn = () => {
    myNav.classList.remove("navbar-bg-color");
    myNav.classList.add("navbar-bg-color");
};
if (toggleBtn.classList.contains('collapsed')) {
    myNav.classList.remove("navbar-bg-color");
}
document.addEventListener("scroll", scrollBtn);
toggleBtn.addEventListener("click", navBtn);