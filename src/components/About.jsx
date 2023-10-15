import { Icon } from '@iconify/react';
import React from 'react';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';

export default function About({ data }) {
  const { imgSrc, miniTitle, title, description, funfacts, btnText, btnUrl } =
    data;
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="effect-1">
          <img
            src="/images/effect-1.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
        <div className="effect-2">
          <img
            src="/images/effect-2.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>
        <div className="row align-items-center justify-content-center gy-5">
          <div
            className="col-lg-6 col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div className="about-banner text-center">
              <img src={imgSrc} alt="Thumb" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 px-lg-5">
            <div
              className="about-text"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="section-heading">
                {miniTitle && (
                  <h6>
                    <span>{miniTitle}</span>
                  </h6>
                )}

                {title && <h2>{parser(title)}</h2>}
              </div>
              <p>{description}</p>
              <div className="review-box">
                {funfacts?.map((item, index) => (
                  <div className="r-box" key={index}>
                    <h3>
                      {item.number}
                      <span>+</span>
                    </h3>
                    <label>{item.title}</label>
                  </div>
                ))}
              </div>
              <div className="btn-bar">
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  className="px-btn"
                >
                  <span>{btnText}</span>{' '}
                  <i>
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
