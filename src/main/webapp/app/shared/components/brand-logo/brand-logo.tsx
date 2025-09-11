import React from 'react';
import './brand-logo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function BrandLogo() {
  return (
    <div className="brand-logo">
      <span className="tyse-logo rounded" />
      <span className="icons-array">
        <a href="mailto:ejortegon@tecnologiayservicioselectorales.com" className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.tecnologiayservicioselectorales.com" className="icon">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </span>
    </div>
  );
}
