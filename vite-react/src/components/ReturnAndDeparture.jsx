import React from "react";
export default function ReturnAndDeparture() {
  return (
    <div>
      <div className="ticketContainer">
        <div className="departure">
          <h2 className="from">Earth - G-001</h2>
          <p>
            Departure: <span className="departDate date">15 Dec, 2021</span>
          </p>
        </div>
        <div className="iconContainer">
          <i class="bx bx-transfer-alt"></i>
        </div>
        <div className="departure">
          <h2 className="from">Mars - HW023</h2>
          <p>
            Return: <span className="returnDate date">10 May, 2022</span>
          </p>
        </div>
        <div className="costContainer">
          <p className="ticketCost">$9,650</p>
          <p className="numPassenger">per 1 person</p>
        </div>
      </div>
      {/* depart */}
      <div className="ticketContainer TabContainner">
        <div className="flightContainer">
        <i class='bx bxs-plane-take-off' ></i>
          <div className="flightInfo">
            <h4>Departure</h4>
            <p>
              Fligh date: <span className="departDate date">15 Dec, 2021</span>
            </p>
          </div>
          <p className="changeBtnContain">
            <a className="changeBtn" href="#">
              Change
            </a>
          </p>
        </div>
        <div className="detailInfoContainner">
          <div>
            <h5 className="date">15 Dec, 2021</h5>
            <p className="time">03:55</p>
          </div>
          <div className="iconContainer">
            <i class="bx bx-right-arrow-alt"></i>
          </div>
          <div>
            <h5 className="date">16 Jan, 2022</h5>
            <p className="time">15:00</p>
          </div>
          <div className="costContainer">
            <p className="numPassenger">31 days in flight</p>
            <p className="ticketCost">$4,800</p>
          </div>
        </div>
      </div>
      {/* return */}
      <div className="ticketContainer TabContainner">
        <div className="flightContainer">
        <i class='bx bxs-plane-land'></i>
          <div className="flightInfo">
            <h4>Return</h4>
            <p>
              Fligh date: <span className="departDate date">10 May, 2022</span>
            </p>
          </div>
          <p className="changeBtnContain">
            <a className="changeBtn" href="#">
              Change
            </a>
          </p>
        </div>
        <div className="detailInfoContainner">
          <div>
            <h5 className="date">10 April, 2022</h5>
            <p className="time">03:55</p>
          </div>
          <div className="iconContainer">
            <i class="bx bx-right-arrow-alt"></i>
          </div>
          <div>
            <h5 className="date">10 May, 2022</h5>
            <p className="time">15:00</p>
          </div>
          <div className="costContainer">
            <p className="numPassenger">30 days in flight</p>
            <p className="ticketCost">$4,850</p>
          </div>
        </div>
      </div>
    </div>
  );
}
