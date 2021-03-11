import axios from 'axios';

export default axios.create({
   baseURL: 'http://localhost:3001'
})

export const baklavalar = [
   {
      id: 1,
      title: "Fıstıklı Baklava",
      price: {
         _1kg: 120,
         _2kg: 195,
         _3kg: 290
      },
      pic: "/img/1-fistikli-baklava.jpg"
   },
   {
      id: 2,
      title: "Kuru Baklava",
      price: {
         _1kg: 110,
         _2kg: 235,
         _3kg: 350
      },
      pic: "/img/2-kuru-baklava.jpg"
   },
   {
      id: 3,
      title: "Fıstıklı Baklava",
      price: {
         _1kg: 110,
         _2kg: 235,
         _3kg: 350
      },
      pic: "/img/3-ozel-kare-baklava.jpg"
   },
   {
      id: 4,
      title: "Midye Baklava",
      price: {
         _1kg: 140,
         _2kg: 320,
         _3kg: 510
      },
      pic: "/img/4-midye.jpg"
   },
   {
      i: 5,
      title: "Şöbiyet",
      price: {
         _1kg: 140,
         _2kg: 295,
         _3kg: 440
      },
      pic: "/img/5-sobiyet.jpg"
   },
   {
      id: 6,
      title: "Havuç dilimi",
      price: {
         _1kg: 120,
         _2kg: 255,
         _3kg: 380
      },
      pic: "/img/6-havuc-dilimi.jpg"
   },
   {
      id: 7,
      title: "Dolama",
      price: {
         _1kg: 150,
         _2kg: 315,
         _3kg: 470
      },
      pic: "/img/7-dolama.jpg"
   },
   {
      id: 8,
      title: "Dürüm",
      price: {
         _1kg: 130,
         _2kg: 275,
         _3kg: 410
      },
      pic: "/img/8-durum-baklava.jpg"
   },
   {
      id: 9,
      title: "Fıstıklı Burma Kadayıf",
      price: {
         _1kg: 90,
         _2kg: 230,
         _3kg: null
      },
      pic: "/img/9-fistikli-burma-kadayif.jpg"
   },
   {
      id: 10,
      title: "Fıstıklı Düz Kadayıf",
      price: {
         _1kg: 70,
         _2kg: 155,
         _3kg: 230
      },
      pic: "/img/10-fistikli-duz-kadayif.jpg"
   },
   {
      id: 11,
      title: "Tuzlu Antep Fıstığı",
      price: {
         _1kg: 45,
         _2kg: 90,
         _3kg: null
      },
      pic: "/img/11-antep-fistigi.jpg"
   }
]