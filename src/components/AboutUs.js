import { Button } from '@material-ui/core';
import React from 'react';
import './AboutUs.scss'

const AboutUs = () => {
   return (
      <section className="about">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 about__img">
                  <img src={process.env.PUBLIC_URL + '/img/1.jpg'} alt='About us' />
                  {/* <Button color="primary">
                     Şimdi Sipariş Ver
                  </Button> */}
               </div>
               <div className="col-lg-6 about__us">
                  <h1>Marka Baklava</h1>
                  <p>
                     Gaziantep’in yüzyıllardır tüm dünyaya sunduğu eşsiz tatları bizde 40 yıllık tecrübesiyle ustamız Abdulkadir AYDOĞAN ve ekibinin elinden sizlere sunmaktan mutluluk duyuyoruz. Ürünlerimizin tümü taş fırınlarda pişirilmekte ve doğal şeker şerbetiyle tatlandırılmaktadır. Kullandığımız hammaddelerin tümü büyük bir özenle seçilerek üretim sürecine dahil edilmektedir. Tesislerimiz hijyen koşulları açısından standartların üzerinde olmakla birlikte çalışanlarımız üretim sürecinin her anında temizliğe büyük özen göstermektedir. Tesislerimiz ilgili personelimiz tarafından hijyen ve kalite denetimi açısından 24 saat kamerayla izlenmektedir.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutUs
