import React from "react";
import Card from "../components/Card";
import { ReactComponent as ArrowLeft } from "../../assets/images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/arrowRight.svg";

function Train() {
  return (
    <>
      <section className="train section">
        <div className="container">
          <div className="training_top">
            <div className="title_all">
              <div className="title">Тренинги</div>
              <a className="all" href="#">
                Все тренинги
              </a>
            </div>

            <div className="next_pre">
              <a href="#" id="pre">
                <ArrowLeft />
              </a>
              <a href="#" id="next">
                <ArrowRight />
              </a>
            </div>
          </div>
          <Card />
        </div>
      </section>
    </>
  );
}

export default Train;
