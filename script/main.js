let clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat'),
    fantasy = document.querySelector('.fantasy');
window.addEventListener('scroll', function (e) {
    clouds.forEach(el => {
        let x = window.scrollY
        let clSpeed = el.getAttribute('data-speed')
        el.style.transform = `translate(${x * clSpeed}px)`
    })
    let boatSpeed = boat.getAttribute('data-speed')
    boat.style.transform = `translate(${window.scrollY * boatSpeed}px)`
    fantasy.style.objectPosition = `0 ${window.scrollY / 10}%`
})

let header__title = document.querySelector('.header__title')
let textext = document.querySelector('.textext')
let text = header__title.innerHTML
header__title.innerHTML = ''
function typing(k = 0) {
    header__title.innerHTML += text[k]
    k++
    if (k < text.length) {
        setTimeout(() => {
            typing(k)
        }, 100);
    }
}
typing()

let paralax__box = document.querySelector('.paralax__box'),
    layer = document.querySelectorAll('.layer')
paralax__box.addEventListener('mousemove', function (e) {
    layer.forEach(el => {
        let speed = el.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 100
        let y = (window.innerHeight - e.pageY * speed) / 100
        el.style.transform = `translate(${x}px, ${y}px)`
    })
})
let timer__num = document.querySelectorAll('.timer__num')
window.addEventListener('scroll', function onScroll() {
    let timerY = document.querySelector('.timer').offsetTop
    if (timerY <= (window.scrollY + window.innerHeight)) {
        timer__num.forEach(el =>{
            const elTimer = el.getAttribute('data-timer')
            el.innerHTML = 0
            function scrollCount(k = 0) {
                el.innerHTML = k
                k++
               if (elTimer >= k) {
                   setTimeout(() => {
                    scrollCount(k)
                   }, 20);
               }
            }
            scrollCount()
        })
        this.removeEventListener('scroll', onScroll)
    }
   
})

// let paralax__title = document.querySelector('.paralax__title'),
//     inner__paralax = paralax__title.innerHTML;
//     paralax__title.innerHTML = '';


// function toCollect(arg1, arg2, i = 0) {
//     arg1.innerHTML += arg2[i]
//     i++
//     if (i < arg2.length) {
//         setTimeout(() => {
//             toCollect(i)
//         }, 100);
//     }
// }

// toCollect(paralax__title,inner__paralax)


let paralax__title = document.querySelector('.paralax__title'),
    inner__paralax = paralax__title.innerHTML;
    paralax__title.innerHTML = '';


function toCollect(i = 0) {
    paralax__title.innerHTML += inner__paralax[i]
    i++
    if (i < inner__paralax.length) {
        setTimeout(() => {
            toCollect(i)
        }, 150);
    }
}

toCollect()