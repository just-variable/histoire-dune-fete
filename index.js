let allExceptVideo = document.querySelectorAll("*")
let video = document.querySelectorAll(".video-container *, .video-container")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function load(){
    await sleep(100);
    allExceptVideo.forEach(e=>{
        e.classList.add("show");
        e.classList.remove("hidden");
    })
    video.forEach(e=>{
        e.classList.add("hidden");
    })
}

allExceptVideo = Array.from(allExceptVideo);
// allExceptVideo.splice(0, 10);
console.log(allExceptVideo)
allExceptVideo.splice(0, 10);

allExceptVideo.forEach(e=>{
    e.classList.add("hidden");
})

window.addEventListener("load", ()=>{
    load();
})

