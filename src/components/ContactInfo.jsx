import React from 'react';

export default function ContactInfo({ contactInfoData }) {
  return (
    <div className="contact-info">
      {contactInfoData.map((item, index) => (
        <div
          className="contact-info-in"
          key={index}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={index * 100}
        >
          <label>{item.title}</label>
          {item.email && <a href={`mailto:${item.email}`}>{item.email}</a>}
          {item.tel && <a href={`tel:${item.tel}`}>{item.tel}</a>}
        </div>
      ))}
    </div>
  );
}
