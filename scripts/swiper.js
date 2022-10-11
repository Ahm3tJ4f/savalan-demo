const catalog = ['wines', 'distillates']
const swiper = new Swiper('.swiper', {
    autoHeight: true,
    speed: 800,
    direction: 'horizontal',
    allowTouchMove: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            return `<li class="${className}">${catalog[index]}</li>`
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});