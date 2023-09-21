'use client'
import { useEffect,useState } from 'react';
import { motion,useAnimation } from "framer-motion";
import { staggerContainer,textVariant2 } from '/utils/motion';

export default function Home() {

  const images = [
    'https://scontent.fcfk1-2.fna.fbcdn.net/v/t39.30808-6/334131889_590518669781782_970166301071387161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHTRpQ09dgvvZj3jQlU63SeI-M1NBrwUQAj4zU0GvBRAFyBEJX2VAlMJNv0dZsEHZI8NIvOKmhXOykwLJONB_Xy&_nc_ohc=4FdErv-Ynp4AX_5QT5V&_nc_ht=scontent.fcfk1-2.fna&oh=00_AfB0h_0MluOG-qHRcGUwq0NsyG9inhpVqF3VUvojBDJxNA&oe=6510CE9F',
    'https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/333920790_714218936919823_4635468217956786890_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEwy34AmnLBcz7un2BFRPUJ7qW0weQuJXjupbTB5C4leEmCsdeFDsPrUBS9J4t61_ozO_6m6eRfafurVpFAtBRb&_nc_ohc=Vm_WY6fvwgoAX8JWyIV&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfAb4FifUC5lty_Odl9bj6ksPJ2-fLUryI0sllQo1FzUZw&oe=65107E24',
    'https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/333044961_590339972689491_8736823339062524523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGNzZ7qJ9EXcl5K66vMrsf80wEB9QpynhvTAQH1CnKeGzuXCkVaIx1meYr7lXys-W_1Z04rAyvrq1C0xE1WbWO8&_nc_ohc=hGNAhjw_ahQAX8DVJDG&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfDdib--OVw8A9WEqIufGEqYeUHR-ZFwdiP58V3RtdaHPw&oe=650FDBA1',
    'https://scontent.fcfk1-2.fna.fbcdn.net/v/t39.30808-6/310691231_513956874068995_6140052431631418755_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHKOi8_vjVEAZqfrDRF0cOGD5EPhdYXrmwPkQ-F1heubIipiovJAgiBWfhB92P6Rq5biFjxS88BD2I2vjnw-tZU&_nc_ohc=ebS8cu_t-n0AX8pWWne&_nc_ht=scontent.fcfk1-2.fna&oh=00_AfDDmo6Or43nLhCvsY3kJOH6UpC_F4yJXx0-_Ar7LIsHsA&oe=650F72B8',
  ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % images.length
        );
      }, 5000);

      var i = 0;
var go_forward;

bg_gradient_animation();

function bg_gradient_animation() {
if(i <= 0)
  go_forward = true;
if(i >= 100)
  go_forward = false;
  
if(go_forward)
  i+=0.5;
else
  i-=0.3;

  h.style['background-image']=`linear-gradient(to right,  #2b2b2b ${i-10}%,#fff ${i}%,#2b2b2b ${i+10}%`;

requestAnimationFrame(bg_gradient_animation);
}
  
      return () => clearInterval(interval);
    }, []);

  return (
   		<motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true, amount: 0.25 }} className="content contentdiv">
			<h2 className="content__title">

      <div className=' content__title-main '>
  
      <motion.div
        variants={textVariant2}
        initial="hidden"
        whileInView="show" className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          className={`blob ${index === currentImageIndex ? 'active' : ''}`}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </motion.div>
      </div>

			<div className='content__title-sub' >
        
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
         className='txt py-4'  id="h">
Google Developer Student Club</motion.p>
      </div>

			</h2>

		</motion.div>
  )
}
