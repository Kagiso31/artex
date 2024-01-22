import { testimonials } from "../../data";
import testimonialsBgImg from "../../assets/home/element1.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <section
      aria-labelledby="our-clients"
      className="testimonials"
      style={{ backgroundImage: `url('${testimonialsBgImg}')` }}
    >
      <div className="testimonials__text">
        <h2 id="our-clients" className="testimonials__heading">
          Our Clients
        </h2>
        <p className="testimonials__body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          alias, id repellat quasi unde reiciendis incidunt.
        </p>
      </div>

      {/* carousel */}

      <div className="testimonials-slider">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            // >= 1024px - large
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map(({ id, img, name, occupation, comment }) => (
            <SwiperSlide key={id}>
              <div key={id} className="testimonials-slider__item">
                <div className="testimonials-slider__img-container">
                  <img
                    className="testimonials-slider__img"
                    src={img}
                    alt="Testimonial Image"
                    draggable={false}
                  />
                </div>
                <h3 className="testimonials-slider__name">{name}</h3>
                <h4 className="testimonials-slider__occupation">
                  {occupation}
                </h4>
                <p className="testimonials-slider__comment">{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
