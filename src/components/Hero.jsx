import { Icon } from '@iconify/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import SocialBtns from './SocialBtns';

export default function Hero({ data, socialData }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } =
    data;
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{name}</span>
              </h6>

              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {heading}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <TypeAnimation
                  sequence={typingText}
                  speed={0}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {description}
              </p>
              <div
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn"
                >
                  <span>{btnText}</span>{' '}
                  <i className="d-flex">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
                <SocialBtns
                  socialBtns={socialData}
                  variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hs-banner">
              <img src={imgUrl} title alt="Admin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
