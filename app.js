'use strict'
;(function () {
    var max = 0
    var timer = setInterval(function () {
        getElIndex()
        setProgress()
    }, 4000)
    function getElIndex() {
        let elAry = []
        for (let i = 0; i < max; i++) {
            let el = document.querySelector(`[data-index='${i}']`)
            let index = el.dataset.index - 1 < 0 ? max - 1 : el.dataset.index - 1
            elAry.push({ el, index })
        }
        changeCard(elAry)
    }
    function changeCard(ary) {
        ary.forEach((item) => {
            item.el.dataset.index = item.index
            let elText = item.el.querySelector('.card_textt')
            // elText.querySelector('.card__text-lg').style.display = 'none'
            // elText.querySelector('.card__text-sm').style.display = 'none'
            TweenMax.to('[data-index="0"] .card_textt .card__text-lg', 0.5,{
                y: 400,
                display: 'none',
                ease: Expo.easeInOut
            })
            TweenMax.to('[data-index="0"] .card_textt .card__text-sm', 0.5,{
                y: 400,
                display: 'none',
                ease: Expo.easeInOut
            })
            // elText.style = ''
        })
        setTextPosition()
    }

    function setTextPosition() {
        setTimeout(function () {
            let txt = document.querySelector('[data-index="0"] .card_textt');
            // let txtLg = document.querySelector('[data-index="0"] .card_textt .card__text-lg');
            // txtLg.style.fontSize = '32px'
            // txt.style.bottom = '150%';
            // txt.style.opacity = 1;
            // TweenMax.to('[data-index="0"] .card_textt', 1,{
            //     delay: 0.2,
            //     y: 0,
            //     opacity: 1,
            //     ease: Expo.easeInOut
            // }) 
            TweenMax.to('[data-index="0"] .card_textt .card__text-sm', 1,{
                delay: 0.2,
                y: 0,
                display: 'flex',
                ease: Expo.easeInOut
            }) 
            TweenMax.to('[data-index="0"] .card_textt .card__text-lg', 1,{
                delay: 0.2,
                y: 0,
                display: 'flex',
                ease: Expo.easeInOut
            }) 
        }, 1500)
    }
    function setProgress() {
        let progress = document.querySelector('.progress')
        setTimeout(function () {
            progress.style.left = 0
            progress.style.right = 'auto'
            progress.style.width = '100%'
        }, 2000)
        setTimeout(function () {
            progress.style.left = 'auto'
            progress.style.right = 0
            progress.style.width = 0
        }, 3000)
    }
    function init(target) {
        let item = document.querySelector(target).querySelectorAll('.card')
        max = item.length
        item.forEach((el, i) => {
            el.dataset.index = i
        })
        setProgress()
        setTextPosition()
    }
    init('#app')
})()
