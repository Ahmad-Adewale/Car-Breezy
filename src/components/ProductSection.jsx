import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../styles/product-section.css";

/* IMAGES */

import New1 from "../assets/images/New/Convertibles/BMW Z41.jpeg";
import New2 from "../assets/images/New/Sedan/BMW 5 Series1.jpeg";

import Used1 from "../assets/images/Used/SUV/Toyota RAV4 1.jpeg";
import Used2 from "../assets/images/Used/Sedan/Lexus ES 1.jpeg";

import Brand1 from "../assets/images/Branded/Convertible/Audi R8 Spyder1.jpeg";
import Brand2 from "../assets/images/Branded/SUV/Audi Q81.jpeg";

const products = [
    {
        name: "New Cars",
        image: New1,
        secondImage: New2,
        link: "/products/new",
        tag: "Latest Models",
        description:
            "Explore the newest generation of premium luxury vehicles.",
    },

    {
        name: "Used Cars",
        image: Used1,
        secondImage: Used2,
        link: "/products/used",
        tag: "Best Deals",
        description:
            "Affordable certified cars with premium quality assurance.",
    },

    {
        name: "Top Brands",
        image: Brand1,
        secondImage: Brand2,
        link: "/products/brands",
        tag: "Luxury Collection",
        description:
            "Discover iconic automotive brands from around the world.",
    },
];

function ProductSection() {
    return (
        <section className="products section">

            <div className="container">

                {/* SECTION HEADER */}

                <div className="section-title">

                    <span>Premium Collection</span>

                    <h2>
                        Explore Our Cars
                    </h2>

                    <p className="products-description">
                        Experience luxury, performance,
                        and innovation in one place.
                    </p>

                </div>

                {/* SWIPER */}

                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    className="products-swiper"
                >

                    {products.map((product, index) => (

                        <SwiperSlide key={index}>

                            <Link
                                to={product.link}
                                className="product-card"
                            >

                                {/* IMAGE */}

                                <div className="product-image-wrapper">

                                    <span className="product-tag">
                                        {product.tag}
                                    </span>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image primary-image"
                                    />

                                    <img
                                        src={product.secondImage}
                                        alt={product.name}
                                        className="product-image secondary-image"
                                    />

                                </div>

                                {/* CONTENT */}

                                <div className="product-content">

                                    <h3>{product.name}</h3>

                                    <p>
                                        {product.description}
                                    </p>

                                    <div className="product-link">
                                        Explore Collection
                                    </div>

                                </div>

                            </Link>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    );
}

export default ProductSection;