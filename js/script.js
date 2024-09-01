// var tl = gsap.timeline();
// tl
// .to(".bg-one", {duration: 3, scale:1,  transformOrigin:"50% 50%"})
// .to(".info-one", {duration: 1, display:'block'}, "-=2")
// .to(".p-one", {duration: 0.5, y:-10}, "-=1.5")

// // gsap.to(".bg-one", {delay: 2, duration: 1, scale:1,  transformOrigin:"50% 50%"});
// // gsap.to(".info-one", {delay: 2, duration: 1, display:'block'});
// // gsap.to(".p-one", {delay: 3, duration: 0.5, y:-10});

const closeModal = () => {
    console.log('hello');
    let modal = document.querySelector('.modal');
    modal.style.display="none";
}

const openModal = () => {
    let modal = document.querySelector('.modal');
    modal.style.display="block";
}