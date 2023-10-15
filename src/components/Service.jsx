import { Icon } from '@iconify/react';
import React from 'react';
import SectionHeading from './SectionHeading';
import Ratings from './Ratings';

export default function Service({ data }) {
  const { sectionHeading, allService } = data;
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="row gy-5">
          {allService?.map((item, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div
                className="services-box"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay={index * 100}
              >
                <div className="services-body">
                  <div className="icon">
                    <Icon icon={item.icon} />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.subTitle}</p>
                  <div className="rating-wrap">
                    <Ratings ratings={item.ratings} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
