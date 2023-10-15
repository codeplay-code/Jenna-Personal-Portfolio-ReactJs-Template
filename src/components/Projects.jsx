import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('image');
  const [modalData, setModalData] = useState({});
  const { sectionHeading, allProjects } = data;
  const handelProjectDetails = (item, itemType) => {
    if (itemType === 'image') {
      setModalData(item);
    } else {
      setModalData(item);
    }
    setModalType(itemType);

    setModal(!modal);
    console.log(modalType);
  };

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
    variableWidth: true,
  };

  return (
    <>
      <section className="project-section section gray-bg" id="project">
        <div className="container">
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          <div
            className="full-width"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Slider {...settings} className="slider-gap-24">
              {allProjects?.map((item, index) => (
                <div key={index} style={{ width: '416px' }}>
                  <div className="project-box">
                    <div className="project-media">
                      <img src={item.thumbUrl} alt="Thumb" />
                      <span
                        className="gallery-link"
                        onClick={() => handelProjectDetails(item, 'image')}
                      >
                        <i>
                          <Icon icon="bi:plus" />
                        </i>
                      </span>
                    </div>
                    <div className="project-body">
                      <div className="text">
                        <h5>{item.title}</h5>
                        <span>{item.subTitle}</span>
                      </div>
                      <div className="link">
                        <span
                          className="p-link"
                          onClick={() => handelProjectDetails(item, 'details')}
                        >
                          <Icon icon="bi:arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(!modal)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(!modal)}
              >
                ×
              </button>
              {modalType === 'image' ? (
                <img src={modalData.thumbUrl} alt="Thumbnail" />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
