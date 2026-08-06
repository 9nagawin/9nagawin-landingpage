// =============================
// 9NAGAWIN PREMIUM SCRIPT
// =============================

// Animasi saat website selesai dimuat
window.addEventListener("load", () => {

    const items = document.querySelectorAll(
        ".logo,h1,.subtitle,.btn,.banner-box,.menu,.contact,footer"
    );

    items.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";

        setTimeout(() => {

            item.style.transition = "all .7s ease";

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }, index * 150);

    });

});

// Efek hover semua tombol
document.querySelectorAll(".btn,.menu a,.wa,.tele").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px)";
        btn.style.boxShadow = "0 0 20px rgba(255,215,0,.8)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";
        btn.style.boxShadow = "";

    });

});

// Logo mengambang pelan
const logo = document.querySelector(".logo");

let y = 0;
let arah = 1;

setInterval(() => {

    if (!logo) return;

    y += arah * 0.2;

    if (y > 5) arah = -1;
    if (y < -5) arah = 1;

    logo.style.transform = `translateY(${y}px)`;

}, 30);

// Banner mengambang pelan
const banner = document.querySelector(".banner");

let by = 0;
let bdir = 1;

setInterval(() => {

    if (!banner) return;

    by += bdir * 0.15;

    if (by > 4) bdir = -1;
    if (by < -4) bdir = 1;

    banner.style.transform = `translateY(${by}px)`;

}, 30);

// Efek glow judul
const title = document.querySelector("h1");

let glow = false;

setInterval(() => {

    if (!title) return;

    if (glow) {

        title.style.textShadow =
            "0 0 10px gold";

    } else {

        title.style.textShadow =
            "0 0 10px gold, 0 0 25px rgba(255,215,0,.9)";

    }

    glow = !glow;

}, 800);