// Harmburger Tooggle
const showSideNavBtn = document.getElementById("sidenav-btn");
const hideSideNavBtn = document.getElementById("close-sidenav-btn");
const sideNav = document.getElementById("sidenav");

// Video Slider
const videoSlider = document.getElementById("video__slider");

// Publicis Home
const publicisHome = document.getElementById("publicis__home");

// Toggle Side Navbar
function hideSideNavBar () {
    // Hide close icon
    hideSideNavBtn.classList.add("d-none");

    // Add animate nav one class
    sideNav.classList.add("animate__nav__one");

    // Remove animate nav two class
    sideNav.classList.remove("animate__nav__two");
    sideNav.classList.remove("box__shadow");
    sideNav.classList.remove("animate__sidenav");

    // Shows harmburger icon
    showSideNavBtn.classList.remove("d-none");
}

function showSideNavBar () {
    // Hide harmburger icon
    showSideNavBtn.classList.add("d-none");

    // Remove animate nav one class
    sideNav.classList.remove("animate__nav__one");

    // Add animate nav two class
    sideNav.classList.add("animate__nav__two");
    sideNav.classList.add("box__shadow");
    sideNav.classList.add("animate__sidenav");

    // Show close icon
    hideSideNavBtn.classList.remove("d-none");
}

// Start Point
let i = 0;

// Empty YouTube Links List
let ytLinks = []

// Time
let slideTime = 3000;

// Video Links List
ytLinks[0] = "assets/videos/keystone.mp4";
ytLinks[1] = "assets/videos/heineken.mp4";
ytLinks[2] = "assets/videos/2sure.mp4";
ytLinks[3] = "assets/videos/komando.mp4";
ytLinks[4] = "assets/videos/pepsi.mp4";

// Home Texts
let ytLinksTextOne = `
<div>
    <h3 class="container__text">
        Keystone Bank
    </h3>
    <h2 class="container__main__text">
        Junior
    </h2>
    <a href="/work-one" class="container__main__link">
        View Work
    </a>
</div>
`;

let ytLinksTextTwo = `
<div>
    <h3 class="container__text">
        Heineken
    </h3>
    <h2 class="container__main__text">
        More Behind The Star
    </h2>
    <a href="/work-two" class="container__main__link">
        View Work
    </a>
</div>
`;

let ytLinksTextThree = `
<div>
    <h3 class="container__text">
        2Sure
    </h3>
    <h2 class="container__main__text">
        Be The Spec
    </h2>
    <a href="/work-six" class="container__main__link">
        View Work
    </a>
</div>
`;

let ytLinksTextFour = `
<div>
    <h3 class="container__text">
        Super Komando
    </h3>
    <h2 class="container__main__text">
        Girl on Fire
    </h2>
    <a href="#" class="container__main__link">
        View Work
    </a>
</div>
`;

let ytLinksTextFive = `
<div>
    <h3 class="container__text">
        Pepsi
    </h3>
    <h2 class="container__main__text">
        Love it. Live it.
    </h2>
    <a href="/work-three" class="container__main__link">
        View Work
    </a>
</div>
`;

// Home Base Texts
let ytLinksTexts = [
    ytLinksTextOne, ytLinksTextTwo, 
    ytLinksTextThree, ytLinksTextFour, 
    ytLinksTextFive
]

// Start Video Toggling
function videoCarouselToggle() {

    // Get active navigator icon
    const sliderIcon = document.getElementById("publicis__li__icon__" + i);
    const lastSliderIcon = document.getElementById("publicis__li__icon__4");

    // Append youtube link to video src attribute
    videoSlider.src = ytLinks[i];

    // Append video texts to home
    publicisHome.innerHTML = ytLinksTexts[i];

    // Add active sign to current element
    sliderIcon.classList.add("circle__active");

    // Add height to slider icon
    sliderIcon.style.height = "4px !important;"


    // Check if iteration is greater than 0
    if (i > 0) {

        // Remove active sign from previous element sibing
        sliderIcon.parentElement.previousElementSibling.firstElementChild.classList.remove("circle__active");
        
    }

    // Check if active video is less than the ytLinks length
    if (i < ytLinks.length - 1) {
        // Move to the next
        i++;
        
        // If last slider class list contains "circle__active"
        if (lastSliderIcon.classList.contains("circle__active")) {

            // Remove the class name from the list
            lastSliderIcon.classList.remove("circle__active");
        }
    } else {
        i = 0;
    }

    
    // Set Timeout
    setTimeout("videoCarouselToggle()", slideTime);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', videoCarouselToggle);
showSideNavBtn.addEventListener("click", showSideNavBar);
hideSideNavBtn.addEventListener("click", hideSideNavBar);