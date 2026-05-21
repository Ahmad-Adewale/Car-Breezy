import { Link } from "react-router-dom";

import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade
} from "swiper/modules";

import {
    ArrowRight,
    Play,
    Gauge,
    ShieldCheck,
    Sparkles
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../styles/hero.css";

/* VIDEOS */

import convertible from "../assets/videos/Convertible.mp4";
import hatchback from "../assets/videos/Hatchback.mp4";
import sedan from "../assets/videos/Sedan.mp4";
import suv from "../assets/videos/SUV.mp4";

const videoData = [

    {
        video: convertible,
        type: "Convertible",
        description:
            "Experience open-top driving with elegance and freedom.",
    },

    {
        video: hatchback,
        type: "Hatchback",
        description:
            "Compact performance engineered for modern city life.",
    },

    {
        video: sedan,
        type: "Sedan",
        description:
            "Luxury comfort and executive sophistication combined.",
    },

    {
        video: suv,
        type: "SUV",
        description:
            "Bold power designed for adventure without limits.",
    },

];

function Hero() {

    return (

        <section className="hero">

            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Autoplay,
                    EffectFade
                ]}

                navigation

                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}

                effect="fade"

                speed={1400}

                loop={true}

                className="hero-swiper"
            >

                {videoData.map((item, index) => (

                    <SwiperSlide key={index}>

                        <div className="hero-slide">

                            {/* VIDEO */}

                            <video
                                src={item.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="hero-video"
                            />

                            {/* OVERLAYS */}

                            <div className="hero-overlay"></div>

                            <div className="hero-gradient"></div>

                            {/* CONTENT */}

                            <div className="container hero-content">

                                <div className="hero-left">

                                    <span className="hero-badge">
                                        <Sparkles size={16} />

                                        Premium Automotive Experience
                                    </span>

                                    <h1>
                                        Drive The
                                        <span>
                                            Future
                                        </span>
                                    </h1>

                                    <h2>
                                        {item.type}
                                    </h2>

                                    <p>
                                        {item.description}
                                    </p>

                                    {/* BUTTONS */}

                                    <div className="hero-buttons">

                                        <Link
                                            to="/products/new"
                                            className="hero-btn primary-btn"
                                        >
                                            Explore Cars

                                            <ArrowRight size={18} />
                                        </Link>

                                        <button className="hero-btn secondary-btn">

                                            <Play size={18} />

                                            Watch Video

                                        </button>

                                    </div>

                                    {/* STATS */}

                                    <div className="hero-stats">

                                        <div className="hero-stat-card">

                                            <Gauge size={20} />

                                            <div>
                                                <h3>500+</h3>
                                                <span>
                                                    Luxury Cars
                                                </span>
                                            </div>

                                        </div>

                                        <div className="hero-stat-card">

                                            <ShieldCheck size={20} />

                                            <div>
                                                <h3>100%</h3>
                                                <span>
                                                    Trusted Dealers
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* SCROLL INDICATOR */}

                            <div className="scroll-indicator">

                                <span>
                                    Scroll Down
                                </span>

                                <div className="scroll-line"></div>

                            </div>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    );
}

export default Hero;