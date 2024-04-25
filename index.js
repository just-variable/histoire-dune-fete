let allExceptVideo = document.querySelectorAll("*")
let video = document.querySelectorAll(".video-container *, .video-container")

let navbar = document.querySelector("nav")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

allExceptVideo = Array.from(allExceptVideo);
allExceptVideo.splice(0, 11);

console.log(allExceptVideo)

allExceptVideo.forEach(e=>{
    e.classList.add("hidden");
})
video.forEach(e=>{
    e.classList.add("hidden");
})


async function load(){

    video.forEach(e=>{
        e.classList.remove("hidden");
        e.classList.add("show");
    })

    navbar.style.display = "none"
    await sleep(3900);
    navbar.style.display = "flex"
    allExceptVideo.forEach(e=>{
        e.classList.add("show");
        e.classList.remove("hidden");
    })
    video.forEach(e=>{
        e.classList.add("hidden");
    })
}

window.addEventListener('load', function () {
    load();
  })