
import convertible from '../assets/videos/Convertible.mp4';
import hatchback from '../assets/videos/Hatchback.mp4';
import sedan from '../assets/videos/Sedan.mp4';
import suv from '../assets/videos/SUV.mp4';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Link } from 'react-router-dom'// path to your product.js

import New1 from '../assets/images/New/Convertibles/BMW Z41.jpeg'
import New2 from '../assets/images/New/Sedan/BMW 5 Series1.jpeg'
import Used1 from '../assets/images/Used/SUV/Toyota RAV4 1.jpeg'
import Used2 from '../assets/images/Used/Sedan/Lexus ES 1.jpeg'
import Brand1 from '../assets/images/Branded/Convertible/Audi R8 Spyder1.jpeg'
import Brand2 from '../assets/images/Branded/SUV/Audi Q81.jpeg'
import AboutUs from './AboutUs';
import ContactUs from './Contact';
import { useEffect } from 'react';

const videoData = [
  {
    video: convertible,
    type: 'Convertible',
    description: 'Experience the wind in your hair with unmatched elegance.',
  },
  {
    video: hatchback,
    type: 'Hatchback',
    description: 'Compact, efficient, and perfect for the city life.',
  },
  {
    video: sedan,
    type: 'Sedan',
    description: 'Smooth and stylish rides for your everyday comfort.',
  },
  {
    video: suv,
    type: 'SUV',
    description: 'Rugged power meets premium luxury — go beyond limits.',
  },
];

function Home() {
    useEffect(() => {
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    const carousel = document.querySelector('.slider');
    const list = carousel.querySelector('.list');
    const thumbnail = carousel.querySelector('.thumbnail');
    const time = carousel.querySelector('.time');

    let thumbnailItems = thumbnail.querySelectorAll('.item');
    thumbnail.appendChild(thumbnailItems[0]);

    const timeRunning = 3000;
    const timeAutoNext = 4000;
    let runTimeOut;
    let runNextAuto = setTimeout(() => nextBtn.click(), timeAutoNext);

    function showSlider(type) {
      let sliderItems = list.querySelectorAll('.item');
      let thumbnailItems = thumbnail.querySelectorAll('.item');

      if (type === 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        carousel.classList.add('next');
      } else {
        list.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);
    }

    nextBtn.onclick = () => showSlider('next');
    prevBtn.onclick = () => showSlider('prev');
  }, []);

  const types = [
    { name: 'New', image: New1, secondImage: New2, link: '/products/new', description: "Try our beautiful section of new cars where the latest products exist" },
    { name: 'Used', image: Used1, secondImage: Used2, link: '/products/used', description: "Here you'll find our car flipping section at cheap affordable price " },
    { name: 'Brand', image: Brand1, secondImage: Brand2, link: '/products/brand', description: "A section where different brand of cars can be found" }
  ];

    
  
   

  return (
    <>

    {/* HERO SECTION */}
    <div className="slider">
      <div className="list">
        {videoData.map((item, index) => (
          <div className="item" key={index}>
            <video src={item.video} autoPlay muted loop playsInline></video>
            <div className="content">
              <div className="title">Car-Breezy</div>
              <div className="type">{item.type}</div>
              <div className="description">{item.description}</div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {videoData.map((item, index) => (
          <div className="item" key={index}>
            <video src={item.video} muted loop playsInline></video>
          </div>
        ))}
      </div>

      <div className="arrows nextPrevArrows">
        <button id="prev">←</button>
        <button id="next">→</button>
      </div>

      <div className="time"></div>
    </div>


    {/* PRODUCT SECTION */}
    <div className="product-container py-5 my-5">
      <div className="container position-relative">
        <div className="row">
          <div className="section-title mb-5 product-title text-center">
            <h2 className="fw-semibold fs-1 car-text">Explore Our Cars</h2>
            <p className="text-muted">Get the car you deserve</p>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-swiper-next",
            prevEl: ".product-swiper-prev",
          }}
          breakpoints={{
            1399: { slidesPerView: 4 },
            1199: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 1.5 },
            0: { slidesPerView: 1 },
          }}
          className="mt-4 swiper position-relative"
        >
          {types.map(type => (
            <SwiperSlide key={type.id}>
              <Link to={type.link} className="text-decoration-none">
              <div className="product-item text-center position-relative">
                <div className="product-image w-100 position-relative overflow-hidden">
                  <img src={type.image} className="img-fluid" alt={type.name} />
                  <img src={type.secondImage} className="img-fluid second-image" alt={type.name} />
                </div>
                  <div className="product-content pt-3">
                    <h3 className="title pt-1">{type.name}</h3>
                    <p>{type.description}</p>
                  </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    {/* ABOUT US SECTION */}
    <AboutUs />

    {/* ABOUT US SECTION */}
    <ContactUs />
    </>
   
  );
}

export default Home;
