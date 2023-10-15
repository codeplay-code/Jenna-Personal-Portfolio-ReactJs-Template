import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialBtns({ variant, socialBtns }) {
  return (
    <div
      className={`social-icon ${variant ? variant : ''}`}
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="300"
    >
      {socialBtns?.map((item, index) => (
        <Link
          className={item.iconBgClass}
          to={item.href}
          key={index}
          target="_blank"
        >
          <Icon icon={item.icon} />
        </Link>
      ))}
    </div>
  );
}
