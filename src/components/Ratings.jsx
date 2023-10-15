import { Icon } from '@iconify/react';
import React from 'react';

export default function Ratings({ ratings }) {
  return (
    <div className="ratings">
      <div className="rating">
        <i>
          <Icon icon="bi:star" />
        </i>
        <i>
          <Icon icon="bi:star" />
        </i>
        <i>
          <Icon icon="bi:star" />
        </i>
        <i>
          <Icon icon="bi:star" />
        </i>
        <i>
          <Icon icon="bi:star" />
        </i>
      </div>
      <div className="rating" style={{ width: `${ratings * 20}%` }}>
        <i>
          <Icon icon="bi:star-fill" />
        </i>
        <i>
          <Icon icon="bi:star-fill" />
        </i>
        <i>
          <Icon icon="bi:star-fill" />
        </i>
        <i>
          <Icon icon="bi:star-fill" />
        </i>
        <i>
          <Icon icon="bi:star-fill" />
        </i>
      </div>
    </div>
  );
}
