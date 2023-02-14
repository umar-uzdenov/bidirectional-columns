document.querySelectorAll(".swiper").forEach((element, index) => {
    console.log({element, index})

    window[`slider${index + 1}`] = new Swiper(element, {
        freeMode: true,
        centeredSlides: true,
        direction: "vertical",
        mousewheel: true,
        slidesPerView: 1.75,
        slidesOffsetBefore: -150,
    })
})

bindSwipers(...[1, 2, 3, 4].map(number => window[`slider${number}`]))