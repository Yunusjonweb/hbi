import React from "react";
import Phone from "../../assets/images/phone.png";
import Clock from "../../assets/images/clock.png";
import Telegram from "../../assets/images/telegram.png";
import Instagram from "../../assets/images/instagram.png";
import Twiter from "../../assets/images/twiter.png";
import Facebook from "../../assets/images/facebook.png";
import YouTube from "../../assets/images/youtube.png";
import Bank from "../../assets/images/bank.png";
import SSP from "../../assets/images/ssp.png";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <ul className="flex align-center jutify-between">
            <li>
              <a href="#" className="active">
                Главная
              </a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Тренинги</a>
            </li>
            <li>
              <a href="#">Мероприятия</a>
            </li>
            <li>
              <a href="#">Опросы</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="row contact">
          <div className="phone_clock">
            <div className="phone">
              <img src={Phone} alt="Phone" />
              +998 (94) 638 33 33
            </div>
            <div className="clock">
              <img src={Clock} alt="Clock" />
              Пн-Сб. 9:00—18:00, Вс: выходной
            </div>
          </div>
          <div className="socials">
            <a href="#" className="social">
              <img src="" alt="" />
            </a>
            <a href="#" className="social">
              <img src={Facebook} alt="Facebook icon" />
            </a>
            <a href="#" className="social">
              <img src={Instagram} alt="Instagram icon" />
            </a>
            <a href="#" className="social">
              <img src={Telegram} alt="Telegram icon" />
            </a>
            <a href="#" className="social">
              <img src={YouTube} alt="YouTube icon" />
            </a>
            <a href="#" className="social">
              <img src={Twiter} alt="Twiter icon" />
            </a>
          </div>
        </div>
        <div className="row logos">
          <img src={SSP} alt="ssp logo" />
          <img src={Logo} alt="logo" />
          <img src={Bank} alt="bank logo" />
        </div>
        <div className="row copyright">
          <div className="copy">
            © 2023 “Hududiy Biznes Inkubator” Все права защищены.
          </div>
          <div className="author">
            Разработка сайта —{" "}
            <a href="https://t.me/yunusbekxabibullayev">YunusbekDev</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
