import React from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';

export default function Testimonial({ data }) {
  const { sectionHeading, allTestimonial } = data;
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <section className="section effect-section pb-0">
      <div className="effect-3">
        <img src="/images/effect-3.svg" title alt="" />
      </div>
      <div className="effect-4">
        <img src="/images/effect-4.svg" title alt="" />
      </div>
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
          variant="text-center"
        />
        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="300">
          <Slider {...settings}>
            {allTestimonial?.map((item, index) => (
              <div key={index}>
                <div className="testimonial-box">
                  <div className="t-user">
                    <img src={item.avatarImg} alt="Avatar" />
                  </div>
                  <div className="t-text">{item.reviewText}</div>
                  <div className="t-person">
                    <h6>{item.avatarName}</h6>
                    <span>{item.avatarCompany}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
