import React from "react";
import { ReactComponent as HeroImage } from "../../assets/images/hero.svg";

function Hero() {
  return (
    <>
      <section className="hero section">
        <div className="container">
          <div className="flex align-center jutify-between">
            <div className="hero_info">
              <div className="info_title">
                Создай <span>свой бизнес</span> вместе с нами
              </div>
              <p className="info_description">
                Станьте резидентом нашего бизнес инкубатора и получите больше
                возможностей
              </p>
              <div className="info_buttons">
                <a href="#" className="btn active">
                  Стать резидентом
                </a>
                <a href="#" className="btn">
                  Стать ментором
                </a>
              </div>
            </div>
            <div className="hero_image">
              <HeroImage className="img" />
            </div>
          </div>
          <div className="hero_counter">
            <div className="item_counter">
              <div className="count">18 500+</div>
              <div className="name">Резидентов</div>
            </div>
            <div className="item_counter">
              <div className="count">36+</div>
              <div className="name">Менторов</div>
            </div>
            <div className="item_counter">
              <div className="count">24 000+</div>
              <div className="name">Выпускников</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
