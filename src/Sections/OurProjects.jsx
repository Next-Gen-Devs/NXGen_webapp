import React, { useState } from 'react';
import './OurProjects.css';
import WebDev from './OurServices/WebDev';

function OurProjects() {
  const [isWebDevModalOpen, setIsWebDevModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const handleHoveredOnService = (index) => {
    setHoveredService(index);
  }

  const handleHoveredOffService = () => {
    setHoveredService(null);
  }

  const openWebDevModal = () => {
    setIsWebDevModalOpen(true);
  };

  const closeWebDevModal = () => {
    setIsWebDevModalOpen(false) ;
  };

  const services = [
    {
      title: 'Web Development',
      image:'https://cdn.dribbble.com/users/2521371/screenshots/5348468/media/888df4f0bca2d55f78b4a2db4026d89f.gif',
      text: 'We create scalable, reliable, and secure custom websites and web applications. Our expert developers collaborate with you to understand your needs and craft a digital solution aligned with your goals.',
      
    },
    {
      title: 'UI/UX Design',
      image:'https://cdn.dribbble.com/users/795597/screenshots/5885477/media/edb340bba09d20e95bec4b30d9e2d174.gif',
      text: 'We design intuitive and engaging user interfaces for web and mobile applications. Our team of designers and developers work together to create a digital experience that is both functional and elegant.',
    },
    {
      title: 'Support & Maintenance',
      image:'https://infologia.in/Template/assets/img/infologia/webhosting.gif.gif',
      text: 'We provide ongoing support and maintenance the website we have created. Our team is available to help you with any issues that may arise and ensure your digital solutions are always up-to-date.',
    },
    {
      title: 'Photo and Video Editing',
      image:'https://images.squarespace-cdn.com/content/v1/57ebf869d1758ef9c9125f4e/1553039377863-IQQB1NNOMPEWNM3W2UI4/gif+1.gif?format=2500w',
      text: 'We provide photo and video editing services for your business. Our team of designers and developers work together to create a digital experience that is both functional and elegant.',
    },
  ];

  return (
    <div className="projectsContainer" id='section2'>
      <h1 className="ourProjectsTitle">
        What we <span className="offerText">offer</span>
      </h1>
      <div className="mainTextContainer">
        <p className="ourProjectMainText">
          Our team delivers end-to-end digital solutions designed to meet your
          unique needs. From web development and UI/UX design to ongoing support
          and maintenance, we provide a full spectrum of services to bring your
          digital projects to life and ensure they thrive over time. With our
          expertise, your digital success is our priority.
        </p>
      </div>

      <div className="servicesContainer">
        {services.map((service, index) => (
          <div className="service" key={index}
            onClick={() => {
              if (service.title === 'Web Development') {
                openWebDevModal();
              }
            }}
            onMouseEnter={() => handleHoveredOnService(index)}
            onMouseLeave={() => handleHoveredOffService()}
          >
            {hoveredService === index ? <><h3 className="serviceTitle"
              height={100}
              width={190}>
              {service.title}</h3>
              <p className='service-text'>{service.text}</p>
              </>
              :
              <><h3 className="serviceTitle">{service.title}</h3><img
                src={service.image}
                alt="service"
                className="serviceImage"
                height={100}
                width={190} /></>
            }</div>
        ))}
      </div>
      {isWebDevModalOpen && <WebDev isOpen={isWebDevModalOpen} onClose={closeWebDevModal} />}
    </div>
  );
}

export default OurProjects;
