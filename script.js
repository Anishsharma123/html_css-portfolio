function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// let lastScrollY = window.scrollY;

// document.addEventListener("scroll", () => {
//     const slantedNav = document.querySelector(".slanted-nav");
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//         // Scrolling Down → Make it straight
//         slantedNav.classList.add("straight");
//     } else {
//         // Scrolling Up → Slant it back
//         slantedNav.classList.remove("straight");
//     }

//     // Update last scroll position
//     lastScrollY = currentScrollY;
// });


let lastScrollY = window.scrollY;
let state = "slanted"; // Initial state

document.addEventListener("scroll", () => {
    const slantedNav = document.querySelector(".slanted-nav");
    let scrollY = window.scrollY;

    if (scrollY > lastScrollY && state === "slanted") {
        // Scrolling down - Straighten
        slantedNav.classList.remove("slanted");
        slantedNav.classList.add("straight");
        state = "straight";
    } else if (scrollY > lastScrollY && state === "straight") {
        // Scrolling down further - Slant again
        slantedNav.classList.remove("straight");
        slantedNav.classList.add("slanted");
        state = "slanted";
    } else if (scrollY < lastScrollY && state === "slanted") {
        // Scrolling up - Straighten again
        slantedNav.classList.remove("slanted");
        slantedNav.classList.add("straight");
        state = "straight";
    } else if (scrollY < lastScrollY && state === "straight") {
        // Scrolling up further - Slant again
        slantedNav.classList.remove("straight");
        slantedNav.classList.add("slanted");
        state = "slanted";
    }

    lastScrollY = scrollY; // Update last scroll position
});

