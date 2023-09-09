import React from "react";
import Train from "../../assets/images/train.png";
import Uzum from "../../assets/images/uzum.png";
import Mentor from "../../assets/images/mentor (1).png";
import Mentors from "../../assets/images/mentor (2).png";
import Calendar from "../../assets/images/calendar.png";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow_right.svg";

function Card() {
  return (
    <>
      <div className="training_cards">
        <div className="training_card">
          <div className="card_image">
            <img src={Train} alt="train image" />
          </div>
          <div className="card_text">
            <div className="card_title">Бизнес тренинг от Давр Банк</div>
            <div className="mentors_btn">
              <div className="mentors">
                <div className="mentors_image">
                  <img src={Mentor} alt="Mentors image" />
                </div>
                <div className="mentor_info">
                  <span className="name">Менторы</span>
                  <span className="count">3 ментора</span>
                </div>
              </div>
              <a href="#" className="btn r-12 bg-purple">
                Участвовать <ArrowRight />
              </a>
            </div>
            <p className="description">
              Бизнес-тренинг для-предпринимателей в рамках программы “Женщины в
              бизнесе” в Центральной Азии.
            </p>
            <p className="location">Ташкент, Гостиница "Intercontinental"</p>
            <div className="date_btn">
              <div className="date_info">
                <img src={Calendar} alt="Calendar" />
                <span>
                  c <strong>05.06.2023</strong>
                </span>
                <span>
                  по <strong>15.06.2023</strong>
                </span>
              </div>
              <a href="#" className="btn">
                {" "}
                Подробнее <ArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="training_card">
          <div className="card_image">
            <img src={Uzum} alt="Uzum image" />
          </div>
          <div className="card_text">
            <div className="card_title">
              Uzum проводит бизнес тренинг для своих предпринимателей
            </div>
            <div className="mentors_btn">
              <div className="mentors">
                <div className="mentors_image">
                  <img src={Mentor} alt="Mentors image" />
                </div>
                <div className="mentor_info">
                  <span className="name">Менторы</span>
                  <span className="count">2 ментора</span>
                </div>
              </div>
              <a href="#" className="btn r-12 bg-purple">
                {" "}
                Участвовать <ArrowRight />
              </a>
            </div>
            <p className="description">
              Бизнес-тренинг для-предпринимателей в рамках...
            </p>
            <p className="location">Ташкент, Гостиница "Intercontinental"</p>
            <div className="date_btn">
              <div className="date_info">
                <img src={Calendar} alt="Calendar" />
                <span>
                  c <strong>05.06.2023</strong>
                </span>
                <span>
                  по <strong>15.06.2023</strong>
                </span>
              </div>
              <a href="#" className="btn">
                {" "}
                Подробнее <ArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="training_card">
          <div className="card_image">
            <img src={Uzum} alt="Uzum image" />
          </div>
          <div className="card_text">
            <div className="card_title">
              Uzum проводит бизнес тренинг для своих предпринимателей
            </div>
            <div className="mentors_btn">
              <div className="mentors">
                <div className="mentors_image">
                  <img src={Mentor} alt="Mentors image" />
                </div>
                <div className="mentor_info">
                  <span className="name">Менторы</span>
                  <span className="count">2 ментора</span>
                </div>
              </div>
              <a href="#" className="btn r-12 bg-purple">
                {" "}
                Участвовать <ArrowRight />
              </a>
            </div>
            <p className="description">
              Бизнес-тренинг для-предпринимателей в рамках...
            </p>
            <p className="location">Ташкент, Гостиница "Intercontinental"</p>
            <div className="date_btn">
              <div className="date_info">
                <img src={Calendar} alt="Calendar" />
                <span>
                  c <strong>05.06.2023</strong>
                </span>
                <span>
                  по <strong>15.06.2023</strong>
                </span>
              </div>
              <a href="#" className="btn">
                {" "}
                Подробнее <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
