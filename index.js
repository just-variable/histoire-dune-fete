let allExceptVideo = document.querySelectorAll("*")
let video = document.querySelectorAll(".video-container *, .video-container")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

allExceptVideo = Array.from(allExceptVideo);
allExceptVideo.splice(0, 10);
console.log(video)

console.log(allExceptVideo)

async function load(){
    allExceptVideo.forEach(e=>{
        e.classList.add("hidden")
    })
    await sleep(2100);
    allExceptVideo.forEach(e=>{
        e.classList.add("show")
        e.classList.remove("hidden")
    })
    video.forEach(e=>{
        e.classList.add("hidden")
    })
}

load();