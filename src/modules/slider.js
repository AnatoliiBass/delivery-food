import Swiper, { Autoplay, Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination, Autoplay])

const slider = () => {

   const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
         delay: 2500,
      },
      speed: 800,
      pagination: {
         el: '.swiper-pagination',
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   })

}

export default slider