import "../styles/index.scss"
import nav from "./nav.js"
nav(2)

const imagesContainer = document.querySelector('.content__left')
const images = imagesContainer.querySelectorAll('img')
let zIndexCount = 0;
let imageCount = 0;
imagesContainer.addEventListener('click', (event) => {
    // console.log(event.target)
    console.log(imageCount)
    if(imageCount < images.length){
        // Remove the animations on each image
        images.forEach(image => {
            image.style.animation = ""
        })

        images[imageCount].style.zIndex = zIndexCount;
        images[imageCount].style.animation = "fadeIn .5s ease-in-out";
        zIndexCount++;
        imageCount++;
    } else if(imageCount > images.length-1){
        imageCount = 0;
    }
})

imagesContainer.addEventListener('mouseenter', (event) => {
    console.log('Mouse entered')
    images.forEach(image => {
        image.style.transform = `translate(${25 * (Math.floor(Math.random() * 5)) - 50}px, ${25 * (Math.floor(Math.random() * 5)) - 50}px)`
    })
})

imagesContainer.addEventListener('mouseleave', (event) => {
    console.log('Mouse left')
    images.forEach(image => {
        image.style.transform = 'translate(0, 0)'
    })
})