import React, { useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    class Typewriter {
      constructor(element, toRotate, period) {
        this.toRotate = toRotate;
        this.element = element;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => {
          this.tick();
        }, delta);
      }
    }

    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new Typewriter(elements[i], JSON.parse(toRotate), period);
      }
    }
  }, []);

  return (
    <>
      <section className="hero-section-5 section">
        <div className="hero-content">
          <div className="heading">
            Complete Guide For Learning { "  "}
            <span className="typewrite" data-period="000" data-type='["Students.", "Teachers.", "Parents."]'>
              <span className="wrap">Students.</span>
            </span>
          </div>
          <p className="pera">Learning App for CBSE students and Test Generator for teachers to create question papers in minutes.</p>
          <div className="button">
            <a className="btn" href="/course/">Start Now</a> 
            <a className="btn btn-success" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=in.techchefs.MyCBSEGuide&amp;referrer=utm_source%3Dmycbseguide_home_banner_top%26utm_medium%3Dbutton%26utm_campaign%3Dhome">
              Install App
            </a>
          </div>
        </div>
        <div className="image">
          <img src="https://media-mycbseguide.s3.amazonaws.com/images/direct/home_top.png" alt="App preview" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
